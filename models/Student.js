import { model, Schema } from "mongoose";

const studentSchema = new Schema(
  {
    firstName: {
      type: String,
      required: [true, "First name is required"],
    },
    lastName: {
      type: String,
      required: [true, "Last name is required"],
    },
    age: {
      type: Number,
      required: [true, "Age is required"],
    },
    gender: {
      type: String,
      required: [true, "Gender is required"],
    },
    programme: {
      type: String,
      required: [true, "Programme of study is required"],
    },
    major: {
      type: String,
      required: [true, "Specify your major"],
    },
    email: {
      type: String,
      required: [true, "Email address"],
    },
  },
  {
    timestamps: true,
  }
);

export default model("Student", studentSchema);
