"use client"; // This is required because AOS uses window object

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const AOSInitializer = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      easing: 'ease-in-out',
      once: false,
      mirror: true
    });
  }, []);

  return null;
};

export default AOSInitializer;