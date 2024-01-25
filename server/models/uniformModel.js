import mongoose from 'mongoose';

const uniformSchema = new mongoose.Schema({
  userRef: {
    type: String,
    required: true,
  },
  firstInstallment: {
    type: Boolean,
    required: true,
  },
  secondInstallment: {
    type: Boolean,
    required: true,
  },
  isMeasureMentDone: {
    type: Boolean,
    required: true,
  },
  isArrived: {
    type: Boolean,
    required: true,
  },
  isDistributed: {
    type: Boolean,
    required: true,
  },
  isIssue: {
    type: Array,
    required: true,
  }
}, { timestamps: true }
);

const Uniform = mongoose.model('uniform', uniformSchema);

export default Uniform;
