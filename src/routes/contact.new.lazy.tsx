import { FC } from 'react';
import { createLazyFileRoute } from '@tanstack/react-router';
import { ContactForm } from '@components/ContactForm';

const ContactNew: FC = () => {
  return (
    <div className="w-full h-full bg-gray-900 p-3">
      <div className="max-w-xl">
        <ContactForm
          onSubmit={(updatedValues) => {
            console.log('Updated Contact:', updatedValues);
          }}
          onCancel={() => {}}
        />
      </div>
    </div>
  );
};

export const Route = createLazyFileRoute('/contact/new')({
  component: ContactNew,
});
