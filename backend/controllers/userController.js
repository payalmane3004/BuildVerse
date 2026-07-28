const User = require("../models/User");

const updateProfile = async (req, res) => {
  try {
    const userId = req.user.id;

    const {
      fullName,
      bio,
      college,
      branch,
      year,
      skills,
      github,
      linkedin,
      portfolio,
    } = req.body;

    const updatedUser = await User.findByIdAndUpdate(
      userId,
      {
        fullName,
        bio,
        college,
        branch,
        year,
        skills,
        github,
        linkedin,
        portfolio,
      },
      {
        new: true,
        runValidators: true,
      }
    ).select("-password");

    res.status(200).json({
      message: "Profile updated successfully",
      user: updatedUser,
    });

  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Server Error",
    });
  }
};

const getProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select("-password");

    if (!user) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    res.status(200).json(user);

  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Server Error",
    });
  }
};

module.exports = {
  updateProfile,
  getProfile,
};