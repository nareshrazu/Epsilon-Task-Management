# Task Management Dashboard

A modern, responsive, and highly performant Task Management Dashboard built with **Angular 20** and **Tailwind CSS**. This application demonstrates clean frontend architecture, modern state management, and responsive UI design.

## Key Features

* **Modern State Management:** Fully powered by Angular 20 **Signals** (`computed`, `signal`) for a bug-free, synchronous "Single Source of Truth" without the overhead of complex RxJS chains.
* **Dual-View Layout:** Seamlessly toggle between a visual **Card Grid** and a high-density, frozen-header **Data Table**.
* **Real-Time Filtering:** Instant search and status filtering that recalculates state automatically.
* **Responsive Design:** "Mobile-first" CSS architecture. The layout gracefully adapts from stacked mobile views to multi-column desktop grids using Tailwind CSS.

## Technology Stack

* **Framework:** Angular 20 (Standalone Components)
* **Styling:** Tailwind CSS
* **Forms:** Angular Reactive Forms (Strictly Typed)
* **Architecture:** centralized `TaskService`.

## How to Run Locally

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

**The "Single Source of Truth" approach:**
Rather than passing arrays of data between parent and child components (which often leads to out-of-sync bugs), all raw data is held within a single Signal in the `TaskService`. The dashboard components simply subscribe to `computed()` views of that data.

**Strictly Typed Reactive Forms:**
The "Add Task" modal utilizes Angular's Reactive Forms to enforce strict data types, ensuring that no `null` or `undefined` values can pollute the task pipeline before being cast to the core `Task` interface.
