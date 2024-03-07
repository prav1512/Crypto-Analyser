// PersonComponent.js
import React from 'react';
import './PersonComponent.css'; // Import your CSS file

const PersonComponent = ({ person }) => {
  return (
    <div className="person-square">
      {/* Display person data inside the square */}
      <h3>{person.name}</h3>
      <p>{person.profession}</p>
      {/* Add any other relevant information */}
    </div>
  );
};

export default PersonComponent;
