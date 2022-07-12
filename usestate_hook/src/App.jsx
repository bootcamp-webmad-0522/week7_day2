import { useState } from 'react';
import './App.css'
import Counter from './components/Counter';

function App() {

  const [theme, setTheme] = useState('light')

  const changeTheme = e => {
    const selectedTheme = e.target.value
    setTheme(selectedTheme)
  }

  return (
    <div className={`App theme-${theme}`}>

      <h1>Hook de estado: useState()</h1>

      <Counter />

      <hr />

      <select onChange={changeTheme}>
        <option value="light">Tema claro</option>
        <option value="dark">Tema oscuro</option>
      </select>
    </div>
  );
}

export default App;
