'use client';

import { useEffect, useState } from 'react';
import ThreeDots from './ThreeDots';

const SidebarToggle = ({ isSidebarOpen }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <>
      {isSidebarOpen ? "Home" : <ThreeDots />}
    </>
  );
};

export default SidebarToggle;
