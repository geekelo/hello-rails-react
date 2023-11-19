import React, { useState, useEffect } from 'react';

const Greeting = () => {
  const [greeting, setGreeting] = useState('Loading...');

  useEffect(() => {
    // Fetch random greeting from the API
    fetch('/api/greetings/random')
      .then(response => response.json())
      .then(data => setGreeting(data.greeting))
      .catch(error => console.error('Error fetching greeting:', error));
  }, []);

  return (
    <div>
      <h1>Welcome to Your Rails Greetings App</h1>
      <p>{greeting}</p>
    </div>
  );
};

export default Greeting;
