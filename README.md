# Digging Into Dinosaurs


## Project Description/Outline

The purpose of this project was to create a user-friendly visual dashboard of a dataset using a `Python Flask` `powered API`, `HTML/CSS`, and `JavaScript`. Our group decided to create a dashboard of interactive fun facts about dinosaurs. We wanted users to be able to “dig” into the fossil data and discover facts about dinosaurs in a unique way, allowing the user to apply a single filter to multiple visualizations at once. The dataset is from an existing Public Tableau Dashboard entitled “When Dinosaurs Ruled the Earth”. This dataset had 2463 records of dinosaur fossils discovered from 1836 - 2018 and was a large enough dataset to help create the base of our project.

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

   * Data Table: ​using D3.js, a filtered table was created to allow users the opportunity to explore the raw dataset.
   
   <img width="980" alt="圖片" src="https://user-images.githubusercontent.com/70195202/116615603-283bc800-a901-11eb-9dbe-2dc3e49023f1.png">
   
   
## Conclusion

The dashboard met all the team’s required specifications and launched successfully once deployed to github. The site is clean and guided and allows for fun but thorough data exploration. The site could be improved by adding additional visualizations and adding more data for exploration. Although the data set included over 2000 records, it was limited to only 4 countries of fossils.

If you want to learn more about our web app, please check out our [site](https://jammilo.github.io/team_dinosaur_project/index.html)


---
We make no claims as the ownership of the data. Hence, please do what you'd love with the data but credit the appropriate people.


