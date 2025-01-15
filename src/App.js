import React, { useEffect, useState } from 'react';
import './App.css';

import NavBar from './components/NavBar';
import Photos from './components/Photos';
import CountdownTimer from './components/CountdownTimer';
import Text from './components/Text';
import Timing from './components/Timing';
import Map from './components/Map';

function App() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Устанавливаем задержку перед появлением элементов
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1000); // Задержка в миллисекундах

    // Очистка таймера при размонтировании компонента
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`fade-in ${isVisible ? 'visible' : ''}`}>
      <NavBar />
      <Photos />
      <CountdownTimer />
      <Text />
      <Timing />
      <Map />
    </div>
  );
}

export default App;
