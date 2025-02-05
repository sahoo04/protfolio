import React from 'react';
import { Bitcoin, Feather as Ethereum, Code2, Database, Cpu } from 'lucide-react';

const FloatingIcons = () => {
  const icons = [
    { icon: Bitcoin, delay: 0 },
    { icon: Ethereum, delay: 2 },
    { icon: Code2, delay: 4 },
    { icon: Database, delay: 6 },
    { icon: Cpu, delay: 8 },
  ];

  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      {icons.map((Icon, index) => (
        <div
          key={index}
          className="absolute animate-float"
          style={{
            left: `${Math.random() * 90}%`,
            top: `${Math.random() * 90}%`,
            animationDelay: `${Icon.delay}s`,
            opacity: 0.1
          }}
        >
          <Icon.icon className="w-12 h-12 text-blue-600 dark:text-blue-400" />
        </div>
      ))}
    </div>
  );
};

export default FloatingIcons;