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
      <div className="relative items-center justify-center overflow-visible w-32"
        onMouseEnter={openDropdown}
        onMouseLeave={closeDropdown}
      >
          <button
            className="font-display text-center text-base text-white-700 hover:text-black-300"
          >
            { name }
          </button>

      <div
        className={`absolute w-full transition-opacity duration-500 ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      >
        {isOpen && items.length > 0 && (
          <ul className="flex flex-col items-center p-1 font-display">
            {items.map((item, index) => (
              <button >
                <li key={index}
                className="text-center text-sm p-1 hover:text-gold
                  transition-all duration-300 hover:text-base">
                    <a href={`/${item.toLowerCase().replace(/ /g, '-')}`}>
                      {item}
                    </a>
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