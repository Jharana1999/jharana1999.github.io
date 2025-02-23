/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Jharana Sapkota",
  title: "Hi all, I'm Jharana",
  subTitle:
    "A passionate Data Analyst & Software Engineer with experience in applying Machine Learning & Data Analytics to extract insights, and building Web & Mobile applications.With expertise in both, I bridge the gap between data-driven decision-making and scalable engineering solutions",
  resumeLink:
    "https://drive.google.com/file/d/19TqLt4f_tYgcNmqP0yJApwxQyxTMJNmY/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/Jharana1999",
  linkedin: "https://www.linkedin.com/in/jhsap/",
  gmail: "jharanasapkota09@gmail.com",
  facebook: "https://www.facebook.com/profile.php?id=61559924492930#",
  instagram: "https://www.instagram.com/ericaitisofc/",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "Data-Driven Full Stack Developer & Analyst Exploring Cutting-Edge Tech Stacks",
  skills: [
    emoji(
      "⚡ Data Analytics & Machine Learning – Applying ML models to uncover patterns, make data-driven predictions, and enhance decision-making. "
    ),
    emoji("⚡ Full Stack Development – Building interactive, high-performance web & mobile applications."),
    emoji(
      "⚡ Cloud & Third-Party Integrations – Deploying solutions with AWS, Firebase."
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "sql",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },



  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Virginia Tech",
      logo: require("./assets/images/vtl.png"),
      subHeader: "Master of Science in Computer Science",
      duration: "Jan 2024 - Dec 2025",
      desc: "Graduate Research Assistant",
      descBullets: [
        "Thesis: Categorizing and Comparing Student's interactions in eTextbook",
        "Major Coursework: Big Data Engineering, Information Visualization, Machine Learning, Software Engineering"
        
      ],
    },
    {
      schoolName: "Pokhara University",
      logo: require("./assets/images/pkr.png"),
      subHeader: "Bachelor of Computer Information System(Java)",
      duration: "Sept 2017 - Aug 2022",
      desc: "Dean's List and University Topper",
      descBullets: [
      "Capstone: Ikuzo- The Ride Sharing Application",
      "Major Coursework: Data Structures and Algorithms, Data Analysis and Modeling, Statistics, Advanced Java, Operating Systems"
      
    ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: false, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, // Set it to true to show the Work Experience section
  experience: [
    {
      role: "ML Researcher / Graduate Research Assistant",
      company: "Virginia Tech",
      companylogo: require("./assets/images/vtl.png"), // Replace with the correct Virginia Tech logo
      date: "Dec 2024 – Present",
      desc: "Conducting research on time-series forecasting for environmental monitoring, developing ML models for air pollution prediction and energy optimization.",
      descBullets: [
        "Developed a machine learning model using adaptive learning techniques to predict air pollution levels.",
        "Implemented deep learning models with TensorFlow/Keras to optimize energy consumption predictions for construction management applications."
      ]
    },
    {
      role: "Graduate Teaching Assistant",
      company: "Virginia Tech",
      companylogo: require("./assets/images/vtl.png"), // Replace with the correct Virginia Tech logo
      date: "Jan 2024 – Dec 2024",
      desc: "Assisted in teaching undergraduate-level courses in Computer Science, specializing in Data Structures and Algorithms.",
      descBullets: [
        "Conducted lab sessions to reinforce theoretical concepts through hands-on programming exercises.",
        "Provided one-on-one support to students, assisting with debugging, algorithm optimization, and best coding practices."
      ]
    },
    {
      role: "Data Analyst",
      company: "Baizani",
      companylogo: require("./assets/images/bai.png"), 
      date: "June 2023 – Dec 2023",
      desc: "Developed predictive models and automated dashboards for business intelligence and customer retention.",
      descBullets: [
        "Built automated dashboards to track key KPIs, reducing reporting time by 40%.",
        "Optimized e-commerce operations by analyzing shopping patterns and customer feedback.",
        "Developed predictive models to forecast sales trends and customer churn using machine learning techniques, improving decision-making and retention by 20%."
      ]
    },
    {
      role: "Mobile and Web Application Developer",
      company: "Skybase Innovations",
      companylogo: require("./assets/images/sky.png"), 
      date: "Jan 2021 – June 2023",
      desc: "Developed and maintained web and mobile applications with high performance and scalability.",
      descBullets: [
        "Built cross-platform mobile applications using Flutter and Dart, integrating RESTful APIs for real-time data synchronization.",
        "Developed dynamic, responsive web applications with modern front-end technologies.",
        "Ensured high performance, scalability, and seamless user experience across platforms."
      ]
    }
  ]
};


/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  projects: [
    {
      image: require("./assets/images/mds.jpeg"), // Replace with actual image path
      projectName: "Rolling CNN+LSTM Model for Air Pollution Forecasting",
      projectDesc: "Developed a CNN+LSTM model for real-time air pollution forecasting, implementing data preprocessing and sequential modeling.",
      footerLink: [
        {
          name: "View on Google Colab",
          url: "https://colab.research.google.com/drive/128IYIpcH3tYtzRxzB8m4e-Faa38IA-Rg?authuser=1"
        }
      ]
    },
    {
      image: require("./assets/images/cnn.jpeg"), // Replace with actual image path
      projectName: "Gamified Visualization of Multidimensional Scaling",
      projectDesc: "Developed an interactive MDS visualization tool to help users explore high-dimensional data.",
      footerLink: [
        {
          name: "View on Observable",
          url: "https://observablehq.com/d/9f216ce4f75a6528"
        }
      ]
    },
    {
      image: require("./assets/images/crop.png"), // Replace with actual image path
      projectName: "Crop Recommendation Dashboard",
      projectDesc: "Built an intelligent crop recommendation dashboard using KNN.",
      footerLink: [
        {
          name: "View on GitHub",
          url: "https://github.com/Jharana1999/crop-recommendation-dashboard"
        }
      ]
    },
    {
      image: require("./assets/images/credit.jpeg"), // Replace with actual image path
      projectName: "Credit Card Fraud Detection",
      projectDesc: "Developed a fraud detection model using SMOTE and SHAP on imbalanced datasets.",
      footerLink: [
        {
          name: "View on GitHub",
          url: "https://github.com/Jharana1999/CreditCardFraud"
        }
      ]
    },
    // {
    //   image: require("./assets/images/job_analysis.png"), // Replace with actual image path
    //   projectName: "Job Posting Analysis",
    //   projectDesc: "Created SQL queries to analyze job postings, skills demand, and salaries.",
    //   footerLink: [
    //     {
    //       name: "View on GitHub",
    //       url: "https://github.com/Jharana1999/Sql_Project"
    //     }
    //   ]
    // },
    {
      image: require("./assets/images/see.webp"), // Replace with actual image path
      projectName: "Help for SEE",
      projectDesc: "Developed an exam preparation app with study materials and mock tests for entrance exams.",
      footerLink: [
        {
          name: "View on Google Play",
          url: "https://play.google.com/store/apps/details?id=com.helpforsee.app"
        }
      ]
    },
    {
      image: require("./assets/images/aayo.png"), // Replace with actual image path
      projectName: "Aayo - Ride Sharing App",
      projectDesc: "A ride-sharing application to manage transportation issues in Pokhara Valley.",
      footerLink: [
        {
          name: "View on Google Play",
          url: "https://play.google.com/store/apps/details?id=app.aayo.ride&pcampaignid=web_share"
        }
      ]
    },
    {
      image: require("./assets/images/bhok.webp"), // Replace with actual image path
      projectName: "Bhoklayo",
      projectDesc: "A food delivery application for Pokhara Valley.",
      footerLink: [
        {
          name: "View on Google Play",
          url: "https://play.google.com/store/apps/details?id=com.bhoklayo.android"
        }
      ]
    },
    {
      image: require("./assets/images/ghar.png"), // Replace with actual image path
      projectName: "Ghardurbar",
      projectDesc: "A platform for home inspections, managed by engineers, architects, and realtors.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://ghardurbar.com"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};


// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Certifications"),
  achievementsCards: [
    {
      title: "Data Analysis with Python",
      subtitle:
        "Coursera",
      image: require("./assets/images/c1.png"),
      footerLink: []
    },
    {
      title: "Data Visualization",
      subtitle:
        "Coursera",
      image: require("./assets/images/c2.png"),
      footerLink: []
    },

    {
      title: "Machine Learning with Python",
      subtitle: "Coursera",
      image: require("./assets/images/c3.png"),
      footerLink: []
    },
    {
      title: "Unsupervised Learning: Recommenders, Reinforcement Learning",
      subtitle:
        "Coursera",
      image: require("./assets/images/c4.jpg"),
      footerLink: []
    },
    {
      title: "Supervised Learning: Regression and Classification",
      subtitle:
        "Coursera",
      image: require("./assets/images/c5.jpg"),
      footerLink: []
    },
    {
      title: "Advanced Learning Algorithms",
      subtitle:
        "Coursera",
      image: require("./assets/images/c6.jpg"),
      footerLink: []
    },
    {
      title: "AI Bootcamp",
      subtitle:
        "Inc Academy",
      image: require("./assets/images/c7.jpg"),
      footerLink: []
    },
    {
      title: "Android App Development",
      subtitle:
        "Skybase Innovations",
      image: require("./assets/images/c8.jpg"),
      footerLink: []
    },
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false// Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false// Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false// Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "5406050749",
  email_address: "jharanasapkota09@gmail.com",
  display: true
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
