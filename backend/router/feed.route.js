import express from "express";
import { feedback, list } from "../controller/feedback.controller.js";

const router = express.Router();

router.route("/feed").post(feedback);
router.route("/list").get(list);

export default router;
