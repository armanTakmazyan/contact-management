import type { FC } from 'react';
import { createLazyFileRoute } from '@tanstack/react-router';
import { ContactStartScreen } from '@components/ContactStartScreen';

const Index: FC = () => {
  return (
    <div className="w-full h-full flex flex-1 items-center justify-center bg-gray-900">
      <ContactStartScreen />
    </div>
  );
};

export const Route = createLazyFileRoute('/')({
  component: Index,
});
