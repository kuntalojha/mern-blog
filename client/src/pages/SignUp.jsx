// SignUp.jsx
// import React from "react";
// Import link from react-router-dom
import { Link, useNavigate } from 'react-router-dom';

// Import  Alert, Button, Label, Spinner, TextInput from flowbite-react
import { Alert, Button, Label, Spinner, TextInput } from 'flowbite-react';

// Here I Import useState() from react
import { useState } from 'react';

export default function SignUp() {
  // Here I make pace of set it going to take empty object
  // Here I use react useState()
  const [formData, setFormData] = useState({});

  // This one is use for hendell error
  const [errorMessage, setErrorMessage] = useState(null);

  // This one is use for loding effict
  const [loading, setLoading] = useState(false);

  // Here I use useNavigate to nevigate form
  const navigate = useNavigate();

  // Create handleChange function and use later
  const handleChange = (e) => {
    // This one console log every input.
    // console.log(e.target.value);
    // Here I use trim() method from JavaScript to trim space from input value
    setFormData({ ...formData, [e.target.id]: e.target.value.trim() });
  };
  // This console is use for fromData (Which data we recived from input)
  // console.log(formData);

  //  Here I connect fornt-end and back-end
  //  Create handleSubmit function
  /*
  const handleSubmit = async (e) => {
    e.preventDefault(); // should not refresh by default
    try {
      // This is the actual link.
      //  http://localhost:5173/
      // const res = await fatch('http://localhost:3000/api/auth/signup', {
      const res = await fetch('/api/auth/signup/', {
        method: 'POST',
        Headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData), // Here I pass formData
      });

      const data = await res.json(); // Converted to json data
    } catch (error) {}
  };
  */

  //  Here I connect fornt-end and back-end
  //  Create handleSubmit function.
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    if (!formData.username || !formData.email || !formData.password) {
      return setErrorMessage('Please fill out all fields.');
    }
    try {
      // Here I set loding true and error null
      setLoading(true);
      setErrorMessage(null);
      const res = await fetch('/api/auth/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' }, // 'headers' instead of 'Headers'
        body: JSON.stringify(formData),
      });
      // const data = await res.json();
      // if (data.success === false) {
      //   return setErrorMessage(data.message);
      // }

      // Handle successful response data here (if needed)
      const data = await res.json();
      // Handle the response data as needed
      // This if part is not working properly
      if (data.success === false) {
        return setErrorMessage(data.message);
      }
      console.log('Signup successful:', data);
      // If wvery thing is ok then we set loding false
      setLoading(false);

      // Here I use react-router-dom useNavigate (navigate)
      if (res.ok) {
        navigate('sign-in');
      }
    } catch (error) {
      // Handle errors heres
      // console.error('Error signing up:', error.message);
      setErrorMessage(error.message);
      // if any error happend then also loding false
      setLoading(false);
    }
  };
  return (
    <div className='min-h-screen mt-20'>
      <div className='flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-5'>
        {/* Left div */}
        <div className='flex-1'>
          <Link to='/' className='font-bold dark:text-white text-4xl'>
            {/* Here I make logo using muli colour  */}
            <span className='px-2 p-1 bg-gradient-to-r from-indigo-500 to bg-pink-500 rounded-lg text-white'>
              Kuntal's
            </span>
            Blog
          </Link>
          <p className='text-sm mt-5'>
            Doloribus illo quas necessitatibus aliquid deserunt consecteturc
            animi aspernatur, fuga voluptatibus placeat nisi vel officiis
            repellat.
          </p>
        </div>
        {/* Right */}
        <div className='flex-1'>
          {/* Here I use handleSubmit function in onSubmit */}
          <form className='flex flex-col gap-4' onSubmit={handleSubmit}>
            <div>
              {/* Label come from flowbite-react */}
              {/* This is for username */}
              <Label value='Your username' />
              <TextInput
                type='text'
                placeholder='Username'
                id='username'
                onChange={handleChange}
              />
              {/* This is for email */}
              <Label value='Your email' />
              <TextInput
                type='email'
                placeholder='mane@company.com'
                id='email'
                onChange={handleChange}
              />
              {/* This is for password */}
              <Label value='Your password' />
              <TextInput
                type='password'
                placeholder='Password'
                id='password'
                onChange={handleChange}
              />
            </div>
            {/* This one is for Sign Up Button */}
            {/* Button come from flowbite-react */}
            <Button
              gradientDuoTone='purpleToPink'
              type='submit'
              // Add loding effect
              disabled={loading}
            >
              {loading ? (
                <>
                  <Spinner size='sm' />{' '}
                  <span className='pl-3'> Loading...</span>
                </>
              ) : (
                'Sign Up'
              )}
            </Button>
          </form>
          <div className='flex gap-2 text-sm mt-5'>
            <span>Have an account?</span>
            <Link to='/sign-in' className='text-blue-500'>
              Sign In
            </Link>
          </div>
          {/* Here I make the alert using followbite  */}
          {errorMessage && (
            <Alert className='mt-5' color='failure'>
              {errorMessage}
            </Alert>
          )}
        </div>
      </div>
    </div>
  );
}
