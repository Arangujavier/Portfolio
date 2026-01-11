import React from 'react';

interface CardGroupProps {
  children: React.ReactNode;
}

export default function CardGroup({ children }: CardGroupProps) {
  return (
    <div className="card-group">
      <div className="card-group-inner">
        {children}
      </div>
    </div>
  );
}

