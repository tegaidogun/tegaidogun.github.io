const logotext = "tegaidogun";
const meta = {
  title: "Eric Idogun",
  description:
    "My name is Eric Oghenetega Idogun, a Computer Science graduate and Software Developer based in Miami, Florida.",
};

const introdata = {
  title: "Eric Idogun",
  animated: {
    first: "Computer Scientist",
    second: "Software Developer",
    third: "Systems Programmer",
    fourth: "Research Engineer",
  },
  description:
    "A recent computer science graduate passionate about software development, artificial intelligence, and innovative problem-solving.",
  your_img_url: require('./assets/images/personal-photo.jpeg')
};

const dataabout = {
  title: "A bit about myself",
  aboutme:
    "I am a recent computer science graduate from Florida International University, eager to apply my academic knowledge and interpersonal skills to real-world challenges. Skilled in working both independently and as part of a team to research, design, develop, and engineer innovative business solutions.",
};

const worktimeline = [
  {
    jobtitle: "Software Graphics Engineer",
    company: "Hash Studios LLC",
    location: "Miami, FL",
    date: "August 2024 –  Present",
    description: "Optimizing applications in Unity, incorporating C#, OpenGL, and HLSL to enhance interactivity and performance.",
    duties: [
      "Boosted application performance through shader optimization and memory management, reducing latency by 22%.",
      "Collaborated with teams using Agile methodologies, maintaining a perfect sprint record.",
      "Automated deployment processes using CI/CD pipelines, reducing release times by 10%"
    ]
  },
  {
    jobtitle: "Software Developer",
    company: "HoloMath Project",
    location: "Miami, FL",
    date: "Oct 2023 – May 2024",
    description: "Collaborated on a Unity-based project to develop an educational AR app for students.",
    duties: [
      "Optimized system performance, reducing load times by 50%.",
      "Utilized C# and OpenGL to enhance system modularity and response times.",
      "Presented the project at Art Basel Miami, resulting in 10 partnership inquiries."
    ]
  },
  {
    jobtitle: "Research Assistant",
    company: "Florida International University",
    location: "Miami, FL",
    date: "Oct 2023 – Apr 2024",
    description: "Conducted research on AI-driven educational content, improving web-based tools for 2,000+ users.",
    duties: [
      "Developed a command-line AI tool using C, improving search result relevance.",
      "Reduced data processing time by 30% using multi-threaded computing.",
      "Analyzed AI usage data in educational settings using R for evaluation."
    ]
  },
  {
    jobtitle: "Design Support Intern",
    company: "Florida International University",
    location: "Miami, FL",
    date: "Oct 2022 – Mar 2023",
    description: "Supported IT operations and enhanced user accessibility for e-learning systems.",
    duties: [
      "Resolved 100+ technical issues with a 91% satisfaction rate.",
      "Created interactive course content using JavaScript, increasing student engagement by 42%.",
      "Collaborated with faculty to implement new technology, improving user experience."
    ]
  },
  {
    jobtitle: "IT Intern",
    company: "Pepperoni Foods Limited",
    location: "Port Harcourt, Nigeria",
    date: "Aug 2019 – Jul 2021",
    description: "Managed IT infrastructure and developed software solutions for the company.",
    duties: [
      "Developed an in-house ledger application, saving the company over $2,000 annually.",
      "Improved server uptime to 99% by implementing Linux administration best practices.",
      "Researched and introduced new tools that reduced project management time by 10 hours per month."
    ]
  }
];

const skills = [
  {
    name: "C++",
    value: 90,
  },
  {
    name: "C#",
    value: 85,
  },
  {
    name: "Python",
    value: 90,
  },
  {
    name: "Rust",
    value: 85,
  },
  {
    name: "JavaScript",
    value: 80,
  },
  {
    name: "Unity",
    value: 85,
  },
  {
    name: "OpenGL",
    value: 75,
  },
  {
    name: "Java",
    value: 80,
  },
  {
    name: "SQL",
    value: 70,
  },
  {
    name: "Linux Administration",
    value: 80,
  }
];

const services = [
  {
    title: "Software Development",
    description:
      "Developing efficient and scalable software solutions using various programming languages and frameworks.",
  },
  {
    title: "Research & Development",
    description:
      "Conducting research in computer architecture, systems programming, and operating systems to push the boundaries of technology.",
  },
  {
    title: "Game Development",
    description:
      "Creating immersive game experiences using Unity, OpenGL and other game development tools.",
  },
  {
    title: "Artificial Intelligence",
    description:
      "Implementing AI-driven solutions for data analysis, automation, and enhancing user experiences.",
  },
  {
    title: "Data Science",
    description:
      "Analyzing and interpreting complex data to help make informed decisions, leveraging statistical techniques, machine learning, and data visualization.",
  },
  {
    title: "Web Development",
    description:
      "Building responsive and dynamic websites and web applications.",
  },
];

const dataportfolio = [
  {
    title: "Crash Shell",
    description:
      "A modular shell implemented in Rust, supporting basic command execution, directory navigation, and environment management.",
    link: "https://github.com/tegaidogun/crash-shell",
    icons: ["rust", "github"],
  },
  {
    title: "Physics Augmented Reality Simulation",
    description:
      "An educational AR physics simulation built for Shellhacks Hackathon, earning first runner-up.",
    link: "https://github.com/tegaidogun/cosmo-projectiles",
    icons: ["unity", "github"],
  },
  {
    title: "Data Analysis for BlueGAP",
    description:
      "Automated data preprocessing pipeline for the Blue-Green Action Platform, analyzing water quality across Florida.",
    link: "https://github.com/tegaidogun/data-analysis-bluegap",
    icons: ["python", "jupyter", "html", "markdown", "github"],
  },
  {
    title: "SimpleDirStat",
    description:
      "A command-line tool for visualizing directory and file size statistics. Provides quick insights into file system usage.",
    link: "https://github.com/tegaidogun/simpledirstat",
    icons: ["cplusplus", "github"],
  },
  {
    title: "Markdown Viewer Browser Plugin",
    description:
      "A lightweight browser extension that renders Markdown files directly in the browser with responsive design.",
    link: "https://github.com/tegaidogun/markdown-viewer-browser-plugin",
    icons: ["javascript", "css", "github"],
  },
];

const contactConfig = {
  YOUR_EMAIL: "mail@tegaidogun.dev",
  YOUR_FONE: "520-261-5316",
  description: "Feel free to reach out to me for collaborations or inquiries about my work.",
  YOUR_SERVICE_ID: "service_qak11yj",
  YOUR_TEMPLATE_ID: "template_p2acunl",
  YOUR_USER_ID: "uuhEPZtwcvlcCBRUZ",
};

const socialprofils = {
  github: "https://github.com/tegaidogun",
  linkedin: "https://linkedin.com/in/oghenetega-idogun",
  twitter: "https://x.com/tegaidogun_",
  youtube: "https://www.youtube.com/@idogunoghenetega",
  // Add other social profiles if available
};

const blogposts = [
  {
    title: "How to Use React Hooks",
    date: "July 15, 2024",
    platforms: ["medium"], // Dynamic platforms
    link: "https://medium.com/example-post",
  },
  {
    title: "Building with Rust",
    date: "August 21, 2024",
    platforms: ["devto"], // Dynamic platforms
    link: "https://dev.to/example-post",
  },
];


export {
  meta,
  dataabout,
  dataportfolio,
  worktimeline,
  skills,
  services,
  introdata,
  contactConfig,
  socialprofils,
  logotext,
  blogposts,
};
