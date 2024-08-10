// import React from 'react';
// import Counter from 'counter';
// import 'App.css';

// function App() {
//   return (
//     <div className="app-container">
//       <Counter />
//     </div>
//   );
// }

// export default App;

//D118 CW
import React, { useState } from 'react';

const ColorChange = () => {
  const [color, setColor] = useState('');
  const [paragraphColor, setParagraphColor] = useState('black');

  const handleInputChange = (e) => {
    setColor(e.target.value);
  };

  const handleChangeColor = () => {
    setParagraphColor(color);
  };

  return (
    <div>
      <input 
        type="text" 
        placeholder="Enter a color" 
        value={color} 
        onChange={handleInputChange} 
      />
      <button onClick={handleChangeColor}>Change Color</button>
      <p style={{ color: paragraphColor }}>
        This paragraph will change color.
      </p>
    </div>
  );
};

export default ColorChange;
//

