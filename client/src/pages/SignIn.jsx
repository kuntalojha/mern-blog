// client/src/pages/SignIn.jsx
// import React from "react";
import { Link, useNavigate } from 'react-router-dom';
import { Alert, Button, Label, Spinner, TextInput } from 'flowbite-react';

// Here I Import useState() from react
import { useState } from 'react';

export default function SignIn() {
  const [formData, setFormData] = useState({});
  const [errorMessage, setErrorMessage] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value.trim() });
  };

  //  Here I connect fornt-end and back-end
  //  Create handleSubmit function.
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    if (!formData.email || !formData.password) {
      return setErrorMessage('Please fill out all fields.');
    }
    try {
      // Here I set loding true and error null
      setLoading(true);
      setErrorMessage(null);
      const res = await fetch('/api/auth/signin', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success === false) {
        return setErrorMessage(data.message);
      }
      setLoading(false);
      if (res.ok) {
        navigate('/');
      }
    } catch (error) {
      setErrorMessage(error.message);
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
            This is blog website. You can sign in with your email and password
            or with Google
          </p>
        </div>
        {/* Right */}
        <div className='flex-1'>
          {/* Here I use handleSubmit function in onSubmit */}
          <form className='flex flex-col gap-4' onSubmit={handleSubmit}>
            {/* Label come from flowbite-react */}
            {/* This is for email */}
            <div>
              <Label value='Your email' />
              <TextInput
                type='email'
                placeholder='mane@company.com'
                id='email'
                onChange={handleChange}
              />
            </div>
            {/* This is for password */}
            <div>
              <Label value='Your password' />
              <TextInput
                type='password'
                placeholder='*********'
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
                'Sign In'
              )}
            </Button>
          </form>
          <div className='flex gap-2 text-sm mt-5'>
            <span>Dont have an account?</span>
            <Link to='/sign-up' className='text-blue-500'>
              Sign Up
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
