import React, { Component } from 'react';
import Grid from '../components/Grid';
import ItemDisplay from '../components/ItemDisplay';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './portfolio.css'

// 0 = internship, 1 = project, 2 = research

class Portfolio extends Component {
  constructor(props) {
    super(props);

    this.state = {
      elements: [
          {
            id: 0,
            title: 'Software Engineering Intern at Avodigy',
            type: 'Internship',
            brief: "Worked as a Android mobile developer for social media style app.",
            preview: 'AvodigyPreview.png',
            description: "I worked on Avodigy's new project called Grupian, which is a social media style app. I was on the Android team, and used Android Studio to build their \"feed\" feature, which is similar to Facebook's home feed. I built both the front end and the back end, which used Firebase Firestore and Firebase Storage to store all account/general information. This required extensive knowledge of Java and Android development as well as some database designing techiques.",
            date: 202005
          },
          {
            id: 1,
            title: 'Scotty Security',
            type: 'Project',
            brief: "A cross platform app for accessing CMU campus security resources.",
            preview: 'scottypreview.png',
            description: "I built the app \"Scotty Security\" with some of my friends during TartanHacks (hackathon at CMU). We built it as a cross-platform app, using HTML, CSS, and Javascript to create the front end, and a website that allowed for simple server processing to build the backend. The idea came from one of the themes given in the hackathon, which was campus security. We figured that while there several security apps/websites that helped people stay safe, there wasn't one that had everything that a student would need. So, we came up with \"Scotty Security\", which is a all in one campus security app, with access to nearly all of the security resources at CMU, including CMU police department and a map of campus. The features of the app include location tracking, news notifications, an emergency whistle, audio recording, and a contacts list/page. We used Cordova and Node.js to build the app (in our presentation, we built it for android). We also used Google Maps API for location tracking, and we built a simple set of RESTful APIs to transfer location information. I built most of the front end, and the simpler functions of the app that didn't require backend usage, including the emergency whistle and the audio recording functionality. Since two of the people on my team were not familiar with front end development, I also taught and guided them through building some of the front end with HTML, CSS, and JS. I'm really proud of this project, not only because I contributed a lot to it and that we were able to make a successful final product in the 24 hours we were given, but also because I think that the team worked really well together and I'm proud of what we created as a group. By the way, I have included a video of a quick demonstration of our project. It's a bit rough, but it was nearly the deadline, and we needed to submit soon.",
            date: 202002,
          },
          {
            id: 2,
            title: 'Ajenda',
            type: 'Project',
            brief: "An automated scheduling app built using Android Studio.",
            preview: 'AjendaPreview.png',
            description: 'I built "Ajenda" as a personal project of mine both initially as a small commercial product and as a way to get familiar with Android Studio and the android libraries/android app workflow. I decided to not to make it commerical because of marketability and revenue-model, but I still think it is a worthwhile idea with the right execution. "Ajenda" is a productivity app that optimizes scheduling by automatically placing events based on a variety of different factors, including weather and driving time. The idea is that the user can say something like "Schedule Workout Sessions for 5 times a week", and the app should be able to place workout events in your schedule in the best possible times. Currently, the app has full calendar functionality along with persistent data storage for events. Although the calendar seems to be the regular calendar UI component, it is actually a custom made UI component, and it can and will be changed in the future. The app also currently uses OpenWeatherMap API and Google Maps API to obtain weather and distance information.',
            date: 201905
          },
          {
            id: 3,
            title: 'Network Automation Intern at NetBrain Technologies',
            type: 'Internship',
            brief: "Worked with computer networks, Python parsing, and MongoDB.",
            preview: 'NetBrainPreview.png',
            description: "I worked at NetBrain Technologies as a Network Automation Intern, which was within their R&D department. To start off, NetBrain's product is an enterprise software that allows companies to easily manage their computer networks. Many companies use a mixture of dated/legacy technology combined with new software defined networks, and NetBrain's platform consolidates all the information in one \"Single Pane of Glass\". My work at NetBrain was on customization and integration. Specifically, a goal they had was to integrate NetBrain with the company \"ServiceNow\", where they would allow NetBrain information wihin the ServiceNow application. I built a working proof of concept web app that successfully used NetBrain's information in ServiceNow. In addition, I wrote many Python scripts that queried remote network devices with CLI input and parsed the information for NetBrain's servers.",
            date: 201905
          },
          {
            id: 4,
            title: 'CD39L3 Various Glycoforms Study',
            type: 'Research',
            brief: "Research project about the functionality of pancreatic enzyme CD39L3.",
            preview: 'cd39l3preview.png',
            description: "I did a research project on the pancreatic protein CD39L3 during my junior year of highschool and the following summer (2017). I worked with Professor Simon Robson and his lab at Beth Israel Deaconess Medical Center, and they mentored and advised over the course of my project. To provide some background knowledge on CD39L3, it is a glycoprotein found in the pancreas that is involved with Purinergic Signaling. Specifically, it is an enzyme that catalyzes purine nucleotides such ATP and GTP, and plays a role in regulating their signaling function. CD39L3 is a glycoprotein, which means it contains carbohydrate structures attached to its polypeptide chain. My project focused mainly on these structures, and I created several glycoforms of the protein, where I removed various amounts of sugar from the protein. I then measured the activity of these forms, included a model for the protein structure, and analyzed the potential impacts of these new glycoforms. This is a very watered down explanation of the proejct, but more information can found in my research paper, which was published in the peer-reviewed journal \"Purinergic Signaling\" and will be linked below. I also submitted this to the Regeneron Science Talent Search and was a National Semifinalist.",
            date: 201702
          }
      ],
      sortBy: 0,
      sortingMethod: "Recent",
      ascending: true,
      mode: true,
      selected: 0
  }

  this.handleSelection = this.handleSelection.bind(this)
  this.handleReturn = this.handleReturn.bind(this)
  }
  
  sortData(num) {
    const originalArray = [
      {
        id: 0,
        title: 'Software Engineering Intern at Avodigy',
        type: 'Internship',
        brief: "Worked as a Android mobile developer for social media style app.",
        preview: 'AvodigyPreview.png',
        description: "",
        date: 202005,
      },
      {
        id: 1,
        title: 'Scotty Security',
        type: 'Project',
        brief: "A cross platform app for accessing CMU campus security resources.",
        preview: 'scottypreview.png',
        description: "I built the app \"Scotty Security\" with some of my friends during TartanHacks (hackathon at CMU). We built it as a cross-platform app, using HTML, CSS, and Javascript to create the front end, and a website that allowed for simple server processing to build the backend. The idea came from one of the themes given in the hackathon, which was campus security. We figured that while there several security apps/websites that helped people stay safe, there wasn't one that had everything that a student would need. So, we came up with \"Scotty Security\", which is a all in one campus security app, with access to nearly all of the security resources at CMU, including CMU police department and a map of campus. The features of the app include location tracking, news notifications, an emergency whistle, audio recording, and a contacts list/page. We used Cordova and Node.js to build the app (in our presentation, we built it for android). We also used Google Maps API for location tracking, and we built a simple set of RESTful APIs to transfer location information. I built most of the front end, and the simpler functions of the app that didn't require backend usage, including the emergency whistle and the audio recording functionality. Since two of the people on my team were not familiar with front end development, I also taught and guided them through building some of the front end with HTML, CSS, and JS. I'm really proud of this project, not only because I contributed a lot to it and that we were able to make a successful final product in the 24 hours we were given, but also because I think that the team worked really well together and I'm proud of what we created as a group. By the way, I have included a video of a quick demonstration of our project. It's a bit rough, but it was nearly the deadline, and we needed to submit soon.",
        date: 202002,
      },
      {
        id: 2,
        title: 'Ajenda',
        type: 'Project',
        brief: "An automated scheduling app built using Android Studio.",
        preview: 'AjendaPreview.png',
        description: 'I built "Ajenda" as a personal project of mine both initially as a small commercial product and as a way to get familiar with Android Studio and the android libraries/android app workflow. I decided to not to make it commerical because of marketability and revenue-model, but I still think it is a worthwhile idea with the right execution. "Ajenda" is a productivity app that optimizes scheduling by automatically placing events based on a variety of different factors, including weather and driving time. The idea is that the user can say something like "Schedule Workout Sessions for 5 times a week", and the app should be able to place workout events in your schedule in the best possible times. Currently, the app has full calendar functionality along with persistent data storage for events. Although the calendar seems to be the regular calendar UI component, it is actually a custom made UI component, and it can and will be changed in the future. The app also currently uses OpenWeatherMap API and Google Maps API to obtain weather and distance information.',
        date: 201905
      },
      {
        id: 3,
        title: 'Network Automation Intern at NetBrain Technologies',
        type: 'Internship',
        brief: "Worked with computer networks, Python parsing, and MongoDB.",
        preview: 'NetBrainPreview.png',
        description: "",
        date: 201905
      },
      {
        id: 4,
        title: 'CD39L3 Various Glycoforms Study',
        type: 'Research',
        brief: "Research project about the functionality of pancreatic enzyme CD39L3.",
        preview: 'cd39l3preview.png',
        description: "I did a research project on the pancreatic protein CD39L3 during my junior year of highschool and the following summer (2017). I worked with Professor Simon Robson and his lab at Beth Israel Deaconess Medical Center, and they mentored and advised over the course of my project. To provide some background knowledge on CD39L3, it is a glycoprotein found in the pancreas that is involved with Purinergic Signaling. Specifically, it is an enzyme that catalyzes purine nucleotides such ATP and GTP, and plays a role in regulating their signaling function. CD39L3 is a glycoprotein, which means it contains carbohydrate structures attached to its polypeptide chain. My project focused mainly on these structures, and I created several glycoforms of the protein, where I removed various amounts of sugar from the protein. I then measured the activity of these forms, included a model for the protein structure, and analyzed the potential impacts of these new glycoforms. This is a very watered down explanation of the proejct, but more information can found in my research paper, which was published in the peer-reviewed journal \"Purinergic Signaling\" and will be linked below. I also submitted this to the Regeneron Science Talent Search and was a National Semifinalist.",
        date: 201702
      }]
    var newArray = [1, 1, 1, 1, 1]
    if(num == 0) {
      this.setState({
        elements: originalArray,
        sortBy: 0,
        sortingMethod: "Recent",
        ascending: this.state.ascending
      })
    } else if(num == 1) {
      newArray[0] = originalArray[2]
      newArray[1] = originalArray[4]
      newArray[2] = originalArray[3]
      newArray[3] = originalArray[1]
      newArray[4] = originalArray[0]
      this.setState({
        elements: newArray,
        sortBy: 1,
        sortingMethod: "Name",
        ascending: this.state.ascending
      })
    } else {
      newArray[0] = originalArray[0]
      newArray[1] = originalArray[3]
      newArray[2] = originalArray[4]
      newArray[3] = originalArray[1]
      newArray[4] = originalArray[2]
      this.setState({
        elements: newArray,
        sortBy: 2,
        sortingMethod: "Type",
        ascending: this.state.ascending
      })
    }
  }

  handleSelection(index) {
    this.setState({mode: false, selected: index})
    console.log("hello")
  }

  handleReturn() {
    this.setState({mode: true})
  }

  render () {
      if (this.state.mode) {
        return (
          <div className='portfolio'>
              <div className='sort-by'>
                <h2 className='sort-title'>SORT BY</h2>
                <div className="dropdown">
                    <button className="sort-btn dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        {this.state.sortingMethod}
                    </button>
                    <div id="dropdown-stuff" className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <a className={this.state.sortBy == 0 ? "dropdown-item dropdown-item-active": "dropdown-item"} href="#" onClick={() => this.sortData(0)}>Recent</a>
                        <a className={this.state.sortBy == 1 ? "dropdown-item dropdown-item-active": "dropdown-item"} href="#" onClick={() => this.sortData(1)}>Name</a>
                        <a className={this.state.sortBy == 2 ? "dropdown-item dropdown-item-active": "dropdown-item"} href="#" onClick={() => this.sortData(2)}>Type</a>
                        <div className="dropdown-divider"></div>
                        <a className="dropdown-item" href="#">Ascending</a>
                        <a className="dropdown-item" href="#">Descending</a>
                    </div>
                </div>
              </div>
              <hr/>
              <Grid elements={this.state.elements} onSelect={this.handleSelection}/>
          </div>
        );
      } else {
        var currProj = this.state.elements[0]
        for(var i = 0; i < this.state.elements.length; i++) {
          if (this.state.elements[i].id == this.state.selected) {
            currProj = this.state.elements[i];
          }
        }
        return (
          <div>
            <ItemDisplay data={currProj} onBack={this.handleReturn}/>
          </div>
        );
      }
      
    }
}

export default Portfolio;
