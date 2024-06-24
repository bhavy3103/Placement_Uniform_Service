import { User } from '../models/userModel.js';

export const updateStudentUniform = async (req, res) => {
  try {
    const uniformUpdates = req.body;

    const updateOperations = uniformUpdates.map((update) => ({
      updateOne: {
        filter: { enrollment: update.enrollment },
        update: { $set: { uniform: update.uniform } },
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

export const updateUniformIssue = async (req, res) => {
  try {
    const userId = req.body.userId;
    const { isIssue, issueDescription } = req.body;
    console.log(isIssue);
    const user = await User.findById(userId);

    if (!user) {
      return res
        .status(404)
        .json({ success: false, message: 'User not found' });
    }
    if (isIssue === 'No issue found') {
      user.status = 'completed';
      user.uniform.isIssue = isIssue;
    } else {
      user.uniform.isIssue = isIssue;
      user.uniform.issueDescription = issueDescription;
      user.status = 'pending';
    }
    await user.save();

    return res
      .status(200)
      .json({ success: true, message: 'isIssue field updated successfully' });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};
