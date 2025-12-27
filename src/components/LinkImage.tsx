import React from 'react';

interface LinkImageProps {
  image: string;
  title: string;
  href: string;
}

export default function LinkImage({ image, title, href }: LinkImageProps) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      <img src={image} alt={title} />
    </a>
  );
}