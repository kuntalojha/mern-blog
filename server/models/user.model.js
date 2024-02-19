// user.model.js
//* Import mongoose from mongoose for make user Schema in mongoDB
import mongoose from 'mongoose';

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
