import { portFeed } from "../model/portfolioFeedback.model.js";

export const feedback = async (req, res) => {
  try {
    const { name, role, feedback, rating } = req.body;

    // Validate all fields (handle 0 rating case properly)
    if (!name || !role || !feedback || rating === undefined) {
      return res.status(400).json({
        message: "Required fields are missing",
        success: false,
      });
    }

    // Create feedback document
    const data = await portFeed.create({
      name,
      role,
      feedback,
      rating,
    });

    return res.status(201).json({
      message: "Feedback posted successfully",
      success: true,
      feed: data,
    });
  } catch (error) {
    console.error("Error posting feedback:", error);
    return res.status(500).json({
      message: "Server error while posting feedback",
      success: false,
      error: error.message,
    });
  }
};


export const list = async (req, res) => {
  try {
    const data = await portFeed.find().sort({ createdAt: -1 }); // optional: sort latest first

    return res.status(200).json({
      message: "Successfully fetched feedback list",
      success: true,
      list: data,
    });
  } catch (error) {
    console.error("Error fetching feedback list:", error);
    return res.status(500).json({
      message: "Server error while fetching feedback",
      success: false,
      error: error.message,
    });
  }
};
