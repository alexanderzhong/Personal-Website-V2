export const PortfolioData = [
  {
    id: 0,
    title: "Software Engineering Intern at Avodigy",
    type: "Career",
    brief: "Android and Firebase development for Eventpedia mobile workflows.",
    preview: "AvodigyPreview.png",
    imageList: ["AvodigyPreview.png"],
    description:
      "At Avodigy, I worked on Eventpedia, an Android event and conferencing app. I built front-end UI for social feed and post surfaces, connected those flows to Firebase Firestore, and designed Firestore data models for feeds, friend relationships, and notifications with attention to query efficiency and cost.",
    date: 202005,
    location: "Remote/McLean, VA",
  },
  {
    id: 1,
    title: "Scotty Security",
    type: "Project",
    brief: "A cross platform app for accessing CMU campus security resources.",
    preview: "scottypreview.png",
    imageList: ["scottypreview.png"],
    description:
      "Scotty Security was a TartanHacks project focused on making CMU campus safety resources easier to access from one mobile app. Our team built a Cordova and Node.js prototype with location tracking, CMU police access, campus maps, news notifications, an emergency whistle, audio recording, and contacts. I led much of the front-end implementation and helped teammates ramp up on HTML, CSS, and JavaScript during the hackathon.",
    date: 202002,
    location: "Carnegie Mellon University",
  },
  {
    id: 2,
    title: "Ajenda",
    type: "Project",
    brief: "An automated scheduling app built using Android Studio.",
    preview: "AjendaPreview.png",
    imageList: ["AjendaPreview.png"],
    description:
      "Ajenda was a personal Android productivity app exploring automated scheduling. The app combined calendar functionality, persistent event storage, custom calendar UI work, weather data from OpenWeatherMap, and travel-time context from Google Maps. The core idea was to let users describe goals, such as recurring workouts, and have the app place those events at reasonable times based on constraints.",
    date: 201905,
    location: "Boston, MA",
  },
  {
    id: 3,
    title: "Network Automation Intern at NetBrain Technologies",
    type: "Career",
    brief: "Worked with computer networks, Python parsing, and MongoDB.",
    preview: "NetBrainPreview.png",
    imageList: ["NetBrainPreview.png"],
    description:
      "At NetBrain Technologies, I worked on API integration and network automation. I built a JavaScript proof of concept for ServiceNow integration, validated NetBrain REST API use cases with Python HTTP scripts, and wrote automation for extracting and updating network data in MongoDB.",
    date: 201905,
    location: "Burlington, MA",
  },
  {
    id: 4,
    title: "CD39L3 Various Glycoforms Study",
    type: "Research",
    brief:
      "Research project about the functionality of pancreatic enzyme CD39L3.",
    preview: "cd39l3preview.png",
    imageList: ["cd39l3preview.png"],
    description:
      'I studied glycoforms of the pancreatic protein CD39L3 with Professor Simon Robson\'s lab at Beth Israel Deaconess Medical Center. The project focused on how carbohydrate structures attached to CD39L3 affect enzymatic activity in purinergic signaling. I created and analyzed multiple glycoforms, modeled structural implications, published the work as a first-author paper in "Purinergic Signaling," and was named a Regeneron Science Talent Search National Semifinalist.',
    date: 201702,
    location: "Harvard Medical School",
  },
  {
    id: 8,
    title: "Software Engineer at Google Payments",
    type: "Career",
    brief:
      "Google Wallet and GPay engineering across Pix, recurring transactions, and product reliability.",
    preview: "",
    imageList: [],
    description:
      "At Google, I work on Google Payments and Google Wallet product systems. Recent work includes launching Pix bank balance support, improving Pix reliability through fallback and error-handling work, owning launch metrics and alerts, building recurring transaction management for GPay, and supporting compliance-oriented age restriction controls.",
    highlights: [
      "Launched Pix bank balance support and reliability improvements.",
      "Owned launch metrics, alerting, and fallback behavior for production systems.",
      "Built recurring transaction management and compliance-oriented controls.",
    ],
    stack: ["Java", "TypeScript", "Google Wallet", "GPay", "Pix"],
    date: 202206,
    location: "Mountain View, CA",
  },
  {
    id: 9,
    title: "Software Engineering Intern at Google Payments Autofill",
    type: "Career",
    brief:
      "Built backend risk-signal infrastructure supporting secure virtual card enrollment and retrieval.",
    preview: "",
    imageList: [],
    description: [
      "The Payments Autofill team focuses on making online checkout across Google Chrome and Android devices as fast, easy, and secure as possible. Its core mission is to eliminate checkout friction by automatically filling users' saved addresses and payment information.",
      "A major initiative supporting that mission is the Virtual Card Number project. Instead of sharing a user's actual credit card number with a merchant, VCN replaces it with a unique secure token. This reduces the need to repeatedly enter a card security code, prevents merchants from receiving the underlying card number, and allows Google to securely share timely risk signals with card issuers to help detect and prevent fraud. My work directly contributed to enabling this secure, low-friction checkout experience.",
      "During my internship, I implemented a new Ares Oar feature provider service to securely share anonymized risk signals with external credit card issuers during virtual card enrollment and retrieval. Ares is an anti-abuse platform, and Oar is a rule system within Ares. Together, the service enabled internal risk assessments, including account age, device bonding age, and security-update frequency, to be shared securely with issuer partners.",
      "I defined new Protocol Buffer messages and bucketing enums to formally isolate the data from general system signals, integrated the service with sources including the UserDeviceRisk API, and established service dependencies and client access controls for partner access. Because the system called the backend directly, I also rolled back an initial client-side experimentation framework and replaced it with Abseil flag controls, enabling safe feature rollout across testing and production environments.",
    ],
    highlights: [
      "Implemented an Ares Oar feature provider service that securely shared anonymized risk signals with external card issuers during virtual card enrollment and retrieval.",
      "Defined Protocol Buffer messages and bucketing enums to isolate account, device-bonding, and security-update risk signals.",
      "Integrated the service with the UserDeviceRisk API and established service dependencies and client access controls for issuer partners.",
      "Replaced a client-side experimentation framework with Abseil flag controls for safe backend rollout across testing and production environments.",
    ],
    stack: [
      "Protocol Buffers",
      "Ares / Oar",
      "Abseil Flags",
      "Backend APIs",
      "Access Controls",
      "Payments Security",
    ],
    date: 202108,
    location: "Mountain View, CA",
  },
  {
    id: 5,
    title: "Wanderform.com",
    type: "Project",
    brief:
      "AI travel planner web app for generating and refining structured itineraries.",
    preview: "WanderformTrips.png",
    imageList: [
      "WanderformTrips.png",
      "WanderformCreatePlan.png",
      "WanderformItinerary.png",
    ],
    description:
      "I built Wanderform as an AI travel planner that turns trip constraints into structured, editable itineraries. The app uses React, Vite, Tailwind CSS, and shadcn/ui on the frontend, with Express, Firebase Auth, Firestore, and LLM APIs supporting user profiles, saved trips, itinerary generation, event-level editing, summaries, and trip refinement. It includes calendar, timeline, map, weather, and AI-edit preview workflows, with Jest and Supertest coverage around key backend behavior.",
    highlights: [
      "Built saved trips, itinerary generation, event editing, and trip refinement workflows.",
      "Designed calendar, timeline, map, weather, and AI-edit preview surfaces.",
      "Added Jest and Supertest coverage around key backend behavior.",
    ],
    stack: [
      "React",
      "Vite",
      "Tailwind CSS",
      "Express",
      "Firebase Auth",
      "Firestore",
      "LLM APIs",
    ],
    date: 202506,
    location: "Mountain View, CA",
    links: [{ label: "Visit Wanderform", url: "https://wanderform.com" }],
  },
  {
    id: 6,
    title: "What Makes Games Popular?",
    type: "Research",
    brief:
      "CS229 machine learning project predicting Steam game popularity from metadata and engagement signals.",
    preview: "",
    imageList: [],
    description:
      "For Stanford CS229, I studied whether static Steam metadata can predict and explain video game popularity. The project combined a Kaggle Steam dataset with Steam Web API and SteamSpy data, then engineered a 513-dimensional feature space from genres, categories, platforms, languages, developers, publishers, pricing, achievements, descriptions, ownership, playtime, review sentiment, Metacritic scores, and discounts. We trained regularized linear regression and PyTorch neural network models on a composite popularity score, and used k-means and Gaussian Mixture Models to uncover interpretable game segments. The neural network modestly improved validation MSE over linear regression, while k-means with k=7 produced the clearest stable clusters and GMMs surfaced finer-grained but more overlapping niches.",
    highlights: [
      "Built a 513-dimensional feature set from Steam metadata and engagement signals.",
      "Compared regularized linear regression and PyTorch neural network models.",
      "Used k-means and Gaussian Mixture Models to identify interpretable game segments.",
    ],
    stack: ["Python", "PyTorch", "scikit-learn", "Steam API", "Clustering"],
    date: 202512,
    location: "Stanford University",
    links: [
      {
        label: "Read final report",
        document: "CS229ProjectFinalReport.pdf",
      },
    ],
  },
  {
    id: 7,
    title: "Beyond Full Fine-tuning",
    type: "Research",
    brief:
      "CS224N project comparing GPT-2 full fine-tuning with PEFT methods across NLP tasks.",
    preview: "",
    imageList: [],
    description:
      "For Stanford CS224N, I helped study how GPT-2 adapts to sentiment classification, paraphrase detection, and sonnet generation under full fine-tuning and parameter-efficient fine-tuning methods. The project implemented and compared bottleneck adapters, LoRA, IA3, prefix tuning, UniPELT-style hybrids, synthetic data augmentation, and Direct Preference Optimization. Our results showed that adaptation is strongly task-dependent: full fine-tuning remained a reliable baseline, but PEFT methods often acted as structural regularizers, saving compute and outperforming full fine-tuning in data-scarce or structure-sensitive settings. The best validation results included 0.559 on SST-5, 0.984 on CFIMDB, 0.911 on paraphrase detection, and 42.62 chrF for sonnet generation.",
    highlights: [
      "Compared full fine-tuning with adapters, LoRA, IA3, prefix tuning, and UniPELT-style hybrids.",
      "Evaluated adaptation across sentiment classification, paraphrase detection, and sonnet generation.",
      "Found PEFT methods useful as structural regularizers in data-scarce settings.",
    ],
    stack: ["Python", "PyTorch", "GPT-2", "LoRA", "Adapters", "DPO"],
    date: 202512,
    location: "Stanford University",
    links: [
      {
        label: "Read final report",
        document: "CS224NFinalReport.pdf",
      },
    ],
  },
];
