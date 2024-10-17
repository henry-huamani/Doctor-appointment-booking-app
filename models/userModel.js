const mongoose = require("mongoose");

// const userSchema = new mongoose.Schema(
//   {
//     name: {
//       type: String,
//       required: true,
//     },
//     email: {
//       type: String,
//       required: true,
//     },
//     password: {
//       type: String,
//       required: true,
//     },
//     isDoctor: {
//       type: Boolean,
//       default: false,
//     },
//     isAdmin: {
//       type: Boolean,
//       default: false,
//     },
//     seenNotifications: {
//       type: Array,
//       default: [],
//     },
//     unseenNotifications: {
//       type: Array,
//       default: [],
//     },
//   },
//   {
//     timestamps: true,
//   }
// );
const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: String,
      required: true,
    },
    identityDocument: {
      type: String,
      required: true,
    },
    isDoctor: {
      type: Boolean,
      default: false,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    speciality: {
      type: String,
      required: false,
    },
    experience: {
      type: String,
      required: false,
    },
    collegiateNumber: {
      type: String,
      required: false,
    },
    timings : {
      type: Array,
      required: false,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    seenNotifications: {
      type: Array,
      default: [],
    },
    unseenNotifications: {
      type: Array,
      default: [],
    },
  },
  {
    timestamps: true,
  }
);

const userModel = mongoose.model("users", userSchema);

module.exports = userModel;
