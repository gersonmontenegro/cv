import React, { PureComponent } from 'react';
import { StyleSheet, ScrollView, Image, View, Text } from 'react-native';
import { screenWidth } from './../assets/css/general';
import TimeLine from 'react-native-timeline-listview';

class Experience extends PureComponent {
  constructor(props) {
    super(props);
    this.data = [
      {
        time: '2013',
        title: 'Soft. Team leader (currently)',
        icon: require('./../assets/img/work.png'),
        description: 'Full time job.\n∙Software team leader.\n∙Technical support to coworkers.\n∙Frontend engineer (JS, Ionic).\n∙Backend engineer (MySQL, MariaDB, PHP, Laravel).\n∙AWS basic support (Balancing, Nginx, Distribuited apps).\n∙Requirement engineering.',
      },
      {
        time: '2015',
        title: 'Soft. Team coordinator',
        icon: require('./../assets/img/work.png'),
        description: 'Part time job.\n∙Software team leader.\n∙Technical support to coworkers.\n',
      },
      {
        time: '2012',
        title: 'Senior developer',
        icon: require('./../assets/img/work.png'),
        description: 'Full time job.\n∙Software developer (AS3, Java, MySQL, PHP, Facebook API).',
      },
    ];
  }

  render() {
    return (
      <View style={{ justifyContent: 'flex-start', flex: 1 }}>
        <View style={{ marginTop: 0, marginLeft: 5, marginRight: 5 }}>
          <ScrollView style={{ marginTop: 20 }}>
            <TimeLine
              timeStyle={{ fontFamily: 'CenturyGothic-Bold', textAlign: 'center', backgroundColor: '#ff9797', color: 'white', padding: 5, borderRadius: 13, overflow: 'hidden' }}
              descriptionStyle={{ fontFamily: 'CenturyGothic' }}
              titleStyle={{ fontFamily: 'CenturyGothic-Bold' }}
              data={this.data}
              innerCircle={'icon'}
              circleColor='rgb(255,255,255)'
            />
          </ScrollView>
        </View>
      </View>
    );
  }
}

export default Experience;
