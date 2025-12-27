import React from 'react';

interface CardProps {
  children: React.ReactNode;
}

export default function Card({ children }: CardProps) {
  return (
    <div className="hacker-card-outer">
      <div className="hacker-card-inner">
        {children}
      </div>
    </div>
  );
}

