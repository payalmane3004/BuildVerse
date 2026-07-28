const { compare } = require("bcrypt");
const Project = require("../models/Project");

const createProject = async (req, res) => {
  try {
    const {
      title,
      description,
      techStack,
      requiredSkills,
      teamSize,
    } = req.body;

    // Validation
    if (
      !title ||
      !description ||
      !techStack ||
      !requiredSkills ||
      !teamSize
    ) {
      return res.status(400).json({
        message: "All fields are required",
      });
    }

    const project = await Project.create({
      title,
      description,
      techStack,
      requiredSkills,
      teamSize,
      owner: req.user.id,
    });

    res.status(201).json({
      message: "Project created successfully",
      project,
    });

  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Server Error",
    });
  }
};

const getAllProjects = async (req, res) => {
  try {
    const search = req.query.search || "";

    const projects = await Project.find({
      $or: [
        { title: { $regex: search, $options: "i" } },
        { techStack: { $regex: search, $options: "i" } },
        { requiredSkills: { $regex: search, $options: "i" } }
      ]
    })
      .populate("owner", "fullName email")
      .sort({ createdAt: -1 });

    res.status(200).json(projects);

  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Server Error",
    });
  }
};

const getMyProjects = async (req, res) => {
  try {
    const projects = await Project.find({
      owner: req.user.id,
    })
      .populate("owner", "fullName email")
      .sort({ createdAt: -1 });

    res.status(200).json(projects);

  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Server Error",
    });
  }
};


const getProjectById = async (req, res) => {
  try {
    const projectId = req.params.id;
   const project = await Project.findById(projectId)
     .populate("owner", "fullName email college github")
    if(!project) {
        return res.status(404).json({
    message: "Project not found"
})
    }
   res.status(200).json(project);;

  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Server Error",
    });
  }
};

const updateProject = async (req, res) => {
  try {
    const projectId = req.params.id;

    const project = await Project.findById(projectId);

    if (!project) {
      return res.status(404).json({
        message: "Project not found",
      });
    }

    // Check ownership
    if (project.owner.toString() !== req.user.id) {
      return res.status(403).json({
        message: "Unauthorized",
      });
    }

    const {
      title,
      description,
      techStack,
      requiredSkills,
      teamSize,
      status,
    } = req.body;

    project.title = title;
    project.description = description;
    project.techStack = techStack;
    project.requiredSkills = requiredSkills;
    project.teamSize = teamSize;
    project.status = status;

    await project.save();

    res.status(200).json({
      message: "Project updated successfully",
      project,
    });

  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Server Error",
    });
  }
};


const deleteProject = async (req, res) => {
  try {
    const projectId = req.params.id;

    const project = await Project.findById(projectId);

    if (!project) {
      return res.status(404).json({
        message: "Project not found",
      });
    }

    if (project.owner.toString() !== req.user.id) {
      return res.status(403).json({
        message: "Unauthorized",
      });
    }

    await project.deleteOne();

    res.status(200).json({
      message: "Project deleted successfully",
    });

  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Server Error",
    });
  }
};


module.exports = {
  createProject,
  getAllProjects,
  getProjectById,
  updateProject,
  deleteProject,
  getMyProjects,
};