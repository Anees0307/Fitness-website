import React, { useState } from 'react';
import './Losebelly.css';
import Navbar from './Navbar';

const LoseBellyFat = () => {
    const [weight, setWeight] = useState(70);
    const [height, setHeight] = useState(170);

    // Function to adjust workout intensity based on weight
    const getWorkoutIntensity = (weight) => {
        if (weight < 60) {
            return {
                cardio: '20 minutes',
                workout: '15 minutes',
            };
        } else if (weight < 80) {
            return {
                cardio: '30 minutes',
                workout: '20 minutes',
            };
        } else {
            return {
                cardio: '40 minutes',
                workout: '25 minutes',
            };
        }
    };

    const { cardio, workout } = getWorkoutIntensity(weight);

    return (
        <div>
            <Navbar />

            <div className="workout-page">
                <h1>Lose Belly Fat Program</h1>
                <div className="input-section">
                    <div className="input-group">
                        <label>Weight (kg):</label>
                        <input 
                            type="number" 
                            value={weight} 
                            onChange={(e) => setWeight(Number(e.target.value))} 
                            min="0"
                        />
                    </div>
                    <div className="input-group">
                        <label>Height (cm):</label>
                        <input 
                            type="number" 
                            value={height} 
                            onChange={(e) => setHeight(Number(e.target.value))} 
                            min="0"
                        />
                    </div>
                </div>
                <div className="workout-split">
                    <div className="workout-day">
                        <h2>Monday</h2>
                        <ul>
                            <li>Cardio: {cardio}</li>
                            <li>Abs workout: {workout}</li>
                            <li>Stretching: 15 minutes</li>
                        </ul>
                    </div>
                    <div className="workout-day">
                        <h2>Tuesday</h2>
                        <ul>
                            <li>HIIT: {cardio}</li>
                            <li>Legs workout: {workout}</li>
                            <li>Stretching: 15 minutes</li>
                        </ul>
                    </div>
                    <div className="workout-day">
                        <h2>Wednesday</h2>
                        <ul>
                            <li>Cardio: {cardio}</li>
                            <li>Arms workout: {workout}</li>
                            <li>Stretching: 15 minutes</li>
                        </ul>
                    </div>
                    <div className="workout-day">
                        <h2>Thursday</h2>
                        <ul>
                            <li>HIIT: {cardio}</li>
                            <li>Back workout: {workout}</li>
                            <li>Stretching: 15 minutes</li>
                        </ul>
                    </div>
                    <div className="workout-day">
                        <h2>Friday</h2>
                        <ul>
                            <li>Cardio: {cardio}</li>
                            <li>Core workout: {workout}</li>
                            <li>Stretching: 15 minutes</li>
                        </ul>
                    </div>
                    <div className="workout-day">
                        <h2>Saturday</h2>
                        <ul>
                            <li>HIIT: {cardio}</li>
                            <li>Full body workout: {workout}</li>
                            <li>Stretching: 15 minutes</li>
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

export default LoseBellyFat;
