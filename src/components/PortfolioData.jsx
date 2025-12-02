export const PortfolioData = [
  {
    id: 0,
    title: "Software Engineering Intern at Avodigy",
    type: "Career",
    brief: "Worked as a Android mobile developer for social media style app.",
    preview: "AvodigyPreview.png",
    imageList: ["AvodigyPreview.png"],
    description:
      "During my sophomore year in college, I interned at a company called Avodigy. This cmopany creates applications that allow companies to manage and streamline their internal workflow. The product I worked on was called Eventpedia, which was an event and conferencing app. For this app, I developed front end UI to display post and feed information from Firebase Firestore and designed data models for feed, friend, and notification systems in Firebase Firestore to maximize efficiency and pricing.",
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
      "I built the app \"Scotty Security\" with some of my friends during TartanHacks (hackathon at CMU). We built it as a cross-platform app, using HTML, CSS, and Javascript to create the front end, and a website that allowed for simple server processing to build the backend. The idea came from one of the themes given in the hackathon, which was campus security. We figured that while there several security apps/websites that helped people stay safe, there wasn't one that had everything that a student would need. So, we came up with \"Scotty Security\", which is a all in one campus security app, with access to nearly all of the security resources at CMU, including CMU police department and a map of campus. The features of the app include location tracking, news notifications, an emergency whistle, audio recording, and a contacts list/page. We used Cordova and Node.js to build the app (in our presentation, we built it for android). We also used Google Maps API for location tracking, and we built a simple set of RESTful APIs to transfer location information. I built most of the front end, and the simpler functions of the app that didn't require backend usage, including the emergency whistle and the audio recording functionality. Since two of the people on my team were not familiar with front end development, I also taught and guided them through building some of the front end with HTML, CSS, and JS. I'm really proud of this project, not only because I contributed a lot to it and that we were able to make a successful final product in the 24 hours we were given, but also because I think that the team worked really well together and I'm proud of what we created as a group. By the way, I have included a video of a quick demonstration of our project. It's a bit rough, but it was nearly the deadline, and we needed to submit soon.",
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
      'I built "Ajenda" as a personal project of mine both initially as a small commercial product and as a way to get familiar with Android Studio and the android libraries/android app workflow. I decided to not to make it commerical because of marketability and revenue-model, but I still think it is a worthwhile idea with the right execution. "Ajenda" is a productivity app that optimizes scheduling by automatically placing events based on a variety of different factors, including weather and driving time. The idea is that the user can say something like "Schedule Workout Sessions for 5 times a week", and the app should be able to place workout events in your schedule in the best possible times. Currently, the app has full calendar functionality along with persistent data storage for events. Although the calendar seems to be the regular calendar UI component, it is actually a custom made UI component, and it can and will be changed in the future. The app also currently uses OpenWeatherMap API and Google Maps API to obtain weather and distance information.',
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
      "During my freshman year, I interned at NetBrain Technologies, which is an entreprise software company whose product allows companies to manage their internal computer network. While I was there, I researched and implemented third-party integration with ServiceNow by building a POC web app using JavaScript. I also tested NetBrain RESTful APIs and confirmed their use cases by writing HTTP calls in Python using Python's requests library and also wrote scripts to extract and update network data using NetBrain's MongoDB database.",
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
      'I did a research project on the pancreatic protein CD39L3 during my junior year of highschool and the following summer (2017). I worked with Professor Simon Robson and his lab at Beth Israel Deaconess Medical Center, and they mentored and advised over the course of my project. To provide some background knowledge on CD39L3, it is a glycoprotein found in the pancreas that is involved with Purinergic Signaling. Specifically, it is an enzyme that catalyzes purine nucleotides such ATP and GTP, and plays a role in regulating their signaling function. CD39L3 is a glycoprotein, which means it contains carbohydrate structures attached to its polypeptide chain. My project focused mainly on these structures, and I created several glycoforms of the protein, where I removed various amounts of sugar from the protein. I then measured the activity of these forms, included a model for the protein structure, and analyzed the potential impacts of these new glycoforms. This is a very watered down explanation of the proejct, but more information can found in my research paper, which was published in the peer-reviewed journal "Purinergic Signaling" and will be linked below. I also submitted this to the Regeneron Science Talent Search and was a National Semifinalist.',
    date: 201702,
    location: "Harvard Medical School",
  },
  {
    id: 5,
    title: "Wanderform.com",
    type: "Project",
    brief: "GPT-5 based travel planner web app using React, Express, Firebase",
    preview: "",
    imageList: [],
    description:
      "I created a travel planner web application using React for the frontend, Express for the backend, and Firebase for authentication and storage. The application allows for generation of plans after giving some inputs/restrictions. It also allows for editing and generation for specific events. The next step is semi-agentic behavior where users can ask it to perform larger scale changes. This was an experiment to learn about LLMs in implementation, and for this web app, I used GPT-5 mini as my model due to lower token cost and relatively uncomplicated tasks.",
    date: 202512,
    location: "Mountain View, CA",
  },
];
