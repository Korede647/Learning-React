import React from 'react'
import { useState } from 'react';

const SecondTest = () => {
    
      const [inputs, setInputs] = useState([
        { id: 1, value: '' } // Initial state with one input object
      ]);
    
      const handleInputChange = (id, event) => {
        const newInputs = inputs.map(input =>
          input.id === id ? { ...input, value: event.target.value } : input
        );
        setInputs(newInputs);
      };
    
      const handleAddInput = () => {
        const newInput = { id: inputs.length + 1, value: '' };
        setInputs([...inputs, newInput]);
      };
    
      const handleRemoveInput = (id) => {
        const newInputs = inputs.filter(input => input.id !== id);
        setInputs(newInputs);
      };
    
      return (
        <div>
          <h2>Dynamic Inputs</h2>
          {inputs.map(input => (
            <div key={input.id}>
              <input
                type="text"
                value={input.value}
                onChange={(event) => handleInputChange(input.id, event)}
                placeholder={`Input ${input.id}`}
              />
              <button onClick={() => handleRemoveInput(input.id)}>Remove</button>
            </div>
          ))}
          <button onClick={handleAddInput}>Add Input</button>
          <div>
            <h3>Inputs:</h3>
            <ul>
              {inputs.map(input => (
                <li key={input.id}>{input.value}</li>
              ))}
            </ul>
          </div>
        </div>
      );
    
}

export default SecondTest
