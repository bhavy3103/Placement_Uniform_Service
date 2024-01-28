import { User } from '../models/userModel.js';

export const updateStudentUniform = async (req, res) => {
  try {
    const uniformUpdates = req.body;

    const updateOperations = uniformUpdates.map(update => ({
      updateOne: {
        filter: { enrollment: update.enrollment },
        update: { $set: { 'uniform': update.updatedFields } },
      },
    }));

    const result = await User.bulkWrite(updateOperations);
    console.log(result);
    res.json({ success: true, updatedCount: result.modifiedCount });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, error: 'Internal Server Error' });
  }
};
