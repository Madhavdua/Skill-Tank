import React, { useState } from 'react';
import { LayoutGrid, User, BarChart3, MessageSquare, Calendar, Briefcase, Users } from 'lucide-react';

const Sidebar = () => {
  const [navItems, setNavItems] = useState([
    { icon: LayoutGrid, isActive: true },
    { icon: User, isActive: false },
    { icon: BarChart3, isActive: false, },
    { icon: MessageSquare, isActive: false, },
    { icon: Calendar, isActive: false, },
    { icon: Briefcase, isActive: false },
    { icon: Users, isActive: false },
  ]);

  // Function to handle click events
  const handleClick = (index) => {
    const updatedNavItems = navItems.map((item, i) => ({
      ...item,
      isActive: i === index, // Set the clicked item as active
    }));
    setNavItems(updatedNavItems);
  };

  return (
    <div className="d-flex flex-column bg-white border-end vh-100 align-items-center py-4" style={{ width: '80px' }}>
      {/* Sidebar Header */}
      <div className="mb-4 text-center">
        <span className="fw-bold fs-4 text-dark">
          a<span className="text-primary">Ex</span>
        </span>
      </div>

      <nav className="d-flex flex-column gap-3">
        {navItems.map((item, index) => {
          const Icon = item.icon;
          return (
            <button onClick={() => handleClick(index)}
              key={index}
              className={`btn d-flex justify-content-center align-items-center p-2 rounded 
                ${item.isActive ? 'bg-primary text-white' : 'text-secondary'}`}
            >
              <Icon size={24} strokeWidth={1.5} />
            </button>
          );
        })}
      </nav>

    </div>
  );
};

export default Sidebar;
