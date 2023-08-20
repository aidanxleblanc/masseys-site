import React, { useState } from 'react';

const DropdownMenu = ({ name, items }) => {
    const [isOpen, setIsOpen] = useState(false);

    const openDropdown = () => {
        setIsOpen(true)
    };

    const closeDropdown = () => {
        setIsOpen(false)
    };
  
    return (
      <div className="relative text-center overflow-visible w-40"
        onMouseEnter={openDropdown}
        onMouseLeave={closeDropdown}
      >
          <button
            className="font-display text-base text-white-700 hover:text-black-300"
          >
            { name }
          </button>

      <div
        className={`transition-opacity duration-500 ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      >
        {isOpen && items.length > 0 && (
          <ul className="justify-center p-1 text-center font-display">
            {items.map((item, index) => (
              <button>
                <li key={index} className="text-center text-sm p-1 hover:text-gold
                  transition-all duration-300 hover:text-base">
                    {item}
                </li>
              </button>
            ))}
          </ul>
        )}
        </div>
      </div>
    );
  };

  export default DropdownMenu