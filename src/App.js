import './App.css';
import Sidebar from './components/Sidebar';
import Body from './components/Body';
import { useContext } from 'react';
import { ThemeContext } from './contexts/ThemeContext';

function App() {
  const { isDark } = useContext(ThemeContext)
  return (
    <div className={`App ${isDark ? "dark":'light'}`}>
      <Sidebar />
      <Body />
    </div>
  );
}

export default App;
