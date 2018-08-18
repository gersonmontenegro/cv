import React, { PureComponent } from 'react';
import { StyleSheet, ScrollView, Image, View, Text } from 'react-native';
import { screenWidth } from './../assets/css/general';
import Circle from './../components/primitives/Circle';
import TimeLine from 'react-native-timeline-listview';

class Education extends PureComponent{
  constructor(props){
    super(props);
    this.data = [
      {
        time: '2017',
        title: 'Soft. engineering specialist',
        icon: require('./../assets/img/graduate.png'),
        description: 'Skills to take the leader of any software or technologic project, with abilities to organize works team, mostly, software teams, imporving their stimations, and resources administration.',
        imageUrl: require('./../assets/img/unillanos.png')
      },
      {
        time: '2017',
        title: 'Requirement engineering',
        icon: require('./../assets/img/book.png'),
        description: 'My training in this area allows me to avoid early bugs in the analysis of a project, in order to make a correct structure of the project, and to make a high quality group of requirements.',
        imageUrl: require('./../assets/img/education.png')
      },
      {
        time: '2006',
        title: 'Systems engineering',
        icon: require('./../assets/img/graduate.png'),
        description: 'According to my alma mater, I got the skills to optimize process, and improving the resources management of any kind of project, and even know some of networks infrastructure. But, I has been focusing my career in the software industry, making a lot of projects in many areas, from desktop applications, passing for videogames, social applications, and ending with mobile applications, and those lasts ones are my favorites, because, you know, I love code!.',
        imageUrl: require('./../assets/img/unillanos.png')
      },
    ];
    this.renderDetail = this.renderDetail.bind(this);
  }

  renderDetail = (rowData, sectionID, rowID) => {
    let title = <Text style={[styles.title]}>{rowData.title}</Text>
    var desc = null
    if(rowData.description && rowData.imageUrl)
      desc = (
        <View style={styles.descriptionContainer}>
          <Image source={rowData.imageUrl} style={styles.image}/>
          <Text style={[styles.textDescription]}>{rowData.description}</Text>
        </View>
      )

    return (
      <View style={{flex:1}}>
        {title}
        {desc}
      </View>
    )
  }

  render(){
    return (
      <View style={{justifyContent: 'flex-start', flex: 1}}>
        <View style={{marginTop: 0, marginLeft: 5, marginRight: 5}}>
          <ScrollView style={{marginTop: 20}}>
            <TimeLine
              timeStyle={{fontFamily: 'CenturyGothic-Bold', textAlign: 'center', backgroundColor:'#ff9797', color:'white', padding:5, borderRadius:13, overflow: 'hidden'}}
              descriptionStyle={{fontFamily: 'CenturyGothic'}}
              titleStyle={{fontFamily: 'CenturyGothic-Bold'}}
              data={this.data}
              innerCircle={'icon'}
              circleColor='rgb(255,255,255)'
              renderDetail={this.renderDetail}
            />
          </ScrollView>
        </View>
      </View>
    );
  }
}

export default Education;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
	paddingTop:65,
    backgroundColor:'white'
  },
  list: {
    flex: 1,
    marginTop:20,
  },
  title:{
    fontSize:16,
    fontWeight: 'bold',
    fontFamily: 'CenturyGothic-Bold'
  },
  descriptionContainer:{
    flexDirection: 'row',
    paddingRight: 50
  },
  image:{
    width: 50,
    height: 50,
    borderRadius: 25
  },
  textDescription: {
    marginLeft: 10,
    color: 'black',
    fontFamily: 'CenturyGothic'
  }
});
