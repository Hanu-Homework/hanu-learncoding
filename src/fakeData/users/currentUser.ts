import User from "../../models/user/user";
import fakeProgrammingLanguages from "../programmingLanguages";

const currentUser: User = {
  accountName: "tangbamiinh",
  auth: {
    lastLoggedInAt: new Date(),
    userName: "tangbamiinh",
    password: "vailozluondaucatmoi",
  },
  mediaSrc: {
    avatar:
      "https://kenh14cdn.com/thumb_w/660/2020/9/8/photo-2-15995772922521570753570.jpg",
  },
  name: "Tăng Bá Minh",
  information: {
    skills: fakeProgrammingLanguages,
    summary: "IT Student looking for internship",
    socials: [
      {
        type: "github",
        url: "",
      },
      {
        type: "linkedin",
        url: "",
      },
      {
        type: "stackoverflow",
        url: "",
      },
    ],
    projects: [
      {
        type: "other",
        title: "Greenie",
        description:
          "A mobile app providing recyclable-waste-collecting service available on both Android and iOS",
        url: "greenie",
      },
    ],
    background: {
      workExperiences: [
        {
          city: "Hanoi",
          company: "Greenie",
          country: "vn",
          endDate: new Date(),
          startDate: new Date(),
          title: "CTO",
        },
      ],
      certificates: [
        {
          authourity: "Sololearn",
          endDate: null,
          name: "jQuery",
          startDate: new Date(),
          url: "",
        },
        {
          authourity: "Sololearn",
          endDate: null,
          name: "PHP",
          startDate: new Date(),
          url: "",
        },
        {
          authourity: "Sololearn",
          endDate: null,
          name: "Ruby",
          startDate: new Date(),
          url: "",
        },
      ],
      educations: [
        {
          city: "Hanoi",
          country: "vn",
          degree: "Student",
          endDate: new Date(),
          school: "Hanoi University",
          startDate: new Date(),
        },
      ],
    },
    activityAnalytics: {
      challenger: 40,
      learner: 69,
      influencer: 1,
      coder: 0,
      contributor: 0,
    },
    badges: [
      "challengeMaster",
      "courseMaster",
      "gainingExperience",
      "hatTrick",
      "master",
      "solutionMaster",
      "solutionNinja",
      "solver",
      "thePlayer",
      "unstoppable",
    ],
    competitionAnalytics: {
      numberOfDraw: 196,
      numberOfLost: 177,
      numberOfWon: 408,
      performanceInLastTwoWeek: {
        language: "all",
      },
    },
  },
  activities: [],
};

export default currentUser;
