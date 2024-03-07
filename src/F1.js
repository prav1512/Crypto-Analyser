// F1.js
import React from 'react';
import PersonComponent from './PersonComponent'; // Import your custom component

const F1 = () => {
  const personData = {
    name: 'John Doe',
    profession: 'Engineer',
    // Add any other relevant properties
  };

  return (
    <div>
      <h1>Parent Component (F1)</h1>
      <PersonComponent person={personData} />
    </div>
  );
};

export default F1;
