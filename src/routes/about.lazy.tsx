import { FC } from 'react';
import { createLazyFileRoute } from '@tanstack/react-router';

const About: FC = () => {
  return <div className="p-2">Hello from About!</div>;
};

export const Route = createLazyFileRoute('/about')({
  component: About,
});
