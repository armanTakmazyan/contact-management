import { FC } from 'react';
import { ContactStartScreen } from '@/components/ContactStartScreen';
import { createLazyFileRoute } from '@tanstack/react-router';

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
