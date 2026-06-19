# Task Management Dashboard

A modern, responsive, and highly performant Task Management Dashboard built with **Angular 20** and **Tailwind CSS**. This application demonstrates clean frontend architecture, modern state management, and responsive UI design.

## Technology Stack

* **Framework:** Angular 20
* **Styling:** Tailwind CSS
* **Forms:** Angular Reactive Forms
* **Architecture:** centralized `TaskService`.

## Local Setup Instructions

1. **Clone the repository:**
  ```bash
   git clone https://github.com/nareshrazu/Epsilon-Task-Management.git
  ```

2. **Navigate into the directory:**
  ```bash
  cd Epsilon-Task-Management
  ```

3. **Install dependencies:**
  ```bash
  npm install
  ```

4. **Start the development server:**
  ```bash
  ng serve
  ```

5. **Open your browser:** Navigate to `http://localhost:4200/`

## Architecture & Design Decisions

**Centralized Service approach:**
Rather than passing arrays of data between parent and child components (which often leads to out-of-sync bugs), all raw data is held within a single Signal in the `TaskService`. The dashboard components simply subscribe to `computed()` views of that data.

**Reactive Forms:**
The "Add Task" feature utilizes Angular's Reactive Forms to enforce strict data types, ensuring that no `null` or `undefined` values can pollute the task pipeline before being cast to the core `Task` interface.

**Grid Base Representation:**
Mainly focused on Grid-based architecture, so that, due to the large amount of data set, the grid view is good for the search and filter. If we search for any item in the card view it's scattered around and it is difficult to focus. I have used Grid for a better view and a clean representation of large data sets.


## Time Spent - 4.5 hours

**1 hour:** 
To set up an Angular 20 Application and integrate Tailwind CSS, Analyze and plan how components, services is used in this architecture.

**1 hour:**
To develop the skeleton of HTML elements and basic functionalities with integrating the API Services and fetching the data from provided json link.

**2.5 hour:**
For applying Tailwind CSS styles and developing forms and other main features.


## AI usage summary 
Gemini AI was utilized for approximately 50% of the development process. It was primarily used as a pair-programming assistant to accelerate the generation of responsive Tailwind CSS HTML templates and to help troubleshoot specific Angular/TypeScript debugging scenarios.

