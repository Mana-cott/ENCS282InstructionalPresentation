import { useEffect } from 'react';
import './App.css';
import Steps from './components/Steps';
import Equipment from './components/Equipment';
import Introduction from './components/Introduction';
import Conclusion from './components/Conclusion';

function App() {
  useEffect(() => {
    const sparkleColors = ['#004fe1', '#08a1f7', '#03c1f4', '#09e0fe'];

    const createSparkle = (x, y) => {
      const sparkle = document.createElement('div');
      sparkle.className = 'sparkle';

      const size = Math.random() * 6 + 6;
      const rotation = Math.random() * 360;
      const color = sparkleColors[Math.floor(Math.random() * sparkleColors.length)];

      sparkle.style.width = `${size}px`;
      sparkle.style.height = `${size}px`;
      sparkle.style.left = `${x}px`;
      sparkle.style.top = `${y}px`;
      sparkle.style.backgroundColor = color;
      sparkle.style.transform = `rotate(${rotation}deg)`;

      document.body.appendChild(sparkle);

      setTimeout(() => {
        sparkle.remove();
      }, 600); // Match the animation duration
    };

    const handleMouseMove = (e) => {
      createSparkle(e.clientX, e.clientY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="App">
      <div className="window-light-container">
        <div className="window">
          <div className="pane"></div>
          <div className="pane"></div>
          <div className="pane"></div>
          <div className="pane"></div>
        </div>
        <div className="ray ray-1"></div>
        <div className="ray ray-2"></div>
        <div className="ray ray-3"></div>
      </div>

      <header className="App-header">
        <h1>How to Factory Reset Windows 11</h1>
        <p>Jack Hannan, George Baghdi</p>
        <p>ENCS 282 Instructional Manual Assignment</p>
      </header>

      <Introduction />
      <Equipment />
      <Steps />
      <Conclusion />
    </div>
  );
}

export default App;