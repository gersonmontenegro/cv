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
