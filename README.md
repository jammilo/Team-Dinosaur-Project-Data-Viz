# Digging Into Dinosaurs


## Project Description/Outline

The purpose of this project was to create a user-friendly visual dashboard of a dataset using a Python Flask powered API, HTML/CSS, and JavaScript. Our group decided to create a dashboard of interactive fun facts about dinosaurs. We wanted users to be able to “dig” into the fossil data and discover facts about dinosaurs in a unique way, allowing the user to apply a single filter to multiple visualizations at once. The dataset is from an existing Public Tableau Dashboard entitled “When Dinosaurs Ruled the Earth”. This dataset had 2463 records of dinosaur fossils discovered from 1836 - 2018 and was a large enough dataset to help create the base of our project.

Dataset: Public Tableau Dashboard Data: https://public.tableau.com/profile/shawn.moore#!/vizhome/WhenDinosaursRuledTheEarth_0/Dashboard1

## Site Design & Inspiration

The site was designed to invite users to interact with it right away. The CSS uses Boostrap’s “sketchy” theme and images of fossil dinosaurs. Buttons were included on the home page to encourage users to access or “Go Digging” into the data. Giving users the option to see Map & Charts, the Data Table, or visit other wealthy research websites. Each page was designed to help lead the user to the next phase of exploration.

   <img width="980" alt="圖片" src="https://user-images.githubusercontent.com/70195202/116613686-9c28a100-a8fe-11eb-9520-3212a2c14178.png">

## Data & Modeling Approach

The data was downloaded from Public Tableau and extracted as a CSV before being connected using D3.js. No additional analysis or cleaning was completed on this dataset. The team created several visualizations using Plotly & Mapbox.

   * World Of T-Rexploration Map: Designed using Mapbox to allow the user to visualize where fossils were found. The pirate map was implemented to carry the theme.
  
     
   <img width="980" alt="圖片" src="https://user-images.githubusercontent.com/70195202/116614076-122d0800-a8ff-11eb-97c3-081ec4f52c9c.png">


   * Stacked Area Chart:  Designed with Plotly, a stacked area chart was utilized to visualize how many fossils were discovered, by decade, in each of the three geological time periods that dinosaurs existed. The intention was to mimic, visually, the stratified nature of rock formations where fossils are truly found.

   <img width="980" alt="圖片" src="https://user-images.githubusercontent.com/70195202/116615310-b82d4200-a900-11eb-953f-9cc03498fa9d.png">
   
   * Dynamic Bar Chart​: Designed with Plotly, this chart visualizes dinosaur diet by era. For the technical coding challenge, we came across some hurdles to plot the length of dinosaur count for each diet for y axis . We then discovered the reason why the bar for Cretaceous period is noticeably higher than the other two periods in this chart, and came to the conclusion that many rocks provided clear and easily accessed details to Cretaceous period because they have not been deformed or eroded and are relatively close to the surface comparing to the other two.
   
   <img width="980" alt="圖片" src="https://user-images.githubusercontent.com/70195202/116615410-de52e200-a900-11eb-85a9-71747c185cc0.png">



## Background

What good is data without a good plot to tell the story?

![Laboratory](Images/Laboratory.jpg)

Pymaceuticals Inc., a burgeoning pharmaceutical company based out of San Diego, specializes in anti-cancer pharmaceuticals. In its most recent efforts, it began screening for potential treatments for squamous cell carcinoma (SCC), a commonly occurring form of skin cancer.

In this study, 249 mice identified with SCC tumor growth were treated through a variety of drug regimens. Over the course of 45 days, tumor development was observed and measured. The purpose of this study was to compare the performance of Pymaceuticals' drug of interest, Capomulin, versus the other treatment regimens. You have been tasked by the executive team to generate all of the tables and figures needed for the technical report of the study. The executive team also has asked for a top-level summary of the study results.

## Objectives

* Before beginning the analysis, check the data for any mouse ID with duplicate time points and remove any data associated with that mouse ID.

* Use the cleaned data for the remaining steps.

* Generate a summary statistics table consisting of the mean, median, variance, standard deviation, and SEM of the tumor volume for each drug regimen.

* Generate a bar plot using both Pandas's `DataFrame.plot()` and Matplotlib's `pyplot` that shows  the number of total mice for each treatment regimen throughout the course of the study.

  * **NOTE:** These plots should look identical.

* Generate a pie plot using both Pandas's `DataFrame.plot()` and Matplotlib's `pyplot` that shows the distribution of female or male mice in the study.

  * **NOTE:** These plots should look identical.

* Calculate the final tumor volume of each mouse across four of the most promising treatment regimens: Capomulin, Ramicane, Infubinol, and Ceftamin. Calculate the quartiles and IQR and quantitatively determine if there are any potential outliers across all four treatment regimens.

* Using Matplotlib, generate a box and whisker plot of the final tumor volume for all four treatment regimens and highlight any potential outliers in the plot by changing their color and style.

  **Hint**: All four box plots should be within the same figure. Use this [Matplotlib documentation page](https://matplotlib.org/gallery/pyplots/boxplot_demo_pyplot.html#sphx-glr-gallery-pyplots-boxplot-demo-pyplot-py) for help with changing the style of the outliers.

* Select a mouse that was treated with Capomulin and generate a line plot of tumor volume vs. time point for that mouse.

* Generate a scatter plot of mouse weight versus average tumor volume for the Capomulin treatment regimen.

* Calculate the correlation coefficient and linear regression model between mouse weight and average tumor volume for the Capomulin treatment. Plot the linear regression model on top of the previous scatter plot.

* Look across all previously generated figures and tables and write at least three observations or inferences that can be made from the data. Include these observations at the top of notebook.

* Must use proper labeling of your plots, to include properties such as: plot titles, axis labels, legend labels, _x_-axis and _y_-axis limits, etc.

