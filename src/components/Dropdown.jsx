import { useState } from 'react';

function Dropdown() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event) => {
    if (!event.target.closest('.dropdown')) {
      setIsOpen(false);
    }
  };

  // Close dropdown if clicked outside
  window.addEventListener('click', handleClickOutside);

  return (
    <div className="relative inline-block dropdown">
      <button
        onClick={toggleDropdown}
        className=" px-4 py-2 "
        type="button"
      >
        Dropdown
      </button>
      <ul
        className={`absolute mt-2 w-48 bg-white border border-gray-300 rounded-md shadow-lg ${
          isOpen ? 'block' : 'hidden'
        }`}
      >
        <li>
          <a className="block px-4 py-2 text-gray-800 hover:bg-gray-100" href="#">
            Menu item
          </a>
        </li>
        <li>
          <a className="block px-4 py-2 text-gray-800 hover:bg-gray-100" href="#">
            Menu item
          </a>
        </li>
        <li>
          <a className="block px-4 py-2 text-gray-800 hover:bg-gray-100" href="#">
            Menu item
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Dropdown;
