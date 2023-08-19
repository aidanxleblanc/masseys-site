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
        
  
        {isOpen && items.length > 0 && (
          <ul className="justify-center p-1 text-center font-display">
            {items.map((item, index) => (
                <li key={index} className="text-center text-sm p-1 hover:text-black">
                    {item}
                </li>
            ))}
          </ul>
        )}
      </div>
    );
  };

  export default DropdownMenu