// user.model.js
//* Import mongoose from mongoose for make user Schema in mongoDB
import mongoose from 'mongoose';

// Import image from public folder  I wii try it later
// import defaultProfile from '../../client/public/profile.jpg';

// Here I Create Schema called  userSchema
const userSchema = new mongoose.Schema(
  {
    // Here I define uesrname data type and some conditions
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    profilePicture: {
      type: String,
      // default: defaultProfile,
      default:
        'https://soccerpointeclaire.com/wp-content/uploads/2021/06/default-profile-pic-e1513291410505.jpg',
    },
  },
  // This one use for save the createdAt and updatedAt timestamps at database
  { timestamps: true }
);

// Here I create model called User
// We should not use s Like Users Because MongoDB use s automatically of our mode name.
// And I use userSchema add the end
const User = mongoose.model('User', userSchema);

//* Here I Export User as `export default User;
//  Then we can use this model later.
export default User;
