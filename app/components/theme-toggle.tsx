'use client';

import { SunIcon } from 'app/components/micro-icons/sun';
import { MoonIcon } from 'app/components/micro-icons/moon';
import { DeviceIcon } from 'app/components/micro-icons/device';
import { useState, useEffect } from 'react';

const ThemeToggler = () => {
  const [isLightTheme, setIsLightTheme] = useState(true);

  // Load theme from localStorage or default to light
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setIsLightTheme(savedTheme === 'light');
      document.documentElement.setAttribute('data-theme', savedTheme);
    } else {
      // Set default theme to light
      document.documentElement.setAttribute('data-theme', 'light');
    }
  }, []);

  // Toggle the theme and save it to localStorage
  const toggleTheme = () => {
    const newTheme = isLightTheme ? 'dark' : 'light';
    setIsLightTheme(!isLightTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  return (
    <div className="flex space-x-2">
      <div onClick={toggleTheme} className="cursor-pointer">
        {isLightTheme ? <MoonIcon /> : <SunIcon />}
      </div>
      <div onClick={toggleTheme} className="cursor-pointer">
        <DeviceIcon />
      </div>
    </div>
  );
};

export { ThemeToggler };