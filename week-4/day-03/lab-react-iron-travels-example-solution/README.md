![logo_ironhack_blue 7](https://user-images.githubusercontent.com/23629340/40541063-a07a0a8a-601a-11e8-91b5-2f13e4e6b441.png)

# LAB | React Iron Travels

<details>
  <summary>
   <h2>Learning Goals</h2>
  </summary>

  This exercise allows you to practice and apply the concepts and techniques taught in class. 

  Upon completion of this exercise, you will be able to:

  - Render array data as a list in a React app
  - Correctly set a `key` attribute to the list of items
  - Remove items from a list
  - Use operators `?` and `&&` to conditionally render content
  - Extract new components and split the responsibilities of components

  <br>
  <hr> 

</details>

## Introduction

In this exercise, you will practice rendering lists from array data and using conditional rendering in React.



The objective of this exercise is to create a small React app that displays different travel plans, for a fictional company - Iron Travels (keeping in line with our Iron-labeling tradition at Ironhack). 

The app that you will be creating may seem simple, but the concepts you are practicing are fundamental to every application or web platform. By working with lists and conditional rendering on a smaller scale, you will gain practical knowledge of how they work and how to use them. Once you understand these concepts, you will be able to apply them in different ways and build a variety of apps.



<br>

<p align="center">
  <img src="https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/lab-react-iron-travels/00-introduction.png" alt="Example - Finished LAB" />
</p>

<br>

## Setup

- Fork this repo
- Clone this repo

```shell
cd lab-react-iron-travels
npm install
npm run dev
```



## Submission

- Upon completion, run the following commands:

  ```
  git add .
  git commit -m "done"
  git push origin master
  ```

- Create a Pull Request and submit your assignment.

  

## Instructions



### Iteration 0 | Components folder

Inside of the `src/` folder, create a new folder named `components`. 

Use the `components` folder to store all the components that you create in the following iterations.


----

<br>

### Iteration 1 | List and Keys - `TravelList`

Create a `TravelList` component that displays the list of all the items coming from the file `src/data/travel-plans.json`. Remember to import the json data in the component:

```js
import travelPlansData from "./data/travel-plans.json";
```

<br>

**Example:**

```jsx
<TravelList />
```

<br>

<details>

  <summary><b>Expected Result</b></summary>

  <p align="center">
    <img src="https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/lab-react-iron-travels/01-list.png" alt="TravelList component basic" width="700">
  </p>

  <br>

  <hr>

</details>

<details>
  <summary><b>Hint</b></summary>

  <br>

  After importing the JSON data remember to store it in the component state. Use the `useState` hook to create a new state variable.

</details>

----

<br>

### Iteration 2 | Conditional Rendering - Labels

Update the `TravelList` component to display labels based on the cost (`totalCost` property) of each travel plan. Here’s how you should implement it:

- Travel plans that cost **`350` or less** should have a label **Great Deal**.

- Travel plans that cost **`1500` or more** should have the label **Premium**.

  <br>

  

Additionally, if the travel plan includes an all-inclusive package (`allInclusive` property), render a label **All Inclusive** in addition to the cost label.

<br>

<details>

  <summary><b>Expected Result</b></summary>

  <p align="center">
    <img src="https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/lab-react-iron-travels/02-labels.png" alt="TravelList items with labels" width="700">
  </p>

  <br>

  <hr>

</details>


----

<br>

### Iteration 3 | Removing Items - Delete Button

Update the `TravelList` component and display a delete button on each list item. When the user clicks on the button, the corresponding travel plan should be removed from the list.

<br>

<details>

  <summary><b>Expected Result</b></summary>

  <p align="center">
    <img src="https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/lab-react-iron-travels/03-delete-items.gif" alt="Delete list item" width="700">
  </p>

  <br>

  <hr>

</details>

<details>
  <summary><b>Hint</b></summary>

  <br>

  You can use the `id` property of each travel plan to identify the item to remove.

</details>

----

<br>

### Bonus: Iteration 4 | Extract Component

Create a new component named `TravelPlanCard` and move the JSX code that renders each travel plan from the `TravelList` component to the new component.
The component should take 1 prop:

- `plan`: An object with the travel plan data


**Example:**

```jsx
  <TravelPlanCard plan={plan} />
```

<br>

----

<br>

### Bonus: Iteration 5 | Favorites

Render a separate new list with the heading ***Favorites*** on the right side of the current list. Each list item should have a favorite button (<kbd>♡</kbd>) in addition to the delete button. 

When the user clicks on the favorite button (<kbd>♡</kbd>) the corresponding travel plan should be added to the favorites list.


Additionally, the background color of the button should change with each click. You can use the following array of colors: `["purple", "blue", "green", "yellow", "orange", "red"]`

**Example:**

```jsx
<TravelList />
```


<br>

<details>

  <summary><b>Expected Result</b></summary>

  <p align="center">
    <img src="https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/lab-react-iron-travels/04-favorites.gif" alt="Favorites list" width="700">
  </p>


  <br>

  <hr>

</details>


----

<br>


Happy coding! :blue_heart:
