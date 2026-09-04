const JoinRequest = require("../models/JoinRequest");
const Project = require("../models/Project");

const getReceivedRequests = async (req, res) => {
  try {
    const myProjects = await Project.find({
      owner: req.user.id,
    }).select("_id");

    const projectIds = myProjects.map((p) => p._id);

   const requests = await JoinRequest.find({
  project: { $in: projectIds },
  status: "Pending",
})
      .populate("applicant", "fullName email")
      .populate("project", "title");

    res.json(requests);
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Server Error",
    });
  }
};

const sendJoinRequest = async (req, res) => {
  try {
    const { projectId, message } = req.body;

    
    const project = await Project.findById(projectId);

    if (!project) {
      return res.status(404).json({
        message: "Project not found",
      });
    }

    // Owner cannot join own project
    if (project.owner.toString() === req.user.id) {
      return res.status(400).json({
        message: "You already own this project",
      });
    }

    // Check duplicate request
    const existingRequest = await JoinRequest.findOne({
      project: projectId,
      applicant: req.user.id,
    });

    if (existingRequest) {
      return res.status(400).json({
        message: "Join request already sent",
      });
    }




    const joinRequest = await JoinRequest.create({
      project: projectId,
      applicant: req.user.id,
      message,
    });

    res.status(201).json({
      message: "Join request sent successfully",
      joinRequest,
    });

  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Server Error",
    });
  }
};

  const getProjectRequests = async (req, res) => {
  try {
    const projectId = req.params.projectId;

    // Check project exists
    const project = await Project.findById(projectId);

    if (!project) {
      return res.status(404).json({
        message: "Project not found",
      });
    }

    // Only owner can view requests
    if (project.owner.toString() !== req.user.id) {
      return res.status(403).json({
        message: "Unauthorized",
      });
    }

    const requests = await JoinRequest.find({
      project: projectId,
    })
      .populate("applicant", "fullName email")
      .sort({ createdAt: -1 });

    res.status(200).json(requests);

  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Server Error",
    });
  }
};

const acceptJoinRequest = async (req, res) => {
  try {
    const requestId = req.params.id;

    const request = await JoinRequest.findById(requestId).populate("project");

    if (!request) {
      return res.status(404).json({
        message: "Join request not found",
      });
    }

    // Only project owner can accept
    if (request.project.owner.toString() !== req.user.id) {
      return res.status(403).json({
        message: "Unauthorized",
      });
    }

    // Don't accept twice
    if (request.status === "Accepted") {
      console.log("Status:", request.status);
      return res.status(400).json({
        
        message: "Request already accepted",
      });
    }

    const project = await Project.findById(request.project._id);

    // Add applicant to members if not already present
    if (!project.members.includes(request.applicant)) {
      project.members.push(request.applicant);
      project.currentMembers += 1;
      await project.save();
    }

    request.status = "Accepted";
    await request.save();

    res.status(200).json({
      message: "Join request accepted",
      request,
    });

  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Server Error",
    });
  }
};


const rejectJoinRequest = async (req, res) => {
  try {
    const requestId = req.params.id;

    const request = await JoinRequest.findById(requestId).populate("project");

    if (!request) {
      return res.status(404).json({
        message: "Join request not found",
      });
    }

    // Only owner can reject
    if (request.project.owner.toString() !== req.user.id) {
      return res.status(403).json({
        message: "Unauthorized",
      });
    }

    request.status = "Rejected";

    await request.save();

    res.status(200).json({
      message: "Join request rejected",
      request,
    });

  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Server Error",
    });
  }
};


const getMyJoinRequests = async (req, res) => {
  try {
    const requests = await JoinRequest.find({
      applicant: req.user.id,
    })
      .populate("project", "title description")
      .sort({ createdAt: -1 });

    res.status(200).json(requests);

  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Server Error",
    });
  }
};


module.exports = {
  sendJoinRequest,
  getProjectRequests,
  acceptJoinRequest,
  rejectJoinRequest,
  getMyJoinRequests,
  getReceivedRequests,
};