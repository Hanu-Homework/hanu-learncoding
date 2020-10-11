import CourseModule from "./module";

interface Course {
  name: string;
  shortDescription: string;
  numberOfLessons: number;
  numberOfLearners: number;
  numberOfQuizzes: number;
  modules: CourseModule[];
  id: string;
  mediaSrc: {
    icon: string;
    image: string;
  };
}

export default Course;
