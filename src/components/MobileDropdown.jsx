import React, { useState, useEffect } from 'react';

const MobileDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    setIsOpen(false);
  }, []);

  const menuStyle = {
    opacity: isOpen ? 1 : 0,
    transform: `scale(${isOpen ? 1 : 0.5})`,
    transition: "opacity 0.3s, transform 0.3s",
  };

  return (
    <div className="md:hidden text-2xl relative">
      <button
        className="menu-toggle"
        onClick={toggleMenu}
      >
        ☰
      </button>
      {isOpen && (
      <div style={menuStyle} className={`fixed inset-0 text-navy font-display bg-gray-900 bg-opacity-75 z-40 flex items-center justify-center`}>
        <div className="menu-box p-8 bg-white rounded-lg z-50 relative">
          <button
            className="close-button absolute top-3 right-4 text-gray-600"
            onClick={closeMenu}
          >
            X
          </button>
          <ul className="menu-list text-center">
            <div className='p-2'>
              <li><a href="/projects">Projects</a></li>
            </div>
            <div className='p-2'>
              <li><a href="/featured">Featured Projects</a></li>
            </div>
            <div className='p-2'>
              <li><a href="/our-story">Our Story</a></li>
            </div>
            <div className='p-2'>
              <li><a href="/our-team">Our Team</a></li>
            </div>
            <div className='p-2'>
              <li><a href="/our-work">Our Work</a></li>
            </div>
            <div className='p-2'>
              <li><a href="/our-mission">Our Mission</a></li>
            </div>
            <div className='p-2'>
              <li><a href="/careers">Careers</a></li>
            </div>
            <div className='p-2'>
              <li><a href="/contact">Contact</a></li>
            </div>
          </ul>
        </div>
      </div>
      )}
    </div>
  );
};

export default MobileDropdown;
