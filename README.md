# Fitness Tracker App

A simple fitness tracker app to manage and track your workouts.

## Setup

1. Fork this repo.
1. Clone your fork to your machine. <br/>
a. Click on button that says <b>CODE</b>.<br/>
b. Copy https url.<br/>
c. Create a directory for the warmup.<br/>
d. Run `git clone 'https url' && cd $_ `.
1. Run `npm install` to install dependencies.
1. Start the server.<br/>
a. Run `code .` to open project in code editor.<br/>
b. Run `npm start` to start the server.

Your server is now running!
Visit port specified `http://localhost:300?` on your browser and the homepage will be displayed.


## Tasks

### Task 1: Create the Functionality to Add a New Workout
- File: src/components/createWorkout/CreateWorkout.js
- Description: Implement a form to add new workouts. Each workout should have a name, date, duration, and calories burned. When the form is submitted, the new workout should be added to the list of existing workouts.
- Hint: Use useNavigate to be directed to the list of workouts after creating a new workout.
### Task 2: Add 5 New Workouts
- Description: Populate the workout list with 5 new workouts having varied names, dates, durations, and calories burned.
### Task 3: Sort the Workouts in Ascending and Descending Order by Calories Burned
- File: src/components/workouts/Workouts.js
- Description: Implement functionality to sort the workouts in ascending and descending order based on the calories burned. Add buttons or dropdowns to trigger the sorting.
- Hint: Use the sort method on the workoutList array and manage the sort order using a state variable.
### Task 4: Add Minimal Styling
- Description: Add minimal styling to the app to make it look cleaner. Ensure the following elements are styled:
  - Navigation bar
  - Workout list
  - Workout detail
  - Create workout form