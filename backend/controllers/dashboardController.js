const Project = require("../models/Project");
const JoinRequest = require("../models/JoinRequest");

const getDashboard = async (req, res) => {
  try {
    const myProjects = await Project.find({
      owner: req.user.id,
    });

    const projectIds = myProjects.map(project => project._id);

    const pendingRequests = await JoinRequest.countDocuments({
      project: { $in: projectIds },
      status: "Pending",
    });

    const acceptedRequests = await JoinRequest.countDocuments({
      applicant: req.user.id,
      status: "Accepted",
    });

    const rejectedRequests = await JoinRequest.countDocuments({
      applicant: req.user.id,
      status: "Rejected",
    });

    res.status(200).json({
      myProjects: myProjects.length,
      pendingRequests,
      acceptedRequests,
      rejectedRequests,
      recentProjects: myProjects.slice(0, 5),
    });

  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Server Error",
    });
  }
};

module.exports = {
  getDashboard,
};