import React, { useState } from 'react';
import './Aesthetics.css';
import Navbar from './Navbar';

const Aesthetics = () => {
    const [weight, setWeight] = useState(70);
    const [height, setHeight] = useState(170);

    return (
        <div>
            <Navbar/>
        <div className="aesthetics-page">
            <h1>Aesthetic Physique Program</h1>
            <div className="input-section">
                <div className="input-group">
                    <label>Weight (kg):</label>
                    <input 
                        type="number" 
                        value={weight} 
                        onChange={(e) => setWeight(e.target.value)} 
                        />
                </div>
                <div className="input-group">
                    <label>Height (cm):</label>
                    <input 
                        type="number" 
                        value={height} 
                        onChange={(e) => setHeight(e.target.value)} 
                        />
                </div>
            </div>
            <div className="workout-split">
                <div className="workout-day">
                    <h2>Monday</h2>
                    <ul>
                        <li>Chest: 4 sets of 12 reps</li>
                        <li>Triceps: 4 sets of 12 reps</li>
                        <li>Abs: 4 sets of 20 reps</li>
                    </ul>
                </div>
                <div className="workout-day">
                    <h2>Tuesday</h2>
                    <ul>
                        <li>Back: 4 sets of 12 reps</li>
                        <li>Biceps: 4 sets of 12 reps</li>
                        <li>Cardio: 20 minutes</li>
                    </ul>
                </div>
                <div className="workout-day">
                    <h2>Wednesday</h2>
                    <ul>
                        <li>Legs: 4 sets of 12 reps</li>
                        <li>Calves: 4 sets of 20 reps</li>
                        <li>Abs: 4 sets of 20 reps</li>
                    </ul>
                </div>
                <div className="workout-day">
                    <h2>Thursday</h2>
                    <ul>
                        <li>Shoulders: 4 sets of 12 reps</li>
                        <li>Traps: 4 sets of 12 reps</li>
                        <li>Cardio: 20 minutes</li>
                    </ul>
                </div>
                <div className="workout-day">
                    <h2>Friday</h2>
                    <ul>
                        <li>Arms: 4 sets of 12 reps</li>
                        <li>Forearms: 4 sets of 20 reps</li>
                        <li>Abs: 4 sets of 20 reps</li>
                    </ul>
                </div>
                <div className="workout-day">
                    <h2>Saturday</h2>
                    <ul>
                        <li>Full Body: 3 sets of 15 reps</li>
                        <li>Cardio: 30 minutes</li>
                        <li>Stretching: 20 minutes</li>
                    </ul>
                </div>
                <div className="workout-day">
                    <h2>Sunday</h2>
                    <ul>
                        <li>Rest Day</li>
                        <li>Light stretching: 20 minutes</li>
                    </ul>
                </div>
            </div>
        </div>
                        </div>
    );
}

export default Aesthetics;
