const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },

    description: {
      type: String,
      required: true,
    },

    techStack: [
      {
        type: String,
      },
    ],

    requiredSkills: [
      {
        type: String,
      },
    ],

    teamSize: {
      type: Number,
      required: true,
    },

    currentMembers: {
      type: Number,
      default: 1,
    },

    status: {
      type: String,
      enum: ["Open", "Closed"],
      default: "Open",
    },

    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Project", projectSchema);