import './App.css';
import { useState } from 'react';
import ColorBlock from './Components/ColorBlock';
import ColorForm from './Components/ColorForm';

function App() {
  const [colors, setColors] = useState(['red', 'orange', 'yellow', 'green', 'greenyellow', 'lightblue', 'blue', 'violet'])
  let colorMap = colors.map((color, i) => {
    return (
      <ColorBlock key={`${color}-${i}`} color={color} />
    )
  })

  const addColor = (newColor) => {
    setColors([...colors, newColor])
  }

  return (
    <div className="App">
      {/* <ColorBlock color={color} /> */}
      {colorMap}
      <ColorForm addColor={addColor} />
    </div>
  );
}

export default App;
