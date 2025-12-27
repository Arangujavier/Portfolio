import React from 'react';

interface TitleDescriptionProps {
  title: string;
  children: React.ReactNode;
}

export default function TitleDescription({ title, children }: TitleDescriptionProps) {
  return (
    <div>
        <h1>{title}</h1>
        <div>{children}</div>
    </div>
  );
}