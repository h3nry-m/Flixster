## Week 1 Assignment: Flixster

Submitted by: **Henry Mu**

Estimated time spent: **30** hours spent in total


### Application Features

#### REQUIRED FEATURES

- [X] User can view a list of current movies from The Movie Database API as a grid view.
- [X] For each movie displayed, user can see the following details: `Title`, `Poster Image`, `Votes`.
- [X] User can load more current movies by clicking a button at the bottom of the list. The page should not refresh; movies should simply be added to the bottom.
- [X] Allow users to search for movies and display them in a grid view. Users should be able to clear results and view previous current movies displayed.
- [X] Website accounts for basic HTML/CSS accessibility features.
- [X] Website should be responsive.

#### STRETCH FEATURES

- [ ] Deploy website using GitHub Pages. 
- [X] Allow user to view more details about a movie within a popup.
- [ ] Improve the user experience through CSS & animation.
- [X] Allow movie video trailers to be played using [embedded YouTube](https://support.google.com/youtube/answer/171780?hl=en)
- [ ] Implement anything else that you can get done to improve the app functionality!

### Walkthough GIF   
<img src="https://cdn.loom.com/sessions/thumbnails/ac0ff86224a84a8b8fc500e9fcbccd1d-with-play.gif">
[Link to full audio walkthrough here](https://www.loom.com/share/ac0ff86224a84a8b8fc500e9fcbccd1d)

### Reflection

* Did the topics discussed in your labs prepare you to complete the assignment? Be specific, which features in your weekly assignment did you feel unprepared to complete?

The daily lab assignments were incredibly helpful for preparing for the weekly assignment. It was useful to hyperfocus on just one topic per day, which also was a component of the assignment. 

* If you had more time, what would you have done differently? Would you have added additional features? Changed the way your project responded to a particular event, etc.
  
If I had more time I would definitely work more on how things look. I feel like I focused mostly on the functionality of the site and so in my opinion my site looks pretty bare-bones. 

* Reflect on your project demo, what went well? Were there things that maybe didn't go as planned? Did you notice something that your peer did that you would like to try next time?

Accessing the Movie Database API was successful. Something that didn't go as planned was that I originally tried using the Youtube Data API in order to build a Youtube link that could be embedded within the pop-up. However, I ran into a Security Content error. I then found out that we could do the same thing with the Movie Database API and so reconstructed a Youtube link but also ran in the same error. It turned out that it wasn't working well with Firefox. Switching to Chrome solved the problem as well as adding an await before calling my Youtube link building function. 

Something I'd like to try next time is add the extra CSS ability to hover over the movie posters and have it move just a bit. 

### Open-source libraries used

- No open-source libraries were used in this project.

### Shout out

Shout out to every single TA and classmate that helped with troubleshooting and answering questions.
