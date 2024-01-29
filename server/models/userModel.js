import mongoose from "mongoose";

const uniformSchema = new mongoose.Schema(
  {
    firstInstallment: {
      type: Boolean,
      default: false,
    },
    secondInstallment: {
      type: Boolean,
      default: false,
    },
    isMeasureMentDone: {
      type: Boolean,
      default: false,
    },
    isArrived: {
      type: Boolean,
      default: false,
    },
    isDistributed: {
      type: Boolean,
      default: false,
    },
    isIssue: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const userSchema = new mongoose.Schema(
  {
    fname: {
      type: String,
      required: true,
    },
    mname: {
      type: String,
      required: true,
    },
    lname: {
      type: String,
      required: true,
    },
    enrollment: {
      type: Number,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    department: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      required: true,
      default: "Student",
    },
    email: {
      type: String,
      required: true,
      trim: true,
    },
    phone1: {
      type: Number,
      required: true,
    },
    phone2: {
      type: Number,
      required: true,
    },
    gender: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      required: true,
    },
    uniform: {
      type: uniformSchema, // Embedding the uniformSchema as a sub-document
      default: ({}) // Set default value to an empty object
    },
  },
  { timestamps: true }
);

const User = mongoose.model("users", userSchema);
const Uniform = mongoose.model('uniform', uniformSchema);

export { User, Uniform };
