const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    // createdAt: {
    //   type: Date,
    //   // if we want  not to send this field to the client we can use select property on the schema
    //   // select: false,
    // },
    name: {
      type: String,
      required: [true, "Please tell us your  name"],
    },

    email: {
      type: String,
    },

    dob: { type: Date },
    joinDate: { type: Date },
    relievingDate: { type: Date },
    salary: {
      type: String,
    },
    status: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);
module.exports = User;
