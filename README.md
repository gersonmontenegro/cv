Last version published: 1.0.6, 3th September, 2018.

Since August 28th this app is available in the Play Store. Check it out!

![enter image description here](https://lh3.googleusercontent.com/x6fD4v8L2z6PUdzeARkEye6R0I7u0VZRU_8C6WNTHVnmu7F62tCS5-NSU3TsN-jmWyZdQ6-Tdp3A=s100)[![alt text][image]][hyperlink]

  [hyperlink]: https://play.google.com/store/apps/details?id=com.gersonmontenegro.cv
  [image]: https://lh3.googleusercontent.com/o18ZiflyX7huqdevAf-FxGJudUxYyrYG0MRNKsf7M-tMF7pgEHp5_1EdZIswMEI2JJAAU5rB6fnB=s100?s=128&d=identicon&r=PG (tooltip)
# cv
**My Curriculum Vitae in an App**

This time I wanted to make an experiment in order to increase my skills in react-native, because is a new technology for me, and I think that only practice makes a master.

I don't know is there is another similar project. I supposed, but I don't care, because my target is to learn, no to make the best of the best application in the world.

So, I thought that it could be fun take my CV, and make it like an App, no just a pretty PDF.

I decided make a little project, but using almost the same tools that I use to handled in my regular projects.

According to this target, I need first of all, what I want, and I drawn the next sketch:

![enter image description here](https://lh3.googleusercontent.com/9yGx6QXLr8diwhmV4VZndMq9NibvwM8IoTgtPe6-UjZ0tfq1fkcqlNvz75fbExj7k7Rsdh7mlL0M "Main idea schema")

I decided to put the basics: A little profile, some education, my favorite skills, and of course, some experience.

Then, I made a piece of conceptual application architecture (I'm not an architect, but I to like play pretending to be one) to have a clearer panorama about the final result, so, I got this:

![enter image description here](https://lh3.googleusercontent.com/5DHW45dYewO1ucUJZLxsxqWI_OIVAV1R2ltPoEJVY0ljeMM3OgjCjyCtAynV3I0Q-XoU2xsFYKnL=s500 "Conceptual application architecture")

So, at this point, I got enough information to make some mockups for every interface.

![enter image description here](https://lh3.googleusercontent.com/XHkBhxi89-RqCXJhpfyvZK5-bX9krH6htNZcuZeJ_52MMcYqO2ppjzjQPFFH7O8wIC81cX97d___=s1200 "Mockups")

5 mockups, each one for every module that I defined at the beginning of this article.

Now I need to create some of the activities that I'll do.

This part is a little complex, so, I'm going to simplify the process. I'm gonna make a basic baseline (without dates) with some activities per interface, and I'm gonna put them on Trello, which is a pretty good tool for get a Kanban board.

I made an structure to define the project better. I know, is an small project, maybe doesn't require so much, but, I'd rather this way to avoid noise in my execution.

![enter image description here](https://lh3.googleusercontent.com/tlLbnJoiji_F3-b0PEZDDW3WV2P_oDmZTc5-5t3L23LpA1lsWXkB0nd0vwcB5uQj7AG6nHpFqZ7H=s428 "General baseline")

Through the above list, I trying to define every stage on my project. Some of them are done, another are on the way, and the rest is waiting.

In less than 140 characters, is just a little document that explain that I'm making an application with client side, and server side.

I hope to publish it at least in the play store.

Now, is time to write the EDT (not an strict one, course), in order to make all the activities that Trello require.

This is the final version for this project. I tried to be concise, but, at the same time, pragmatic (very) in order to get the final goal in a realistic way. Although, I tried involve almost all the stages considered in a more complex project.

![enter image description here](https://lh3.googleusercontent.com/LhgseX34BSH8PAvh-a5kGPMHm4ARwDCi_15o2lXKYwmtrWYuIFFgLnIXUn5eNCZgjjLmh7yKwMRH=s740 "Inicial Baseline")

Now, I'm ready to put the activities in my board (I mean, Trello).

Meanwhile, I've been had worked in the code, and at the time of write this lines, I already got the layout of the Splash, and the Profile Interface, at least in their first version each one.

I've been working on the code, like as said before, so, I got some material in their firsts versions, such as Splash, Profile, and Skill interfaces.

My Trello Board right looks like below:

![enter image description here](https://lh3.googleusercontent.com/nPPbY5DOsGcVRTMlTx5kJ3TE0XxvVKqXMZzui0oE8wF89Rh6rwPnAAfesiCJrOYZhePwHVqfI3KE=s700 "Trello")

If you want, you can see the original board on Trello using this link: https://trello.com/b/j1knHu14/cv

Right now, I got the next interfaces:

Splash, Profile, and some scratch for Skills

![enter image description here](https://lh3.googleusercontent.com/8T7XMV69F9MltlLwlZ78kJmUYMN2tKXDBeMwMnVTWEyVjgAQfuDovGiCPnrK9igP21th2cIjTox4=s900 "v0.0.1")

And yes, the lasts two ones are the same, pero with a little difference that I've been considering right now. It was an advice from a designer friend: Remove the border!, so, probably I will do that :)

I've has had some problems with the charts plugin. Initially, I tried to use [react-native-charts-wrapper](https://github.com/wuxudong/react-native-charts-wrapper), and, in spite of it looks beautiful, I couldn't use it, because require a different version of Xcode that I can't get, and the reason (in less than 140 characters) is because I changed by myself the SSD of my laptop, and macOS High Sierra is not compatible, so, I need to back to Sierra, and that's why I can't install Xcode 9.3, or highest. Yea, is a really sad love history, but, it's the life, so, we need to keep going and work with what we have.

So, I tried another library, simpler than the previous one, but effective: [Victory](https://formidable.com/open-source/victory/gallery/). 

It works like a charm from the beginning, and I don't needed to make an special setup on Xcode, just react-native coding.

I'll try to apply a technic or artesanal methodology in the execution of every interface, not only because I like it, but, it was very useful for me in many projects with agile methodologies, and has been allow us make faster prototypes.

I don't even remember where and when I learned it (I don't even know if is ok do that), but it consist in 3 stages:

![enter image description here](https://lh3.googleusercontent.com/ca7hbSEDnNLoCSSknKVb_0-6tnqnml8HeD6J1QP2QcTDXSX_V9nPxZUctUOI5FntQhSN-RQMHVo6 "3 stages")

**Do it**

Consist in to make the things works, that's all. No matter how, but, usually the client requiere to see results, without concern what's behind the scene.

**Do it well**

Normally, we got here after a milestone, or a owner review, I mean, when the storm has passed, and we have enough time (not always) to make the things in a better way. Usually, is not necessary make big changes, just correct details.

**Optimize**

Here is when we can take code, and turn it in a real master piece, a piece of art that deserve a place in a museum :) ...ok, maybe not, and it only can be the second part of the "Do it well" stage.

At this time I has been working in many detail of the project, so, I can show you my status. I almost finish the front-end according to the baseline plan.

I already have all the interfaces, and there is only one thing left: The tab controller, but I'm going to do that tomorrow.

Right now, the project looks like below:

![enter image description here](https://lh3.googleusercontent.com/VlwPczZU_o-738LPrMeBEGmRHAmCqtJJsP5GxS4Eyxqgy6zG77Hd21RinQFKAf9b3DjxsiOEsqU9=s900 "Current status")

I'm thinking in to change a few details before publish the app, but that doesn't means I'm going ti publish it soon. Maybe some details in the Skills interface, and, as you can see, I removed the circle border, or, in other words, I turned white the black border.

Next step on the list is the Footer menu, and after two days trying different plugins that allow me a clean, fast, and customizable handle, not only  with the installation, but the configuration and implementation, I got a good one with the FooterTab from [native-base](https://docs.nativebase.io/Components.html#footer-tabs-def-headref) framework.

It was funny, because Native Base was my second framework and I used it in a lot of experiments 2, or 4 months ago, but, suddenly, I forgot it, and I started to work with pure react components.

Use FooterTab is absolutely easy, and is easier if we can combine it with the rest of the NativeBase basic structure to make a responsive design.

So, finally, I used FooterTab with Content components to put my stuff where it supposed to be.

Next image is the preliminary view of the Tab menu in action with a charged interface.

![enter image description here](https://lh3.googleusercontent.com/ywvvsU0DRkT50AEb0INrAWJjA5Q81TVMECeo_wtEcAqmfaWseEuEtAOrKJdQJP0eBVH761pfKNKA "Preliminary Tab menu")

And well, at this moment, I already have done the first part of this project, I mean, the *Do it* stage, like I show in the next video show:

<img src="https://github.com/gersonmontenegro/cv/blob/master/assets/img/doIt_done.gif" width="300px">

Now, I'm going to make a better version (*Do it well* stage) of this application, using separate files for the whole CSS, improving the container for the tabs, maybe customizing the icons, and achieve some details in order to make a good user experience.

After struggling a little with my forgotten memories, I made the Splash screen in pure Xcode. I think this will be temporary for two reasons:

 1. I need to recover my old memories about the layout in pure Xcode. I was really good on this the last year, but, without practice, now days I'm a amateur again.
 2. I would like to figure out the way to use my react-native version of the Splash screen. Right now I think is not possible, but maybe I don't know some tool/framework/toy to make it.
 3. Between the Splash screen, and the Profile screen, there is a time gap that have to be removed.
 4. To be honest, is not as pretty as I want, and definitely, I need to change it soon.

Meanwhile, at this moment, the app looks like below when I open it.

<img src="https://github.com/gersonmontenegro/cv/blob/master/assets/img/splash.gif" width="300px">

Well, after spending a time searching any solution to the Splash screen, I realized that effectively, there's no chance to integrate pure Xcode Splash with any react-native interface.

So, I started to create a way to tidy up my idea: I'm going to emulate an integration in a "simple" form.

To do that, I need make some changes. Now, the avatar is alone in the middle of the screen. That's the Xcode Splash screen.

![enter image description here](https://lh3.googleusercontent.com/w2j0j72tTNiuoXQwWB2OJ_UmWjv-D2LgHcAgVO6fw_V4iDdXfLiBtfWbetfJAm-61YEU2fS4-XQD "New Splash Screen")

Then, my name and title appear with a fade-in effect. At this part, we are now in the react-native Splash. I mean, I put them together creating the illusion that there is only one screen, but, when the Xcode Splash go out, we get the react-native Splash exactly in the same position.

After that last point, is a matter of the Animated component to do the rest.

<img src="https://github.com/gersonmontenegro/cv/blob/master/assets/img/splash_integration.gif" width="300px">

As the video shows, is not totally finished at the end, but, I think the main idea  is 90% completed.

Sometimes, this history could sounds weird, because I haven't been written the text like one and unique piece. Is the work of many days. Every day I've been trying to put some of my time on this. Ok, no more sentimental moments.

After the last version of the first idea to the Splash, I get a new version. It could be the final, maybe.

Now, the Splash match with the profile in the same position, and I added some bars...don't know why exactly, but I like it :).

<img src="https://github.com/gersonmontenegro/cv/blob/master/assets/img/splash_integration_rc.gif" width="300px">

After that, I decided break away every button in the footer in order to add some intro animation for every one. The result is below:

<img src="https://github.com/gersonmontenegro/cv/blob/master/assets/img/splash_with_animated_tabs.gif" width="300px">

At the moment of writing down this lines, I made a centralized header, because until 10 minutes ago, every interfaces owned his own header. Now, there is only a unique header, and every interface is loaded like always, but they don't have a header anymore.

![](https://lh3.googleusercontent.com/SWhzI9KMB7FNFoHXsue8WdR4TeDl20erD81JfDKqo_yKkAuUGNJG08PRgiyY9nA_hSFYOwUxmeyB "Hierarchy")

Above is the structure hierarchy extracted from the View debugging option on Xcode.

And, after a suggestion from a friend of mine, I decided follow up her instruction about the header design. 

So, this is the preview of the new header. I uploaded the code, but is not responsive yet, but soon :)

<img src="https://github.com/gersonmontenegro/cv/blob/master/assets/img/splash_with_new_header.gif" width="300px">

At the moment of write this lines, and after make the header component, it becomes responsive.

It was easy because I made it in an isolate way, and works like a charm.

Visually is still the same, so, there is not a new Image.

Now is time to changue the charts, because I didn't like it after to receive a few feedback from people who works on design.

So, I thought in use some library, because there is a lot of nice libraries, and the one that I like the most (at least in Bars style) was the used in [NBA App](https://github.com/wwayne/react-native-nba-app).

But, I wanted something different, and I wanted to learn a little more, so, I scratched something with basic react-native components, and I found it not only easy, but fun to make graphs, and of course, I know that the more spectacular is the graphic, the more complex is the process to make it.

After an hour of play with this, I got the first version of the component:

![enter image description here](https://lh3.googleusercontent.com/UviLmUf_qDoK49SsXldLa6pdqPtVpVhDtd6ZzvjEOcxvuTdrO61fN_RoYR2e3tAE-iVuCaMO_iZT "Bars")

Now is time to animated them.
For that, I'm used the same Animated component for a very easy implementation, and the result is below:

<img src="https://github.com/gersonmontenegro/cv/blob/master/assets/img/new_bars_animation.gif" width="300px">

And the [Skills interface](https://github.com/gersonmontenegro/cv/blob/master/screens/Skills.js) was reduced (well, before this change it was as long as now, but now is better) to :

````javascript
<Bars name='ActionScript' startAt={0} percentaje={90} primaryColor='#db4e4e' />
<Bars name='Ionic' startAt={90} percentaje={70} primaryColor='#2f9cfc' />
<Bars name='PHP' startAt={180} percentaje={75} primaryColor='#627dbc' />
<Bars name='Laravel' startAt={270} percentaje={50} primaryColor='#f0514b' />
<Bars name='React Native' startAt={360} percentaje={30} primaryColor='#1ca6cd' />
````

Well, a last detail about my new Bar component. I wanted add an animation for the number as well, but, this time, I rather t use a existing component: [AnimateNumber](https://github.com/wkh237/react-native-animate-number).

At the beginning I had my doubts, because is not as recent as I wish, but is still working, and it gave to my Bar component a nice extra detail animating the number, so, at least by now, I'll keep it.

The implementation was not traumatic, it just took a simple line in the same place where I had the value:
```javascript
<Text style={{position: 'absolute', color: '#000', fontFamily: 'CenturyGothic-Bold'}}>
 <AnimateNumber value={this.props.percentaje} countBy={1} timing="linear" />%
</Text>
````

Finally, after a month, today (28/08/18), early in the morning, I published the app in Play Store, and is available [here].(https://play.google.com/store/apps/details?id=com.gersonmontenegro.cv) 

I thought that after that I could rest a couple of days, but no. I received a lot of feedback from my closer friends, and I want to implement some details, and correct some grammar.

Anyway, I'm going to keep this app and its content updated, because is my presentation.

At this moment, I got enough feedback to know what do I need to do: Improve the Skills interface.

So, I'm gonna increase the information opening a new interface when I touch a skill bar. Like always, I got a first scratch

![enter image description here](https://lh3.googleusercontent.com/S4Dx6EW_4Y60NFr_ZSycnHKyp3wKQ2CG8xwCOLllPerSzytc5zBiDwsQSdJqDaKfJY6FRLt-ZX6e=s600)

I would prefer to put a radar graphic rather than put bars, or cakes, because I think that's the coolest graphic for what I want to represent.

It's not finish right now, but is importan for me to have a north where I need go.

After struggling for a little while, I think at least I got the design that I wanted:

![enter image description here](https://lh3.googleusercontent.com/e1lfGaVfDFoNTycf6WIwC-zJzkhsxtsR2KGeaj7KTQ5ZPDIzg-1w4PFiDIcsbIcWScZBSNrQxkXa=s600 "First RC Skill detail")

I had some problems at the beginning of the implementation, because I didn't really know exactly how to put texts and icon over the background, until I understood that a children can't to overlay to a parent, so, I made them all siblings, and then, I could do what I wanted.

So, I leave the structure of the skills item (actually is another component) like this:

    render() {
	    return (
		    <View  style={itemStyle.itemContainer}>
			    <View  style={[itemStyle.back]}  />
				    <View  style={[itemStyle.iconContainer]}>
				    <Image  style={itemStyle.iconImage}  source={this.props.icon}  />
			    </View>
				    <View  style={itemStyle.nameContainer}>
				    <Text  style={itemStyle.nameStyle}>{this.props.name}</Text>
			    </View>
				    <View  style={itemStyle.valueContainer}>
				    <Text  style={itemStyle.valueStyle}>{this.props.value}</Text>
			    </View>
		    </View>
    );

And, in the styles files I wrote:

    export  const  itemStyle  =  StyleSheet.create({
	    back: {
		    backgroundColor:  itemBackgroundColor,
		    width:  screenWidth  -  30,
		    borderRadius:  10,
		    height:  iconSpace,
		    zIndex:  1
	    },
	    iconContainer: {
		    width:  iconSpace,
		    justifyContent:  "center",
		    alignItems:  "center",
		    marginLeft:  -screenWidth  +  10,
		    zIndex:  2
	    },
	    iconImage: {
		    width:  iconDimension,
		    height:  iconDimension
	    },
	    shadow: {
		    shadowColor:  "#000",
		    shadowOffset: { width:  8, height:  2 },
		    shadowOpacity:  1,
		    shadowRadius:  10
	    },
	    nameContainer: {
		    width: (screenWidth  -  iconSpace) /  2,
		    justifyContent:  "center",
		    zIndex:  1
	    },
	    nameStyle: {
		    fontFamily:  "CenturyGothic",
		    fontSize:  15,
		    color:  "black"
	    },
	    valueContainer: {
		    width: (screenWidth  -  iconSpace) /  2,
		    justifyContent:  "center",
		    zIndex:  1
	    },
	    valueStyle: {
		    fontFamily:  "CenturyGothic-Bold",
		    fontSize:  15,
		    color:  "#000000"
	    },
    
	    itemContainer: {
		    height:  iconSpace,
		    marginTop:  5,
		    flexDirection:  "row",
		    marginLeft:  20
	    }
    });

I've don't implemented the shadows yet, but I will.

At this moment, I just published the last release, with only one change related to the last screen. I added a new button in order to indicate that a section (3 the current are: projects, time, and feeling) has more information.

![enter image description here](https://lh3.googleusercontent.com/kkXxflQ1mYDH0eZIgnJTkrTdnL7pMYEdIblxtW6zJznDhW49yk_7-vfCTMAwejpbH3JOM-_FWtwt=s600 "Skill detail")

Is still not working, but in the close future, that button will be able to open a new interface with screenshots about some projects.

After a few days where I didn't test the app on iOS, I decided start to prepare the iOS version, and I figured out that the shadows styles are working perfectly....I mean, they works!!

I should of seen that in the documentation, but, I didn't remember because my memory and I are a sad love story.

![enter image description here](https://lh3.googleusercontent.com/D9belTIAmqfGn3tUEX9yQJbpn60l4Bku8WiVoV7_nYnEHErOxvjcyLGKBBvfmn24qdkMQnczzdxM=s600 "Shadows on iOS")

Like the above image shows, now the icons buttons has shadows. I don't know if I'll keep them, but for now is ok.

I was supposed that the iOS app was going to be published, like de Android version, but I think it'll take a few more days.

I think is time to add a Navigation system to moving between interfaces, or screens. 

I did another application with a nice Navigation system that includes a lateral menu (Drawer). This time I don't need so much, just the necessary to go from one of the tabs interface, to another and isolate interface, and back to the tabs interface again.

After a few days working in another [personal project](https://github.com/gersonmontenegro/cinemapp), I need to make some changes and improve a lot of things to get a better application.
