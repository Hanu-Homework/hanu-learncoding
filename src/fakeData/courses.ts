import Course from "../models/course/course";

const fakeCourses: Course[] = [
  {
    id: "python",
    modules: [
      {
        id: "1",
        lessons: [
          {
            id: "1",
            name: "Welcome To Python",
            numberOfQuizzes: 3,
          },
        ],
        name: "Basic Concepts",
      },
    ],
    name: "Python 3",
    numberOfLearners: 6913359,
    numberOfLessons: 88,
    numberOfQuizzes: 271,
    shortDescription:
      "Learn Python, one of today's most in-demand programming languages on-the-go! Practice writing Python code, collect points, & show off your skills now!",
    mediaSrc: {
      icon: "https://www.sololearn.com/Icons/Courses/1073.png",
      image: "https://www.sololearn.com/Images/home-new/1073.png",
    },
  },
  {
    id: "python",
    modules: [],
    name: "Python 3",
    numberOfLearners: 6913359,
    numberOfLessons: 88,
    numberOfQuizzes: 271,
    shortDescription:
      "Learn Python, one of today's most in-demand programming languages on-the-go! Practice writing Python code, collect points, & show off your skills now!",
    mediaSrc: {
      icon: "https://www.sololearn.com/Icons/Courses/1073.png",
      image: "https://www.sololearn.com/Images/home-new/1073.png",
    },
  },
  {
    id: "python",
    modules: [],
    name: "Python 3",
    numberOfLearners: 6913359,
    numberOfLessons: 88,
    numberOfQuizzes: 271,
    shortDescription:
      "Learn Python, one of today's most in-demand programming languages on-the-go! Practice writing Python code, collect points, & show off your skills now!",
    mediaSrc: {
      icon: "https://www.sololearn.com/Icons/Courses/1073.png",
      image: "https://www.sololearn.com/Images/home-new/1073.png",
    },
  },
];
export default fakeCourses;
