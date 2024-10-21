import React, { useState } from 'react';
import './App.css';
import myImage from "./myImage.jpg";

const activities = [
  'Drawing', 'Dancing', 'Singing', 'Sports', 'Video Game', 'Acting',
  'Travelling', 'Gardening', 'Animals', 'Photography', 'Teaching', 'Exercise', 
  'Coding', 'Electricity Components', 'Mechanic Parts', 'Computer Parts',
  'Researching', 'Architecture', 'Historic Collection', 'Botany', 'Zoology',
  'Physics', 'Accounting', 'Economics', 'Sociology', 'Geography', 'Psychology',
  'History', 'Science', 'Business Education', 'Chemistry', 'Mathematics', 
  'Biology', 'Makeup', 'Designing', 'Content Writing', 'Crafting', 'Literature',
  'Reading', 'Cartooning', 'Debating', 'Astrology', 'Hindi', 'French', 'English', 
  'Urdu', 'Other Language', 'Solving Puzzles', 'Gymnastics', 'Yoga', 'Engineering',
  'Doctor', 'Pharmacist', 'Cycling', 'Knitting', 'Director', 'Journalism', 'Business',
  'Listening Music'
];

function App() {
  // Initialize the selections state with "No" for all activities
  const initialSelections = activities.reduce((acc, activity) => {
    acc[activity] = 'No';
    return acc;
  }, {});

  const [selections, setSelections] = useState(initialSelections);

  const handleSelection = (activity, value) => {
    setSelections({
      ...selections,
      [activity]: value,
    });
  };

  const handleSubmit = () => {
    console.log(selections);
  };

  return (
    <div className="App">
      {/* Navbar */}
      <nav className="navbar">
      <img src={myImage} alt="Webapp's logo" className='cclogo'/>
        <h2 className="navbar-title">CareerCompass: Your Guide to Career Success</h2>
      </nav>

      {/* Main Content */}
      <h1>Choose Your Activities</h1>
      <div className="activity-list">
        {activities.map((activity, index) => (
          index % 2 === 0 ? (
            <div className="activity-row" key={index}>
              <div className="activity-item">
                <span>{activities[index]}</span>
                <div className="radio-buttons">
                  <label>
                    <input
                      type="radio"
                      name={activities[index]}
                      value="Yes"
                      onChange={() => handleSelection(activities[index], 'Yes')}
                      checked={selections[activities[index]] === 'Yes'}
                    />
                    Yes
                  </label>
                  <label>
                    <input
                      type="radio"
                      name={activities[index]}
                      value="No"
                      onChange={() => handleSelection(activities[index], 'No')}
                      checked={selections[activities[index]] === 'No'}
                    />
                    No
                  </label>
                </div>
              </div>
              {activities[index + 1] && (
                <div className="activity-item">
                  <span>{activities[index + 1]}</span>
                  <div className="radio-buttons">
                    <label>
                      <input
                        type="radio"
                        name={activities[index + 1]}
                        value="Yes"
                        onChange={() => handleSelection(activities[index + 1], 'Yes')}
                        checked={selections[activities[index + 1]] === 'Yes'}
                      />
                      Yes
                    </label>
                    <label>
                      <input
                        type="radio"
                        name={activities[index + 1]}
                        value="No"
                        onChange={() => handleSelection(activities[index + 1], 'No')}
                        checked={selections[activities[index + 1]] === 'No'}
                      />
                      No
                    </label>
                  </div>
                </div>
              )}
            </div>
          ) : null
        ))}
      </div>
      <button className="submit-button" onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default App;
