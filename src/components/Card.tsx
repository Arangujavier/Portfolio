import React from 'react';

interface CardProps {
  title: string;
  description: string;
}

const Card: React.FC<CardProps> = ({ title, description }) => {
  return (
    <div className="card">
      <h3 className="card-title">{title}</h3>
      <div className="card-description">
        <p>{description}</p>

      </div>
    </div>
  );
};

export default Card;
