import express from "express";
const router = express.Router();

import * as studentController from "../controllers/studentController";

router.get("/", studentController.getAllStudents);
router.get("/:id", studentController.getStudent);
router.post("/", studentController.createStudent);
router.patch("/:id", studentController.updateStudent);
router.delete("/:id", studentController.deleteStudent);

export default router;
