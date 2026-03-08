// Mock data for Irien Akter's Academic Portfolio

export const personalInfo = {
  name: "Irien Akter",
  title: "PhD Student",
  institution: "University at Albany, SUNY",
  department: "Computer Science",
  lab: "Albany Lab for Privacy and Security (ALPS)",
  advisor: "Dr. Pradeep K. Atrey",
  email: "iakter@albany.edu",
  linkedin: "https://linkedin.com/in/irien-akter",
  profilePhoto: "https://customer-assets.emergentagent.com/job_cyber-safety-lab/artifacts/uvaopdst_IMG_1335.jpg"
};

export const researchInterests = [
  {
    id: 1,
    title: "Cyberbullying Detection",
    description: "Detecting harassment and harmful language in online communities using content and context signals.",
    image: "https://images.unsplash.com/photo-1632603648995-a82f6fe23f89?w=800&h=500&fit=crop",
    icon: "Shield"
  },
  {
    id: 2,
    title: "Machine Learning",
    description: "Developing ML models that support moderation decisions and reduce harm at scale.",
    image: "https://images.unsplash.com/photo-1557562645-4eee56b29bc1?w=800&h=500&fit=crop",
    icon: "Brain"
  },
  {
    id: 3,
    title: "Artificial Intelligence (AI)",
    description: "Exploring AI-driven approaches for understanding online behavior, harmful speech patterns, and proactive safety systems.",
    image: "https://images.unsplash.com/photo-1697577418970-95d99b5a55cf?w=800&h=500&fit=crop",
    icon: "Cpu"
  },
  {
    id: 4,
    title: "Online Safety & Moderation",
    description: "Designing early-warning tools and decision support for safer social platforms.",
    image: "https://images.unsplash.com/photo-1633265486064-086b219458ec?w=800&h=500&fit=crop",
    icon: "Lock"
  },
  {
    id: 5,
    title: "Trust & Safety",
    description: "Studying how communities behave under toxicity and what interventions work best.",
    image: "https://images.pexels.com/photos/8566526/pexels-photo-8566526.jpeg?w=800&h=500&fit=crop",
    icon: "ShieldCheck"
  },
  {
    id: 6,
    title: "Conversation & Network Analysis",
    description: "Modeling conversation trajectories and social signals to forecast escalation risk early.",
    image: "https://images.unsplash.com/photo-1768224656445-33d078c250b7?w=800&h=500&fit=crop",
    icon: "Network"
  }
];

export const education = [
  {
    id: 1,
    degree: "PhD in Computer Science",
    institution: "University at Albany, SUNY",
    period: "2024 – Present",
    focus: "Early toxicity forecasting, cyberbullying detection, interpretable AI for online safety",
    logo: "https://customer-assets.emergentagent.com/job_cyber-safety-lab/artifacts/cf84rn68_university-at-albany-logo-png_seeklogo-488610.png"
  },
  {
    id: 2,
    degree: "Bachelor of Computer Science",
    institution: "International Islamic University Malaysia",
    period: "Completed",
    focus: "Computer Science fundamentals and research foundation",
    logo: "https://customer-assets.emergentagent.com/job_cyber-safety-lab/artifacts/kkrf6vf4_IIUM_Logo_2019.svg"
  }
];

export const experience = [
  {
    id: 1,
    title: "PhD Researcher",
    organization: "Albany Lab for Privacy and Security (ALPS), University at Albany, SUNY",
    period: "Aug 2024 – Present",
    responsibilities: [
      "Conducting research on early toxicity forecasting and cyberbullying detection in Reddit and Instagram communities.",
      "Building end-to-end data pipelines for ingestion, toxicity scoring (Detoxify), and feature engineering on large-scale social media datasets.",
      "Designing interpretable early-warning machine learning models to support proactive online moderation and intervention."
    ]
  },
  {
    id: 2,
    title: "Graduate Teaching Assistant",
    organization: "University at Albany, SUNY",
    period: "Aug 2024 – Present",
    responsibilities: [
      "Supporting undergraduate and graduate courses in Java, Cryptography, and Operating Systems.",
      "Assisting with labs, assignments, projects, grading, and student mentoring across multiple course sections."
    ]
  },
  {
    id: 3,
    title: "Academic Supervisor (Capstone Project)",
    organization: "University at Albany, SUNY",
    period: "Fall 2025",
    responsibilities: [
      "Supervised a senior capstone team developing SpotTox, an AI-powered web application for toxic conversation detection.",
      "Advised the integration of transformer-based NLP models (BERT, RoBERTa, DistilBERT) with React dashboards and Flask backend APIs.",
      "Guided system evaluation and deployment for early-warning cyberbullying analytics."
    ]
  },
  {
    id: 4,
    title: "Research Assistant",
    organization: "Department of ICT, International Islamic University Malaysia (IIUM)",
    period: "Mar 2022 – Sep 2023",
    responsibilities: [
      "Conducted deep learning-based quality assessment of Digital Breast Tomography (DBT) medical images.",
      "Reviewed and analyzed correlated research literature to support model development and evaluation.",
      "Gained experience applying computer vision techniques in healthcare imaging research."
    ]
  },
  {
    id: 5,
    title: "Data Engineer Intern",
    organization: "JobTech Pte. Ltd., Singapore",
    period: "Jul 2021 – Jan 2022",
    responsibilities: [
      "Developed Python-based web crawlers and scrapers to collect job and course listings from online platforms.",
      "Processed and structured acquired data into MongoDB pipelines for large-scale storage and retrieval.",
      "Maintained Selenium and BeautifulSoup workflows through validation, debugging, and performance improvements."
    ]
  }
];

export const projects = [
  {
    id: 1,
    title: "SpotTox — AI-Powered Toxicity Detection Web Application",
    period: "Fall 2025",
    description: "Supervised a senior capstone team that developed SpotTox, an interactive web platform for early detection and analysis of toxic conversations.",
    features: [
      "Supports multiple inputs: text, threads, URLs, and screenshots.",
      "Integrates Transformer-based models (BERT, RoBERTa, DistilBERT, LSTM).",
      "Provides dashboards for toxicity trends and flagged comments.",
      "Designed as an early-warning tool beyond single-post moderation systems."
    ],
    demoLink: "https://www.youtube.com/watch?v=example",
    technologies: ["React", "Flask", "BERT", "RoBERTa", "DistilBERT", "LSTM"]
  },
  {
    id: 2,
    title: "Independent Undergraduate Research Supervision",
    period: "Spring 2025",
    description: "Supervised Krisha Patel as an independent undergraduate researcher under my broader project on forecasting toxicity escalation in social media threads.",
    features: [
      "Explored early-stage conversational cues for cyberbullying detection.",
      "Studied escalation and withdrawal patterns in Reddit discussions.",
      "Contributed toward proactive moderation and intervention frameworks."
    ],
    technologies: ["Python", "NLP", "Reddit API", "Data Analysis"]
  },
  {
    id: 3,
    title: "Ongoing Research Direction",
    period: "Current",
    description: "My current PhD research continues to expand on early toxicity forecasting by combining temporal modeling, interpretable machine learning, and trajectory-based conversation analysis to support safer online communities.",
    features: [
      "Temporal modeling of conversation dynamics",
      "Interpretable ML for moderation decisions",
      "Trajectory-based conversation risk assessment",
      "Proactive intervention frameworks"
    ],
    technologies: ["Python", "PyTorch", "Transformers", "Time Series Analysis"]
  }
];

export const publications = [
  {
    id: 1,
    title: "Forecasting 'Neg Storms': Time-Aware Modeling of Toxic Situations in Social Media",
    authors: "Irien Akter, Vivek K. Singh, Pradeep K. Atrey",
    venue: "IEEE International Symposium on Multimedia (ISM)",
    year: 2025,
    type: "Conference Paper",
    abstract: "Introduced Comment Storm Severity (CSS), a time-aware metric for predicting toxicity escalation from early conversation signals.",
    links: {
      ieee: "https://ieeexplore.ieee.org/document/11366785",
      pdf: null
    },
    keywords: ["Toxicity Forecasting", "Social Media", "Machine Learning", "Cyberbullying"]
  }
];

export const awards = [
  {
    id: 1,
    title: "Dean's List Award",
    organization: "Faculty of ICT, IIUM",
    year: 2022,
    description: "Recognized for academic excellence"
  }
];

export const news = [
  {
    id: 1,
    title: "New Study Unveils Early-Warning Framework to Predict Surges of Online Abuse",
    date: "January 5, 2026",
    source: "Rutgers School of Communication and Information",
    url: "https://sci.rutgers.edu/news/new-study-unveils-early-warning-framework-predict-surges-online-abuse",
    image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&h=500&fit=crop",
    excerpt: "Researchers from Rutgers and University at Albany have developed an early-warning framework that can predict when a toxic social media conversation is likely to erupt into a wave of abusive remarks—a phenomenon called 'Neg Storms.'",
    highlights: [
      "Introduces Comment Storm Severity (CSS), a new metric to track and quantify toxicity levels",
      "Can accurately forecast Neg Storms 70-80% of the time using only the first ten comments",
      "Findings enable platforms to shift from reactive to proactive harm prevention",
      "Paper accepted at 2025 International Symposium on Multimedia (ISM) in Naples, Italy"
    ],
    coAuthors: ["Vivek K. Singh (Rutgers)", "Pradeep K. Atrey (University at Albany)"],
    category: "Research Publication"
  }
];

export const skills = {
  programming: ["Python", "Java", "JavaScript", "C++"],
  ml_frameworks: ["PyTorch", "TensorFlow", "Scikit-learn", "Transformers"],
  nlp_tools: ["BERT", "RoBERTa", "DistilBERT", "LSTM", "Detoxify"],
  data_tools: ["Pandas", "NumPy", "MongoDB", "SQL"],
  web_dev: ["React", "Flask", "FastAPI", "Node.js"],
  other: ["Git", "Docker", "LaTeX", "Research Methodology"]
};