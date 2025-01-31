import type { FC } from 'react';
import { createLazyFileRoute } from '@tanstack/react-router';
import toast from 'react-hot-toast';
import { ContactForm } from '@components/ContactForm';
import { ContactFormValues } from '@components/ContactForm/types';
import { useCreateContactWithImage } from '@hooks/useCreateContactWithImage';

const ContactNew: FC = () => {
  const { mutateAsync: createContactWithImage } = useCreateContactWithImage();

  const handleSubmit = (newContact: ContactFormValues) => {
    toast.promise(createContactWithImage(newContact), {
      loading: 'Saving contact...',
      success: <b>Contact saved successfully!</b>,
      error: <b>Failed to save contact.</b>,
    });
  };

  return (
    <div className="w-full h-full bg-gray-900 p-3">
      <div className="max-w-xl">
        <ContactForm onSubmit={handleSubmit} onCancel={() => {}} />
      </div>
    </div>
  );
};

export const Route = createLazyFileRoute('/contact/new')({
  component: ContactNew,
});
