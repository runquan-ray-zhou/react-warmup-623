import React from "react";

const CreateWorkout = ({ addWorkout }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <h2>Create Workout</h2>
      <form onSubmit={handleSubmit}>
        <button type="submit">Create</button>
      </form>
    </div>
  );
};

export default CreateWorkout;
