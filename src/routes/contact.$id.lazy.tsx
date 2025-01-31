import { type FC, useState } from 'react';
import { createLazyFileRoute, useParams } from '@tanstack/react-router';
import { ContactForm } from '@components/ContactForm';
import {
  ContactNotFound,
  ContactInformation,
} from '@components/ContactInformation';
import { useContact } from '@hooks/useContact';

const ContactPage: FC = () => {
  const { id = '' } = useParams({ strict: false });
  const [isEditing, setIsEditing] = useState(false);

  const { data: contact, isLoading, error } = useContact({ id });

  if (isLoading) return <div>Loading...</div>;

  if (error) {
    return (
      <p className="text-red-500 text-base text-center mt-2">
        Failed to load contact.
      </p>
    );
  }

  if (!contact) {
    return <ContactNotFound />;
  }

  return (
    <div className="w-full h-full bg-gray-900 p-3">
      <div className="max-w-xl">
        {isEditing ? (
          <ContactForm
            initialValues={{ ...contact, image: undefined }}
            onSubmit={(updatedValues) => {
              console.log('Updated Contact:', updatedValues);
              setIsEditing(false);
            }}
            onCancel={() => setIsEditing(false)}
          />
        ) : (
          <ContactInformation
            image={contact.image}
            fullName={contact.fullName}
            username={contact.username}
            description={contact.description}
            onEdit={() => setIsEditing(true)}
            onDelete={() => alert('Delete Contact')}
          />
        )}
      </div>
    </div>
  );
};

export const Route = createLazyFileRoute('/contact/$id')({
  component: ContactPage,
});
