import React, { PureComponent } from "react";
import { ScrollView, Image, View, Text } from "react-native";
import { screenWidth } from "./../assets/css/general";
import Circle from "./../components/primitives/Circle";
import Bars from "./../components/charts/Bars";

const timer = require("react-native-timer");

class Skills extends PureComponent {
  constructor(props) {
    super(props);
    this.data = [
      {
        name: "Ionic",
        percentaje: 50,
        primaryColor: "#2f9cfc",
        projects: {
          quantity: 4,
          time: 0.6,
          feeling: 75,
          details: [
            {
              name: "AnimalApp",
              technologies:
                "Ionic, Typescript, Firebase (Notifications, Storage, Database)",
              url: "",
              images: [
                { "0": "./assets/img/projects/mockup.png" },
                { "1": "./assets/img/projects/mockup.png" },
                { "2": "./assets/img/projects/mockup.png" },
                { "3": "./assets/img/projects/mockup.png" }
              ],
              stores: {},
              date: "January 2018"
            },
            {
              name: "Docentes App",
              technologies: "Ionic, Typescript, Laravel 5.x",
              stores: [
                {
                  url:
                    "https://play.google.com/store/apps/details?id=co.mobilecorp.simulacrodocentes",
                  icon: "./assets/img/projects/playstore.png"
                },
                {
                  url:
                    "https://itunes.apple.com/co/app/simulacro-docentes/id1386790039?mt=8",
                  icon: "./assets/img/projects/applestore.png"
                }
              ],
              images: [
                { "0": "./assets/img/projects/mockup.png" },
                { "1": "./assets/img/projects/mockup.png" },
                { "2": "./assets/img/projects/mockup.png" },
                { "3": "./assets/img/projects/mockup.png" }
              ],
              date: "March 2018"
            },
            {
              name: "PuertOriente",
              technologies: "Ionic, Typescript, Laravel 5.x",
              stores: {},
              images: [
                { "0": "./assets/img/projects/mockup.png" },
                { "1": "./assets/img/projects/mockup.png" },
                { "2": "./assets/img/projects/mockup.png" },
                { "3": "./assets/img/projects/mockup.png" }
              ],
              date: "June 2018"
            },
            {
              name: "TaxiVIP",
              technologies: "Ionic, Typescript, Firebase (Storage, Database)",
              stores: {},
              images: [
                { "0": "./assets/img/projects/mockup.png" },
                { "1": "./assets/img/projects/mockup.png" },
                { "2": "./assets/img/projects/mockup.png" },
                { "3": "./assets/img/projects/mockup.png" }
              ],
              date: "August 2018"
            }
          ]
        }
      },
      {
        name: "Firebase - Ionic",
        percentaje: 20,
        primaryColor: "#f38226",
        projects: {
          quantity: 2,
          time: 0.6,
          feeling: 75,
          details: []
        }
      },
      {
        name: "PHP",
        percentaje: 75,
        primaryColor: "#627dbc",
        projects: {
          quantity: 20,
          time: 10,
          feeling: 75,
          details: []
        }
      },
      {
        name: "Laravel",
        percentaje: 50,
        primaryColor: "#f0514b",
        projects: {
          quantity: 10,
          time: 10,
          feeling: 75,
          details: []
        }
      },
      {
        name: "React Native",
        percentaje: 30,
        primaryColor: "#1ca6cd",
        projects: {
          quantity: 2,
          time: 0.4,
          feeling: 95,
          details: []
        }
      },
      {
        name: "Javascript",
        percentaje: 80,
        primaryColor: "#d4b840",
        projects: {
          quantity: 20,
          time: 12,
          feeling: 80,
          details: []
        }
      },
      {
        name: "Cordova",
        percentaje: 70,
        primaryColor: "#6d767d",
        projects: {
          quantity: 20,
          time: 7,
          feeling: 70,
          details: []
        }
      },
      {
        name: "jQuery",
        percentaje: 80,
        primaryColor: "#075da1",
        projects: {
          quantity: 20,
          time: 7,
          feeling: 75,
          details: []
        }
      },
      {
        name: "jQueryMobile",
        percentaje: 85,
        primaryColor: "#7fbf51",
        projects: {
          quantity: 20,
          time: 7,
          feeling: 70,
          details: []
        }
      },
      {
        name: "Startup Mentality",
        percentaje: 90,
        primaryColor: "#46617A",
        projects: {
          quantity: 17,
          time: 12,
          feeling: 75,
          details: []
        }
      },
      {
        name: "Team leading",
        percentaje: 80,
        primaryColor: "#f0d89e",
        projects: {
          quantity: 15,
          time: 3,
          feeling: 80,
          details: []
        }
      },
      {
        name: "ActionScript",
        percentaje: 90,
        primaryColor: "#db4e4e",
        projects: {
          quantity: 20,
          time: 16,
          feeling: 95,
          details: []
        }
      },
      {
        name: "Adobe Flash Builder",
        percentaje: 75,
        primaryColor: "#cdbec3",
        projects: {
          quantity: 20,
          time: 12,
          feeling: 90,
          details: []
        }
      },
      {
        name: "Adobe Flash",
        percentaje: 80,
        primaryColor: "#cd1018",
        projects: {
          quantity: 20,
          time: 16,
          feeling: 85,
          details: []
        }
      },
      {
        name: "Pixel art",
        percentaje: 75,
        primaryColor: "#eee9cd",
        projects: {
          quantity: 20,
          time: 2,
          feeling: 75,
          details: []
        }
      }
    ];
  }

  createBars = () => {
    let intervalValue = 90;
    return this.data.map((item, index) => {
      return (
        <Bars
          key={index}
          name={item.name}
          startAt={index * intervalValue}
          percentaje={item.percentaje}
          primaryColor={item.primaryColor}
          projects={item.projects}
        />
      );
    });
  };

  render() {
    return (
      <View style={{ justifyContent: "flex-start", flex: 1 }}>
        <View style={{ marginTop: 0, marginLeft: 5, marginRight: 5 }}>
          <ScrollView style={{ marginTop: 20 }}>{this.createBars()}</ScrollView>
        </View>
      </View>
    );
  }
}

export default Skills;
