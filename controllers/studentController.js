import Student from "../models/Student";

export const getAllStudents = async (req, res) => {
  const students = await Student.find();
  res.status(200).json({ students });
};

export const getStudent = async (req, res) => {
  const { id } = req.params;
  const student = await Student.findById(id);
  res.status(200).json({ student });
};

export const createStudent = async (req, res) => {
  const {
    firstName,
    lastName,
    age,
    gender,
    programme,
    major,
    email,
  } = req.body;
  const student = await Student.create({
    firstName,
    lastName,
    age,
    gender,
    programme,
    major,
    email,
  });
  res.status(201).json({ student });
};

export const updateStudent = async (req, res) => {
  const { id } = req.params;
  const student = await Student.findByIdAndUpdate(id, req.body, { new: true });
  res.status(200).json({ student });
};

export const deleteStudent = async (req, res) => {
  const { id } = req.params;
  await Student.findByIdAndDelete(id);
  res.status(200).json({ message: "Student data deleted successfully." });
};
