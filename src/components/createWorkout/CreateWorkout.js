import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const CreateWorkout = ({ addWorkout }) => {

  let navigate = useNavigate();

  const [newWorkout, setNewWorkout] = useState({
    id: "",
    name: "",
    date: "",
    duration: "",
    calories: "",
  })

  function handleTextChange (e) {
    setNewWorkout({ ...newWorkout, [e.target.id]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    addWorkout(newWorkout)
    navigate(`/workouts/${newWorkout.id}`)
  };

  return (
    <div>
      <h2>Create Workout</h2>
      <form onSubmit={handleSubmit}>
        <label>
        <p>Workout ID</p>
        <input onChange={handleTextChange} type="number" id="id" value={Number(newWorkout.id)}/>
        </label>
        <br />
        <label>
        <p>Workout Name</p>
        <input onChange={handleTextChange} type="text" id="name" value={newWorkout.name}/>
        </label>
        <br />
        <label>
        <p>Workout Date</p>
        <input onChange={handleTextChange} type="date" id="date"/>
        </label>
        <br />
        <label>
        <p>Workout Duration</p>
        <input onChange={handleTextChange} type="text" id="duration" value={newWorkout.duration}/>
        </label>
        <br />
        <label>
        <p>Calories Burn</p>
        <input onChange={handleTextChange} type="number" id="calories" value={Number(newWorkout.calories)}/>
        </label>
        <br />
        <br />
        <button type="submit">Create</button>
      </form>
    </div>
  );
};

export default CreateWorkout;
