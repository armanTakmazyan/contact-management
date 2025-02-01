import type { FC } from 'react';
import { createLazyFileRoute, useNavigate } from '@tanstack/react-router';
import toast from 'react-hot-toast';
import { ContactForm } from '@components/ContactForm';
import { ContactFormOnSubmit } from '@components/ContactForm/types';
import { useCreateContactWithImage } from '@hooks/useCreateContactWithImage';

const ContactNew: FC = () => {
  const navigate = useNavigate();

  const { mutateAsync: createContactWithImage } = useCreateContactWithImage({
    onSuccess: (contact) => {
      navigate({ to: '/contact/$id', params: { id: contact.id } });
    },
  });

  const onSubmit: ContactFormOnSubmit = async ({ value, formApi }) => {
    await toast.promise(createContactWithImage(value), {
      loading: 'Saving contact...',
      success: <b>Contact saved successfully!</b>,
      error: <b>Failed to save contact.</b>,
    });

    formApi.reset();
  };

  const onCancel = () => navigate({ to: '/' });

  return (
    <div className="w-full h-full bg-gray-900 p-3">
      <div className="max-w-xl">
        <ContactForm onSubmit={onSubmit} onCancel={onCancel} />
      </div>
    </div>
  );
};

export const Route = createLazyFileRoute('/contact/new')({
  component: ContactNew,
});
