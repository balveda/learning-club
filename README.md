# learning-club

learning club exercises

The working file for the main exercises is 'src/exercise/exercise.js

There are three stages to the main exercise. Observe the behaviour of the final stages and code them in exercise.js

Bonus/advanced: Use react-router-dom to match/enhance the crude tabbing system in App.js

# Exercise 4

The current behaviour of the stories list is not how the designer wants it. Currently, when you hide a story, it will 'open'
the first story (if there is one). Change this behaviour to 'open' the next story (if there is one). At story.id to the title
of the story to help you keep track of them.

# Exercise 5

We want to allow our users to up-vote and down-vote stories. Create the up/down-vote click handlers to cope with up/down votes and display the current vote status in the title of the story and next to the up/down vote icons.

We also want to allow the user to sort by up/down vote. Include a 'relevance' option which will sort by story.id (default behaviour).

--- Beware, this new behaviour should not break the functionality of 'opening' the next item on the list as displayed. (E.g. you need to keep track of the sorted state rather than sorting as you render)

# Exercise 6

Currently, if we are sorting by up or down-votes and we add up/down-votes to a story, the order of the stories doesn't change.
Change the behaviour to sort the stories after up/down vote.
