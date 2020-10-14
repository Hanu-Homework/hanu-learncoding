import ProgrammingLanguages from "../programmingLanguages";
import UserAuth from "./auth";

interface User {
  accountName: string;
  name: string;
  auth: UserAuth;
  mediaSrc: {
    avatar: string;
  };
  // UserInformation
  information: {
    summary: string;
    // UserSocialInformation
    socials: {
      // SocialTypes
      type: "linkedin" | "github" | "stackoverflow" | "google";
      url: string;
    }[];
    // UserProjectInformation
    projects: {
      // ProjectTypes
      type: "other";
      title: string;
      description: string;
      url: string;
    }[];
    background: {
      // UserWorkExperienceBackground
      workExperiences: {
        company: string;
        title: string;
        // CountryCodes
        country: "vn" | "en";
        city: string;
        startDate: Date;
        endDate: Date | null; // null mean currently working here
      }[];
      // UserEducationBackground
      educations: {
        school: string;
        degree: string;
        // CountryCodes
        country: "vn" | "en";
        city: string;
        startDate: Date;
        endDate: Date;
      }[];
      // Certificate
      certificates: {
        authourity: string;
        name: string;
        url: string;
        startDate: Date;
        endDate: Date | null; // null means this cert does not expire
      }[];
    };
    // AchievementBadgeCodes: need to abbreviate to compressed version to store in db
    badges: (
      | "courseMaster"
      | "solutionNinja"
      | "solutionMaster"
      | "solver"
      | "hatTrick"
      | "unstoppable"
      | "master"
      | "thePlayer"
      | "gainingExperience"
      | "challengeMaster"
    )[];
    skills: ProgrammingLanguages[];
    activityAnalytics: {
      learner: number;
      challenger: number;
      influencer: number;
      coder: number;
      contributor: number;
    };
    competitionAnalytics: {
      numberOfWon: number;
      numberOfDraw: number;
      numberOfLost: number;
      // UserCompetitionPerformance
      performanceInLastTwoWeek: {
        language: "all" | ProgrammingLanguages;
      };
    };
  };
  activities: {}[];
}

export default User;
