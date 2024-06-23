import React from "react";
import { Link } from "react-router-dom";

const Workouts = ({ workoutList }) => {
  return (
    <div>
      <h2>Workout List</h2>
      <ul>
        {workoutList.map((workout) => (
          <li key={workout.id}>
            <Link to={`/workouts/${workout.id}`}>
              {workout.name} - {workout.date}
              <br />
              Calories Burned: {workout.calories}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Workouts;
