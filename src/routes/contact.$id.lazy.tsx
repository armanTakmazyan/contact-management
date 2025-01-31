import { type FC, useState } from 'react';
import { createLazyFileRoute, useParams } from '@tanstack/react-router';
import { ContactForm } from '@components/ContactForm';
import {
  ContactNotFound,
  ContactInformation,
} from '@components/ContactInformation';

const contacts = [
  {
    id: '1',
    image: 'https://randomuser.me/api/portraits/men/32.jpg',
    fullName: 'Henri Helvetica',
    username: 'HenriHelvetica',
    description: 'How To WebPageTest',
  },
  {
    id: '2',
    image: 'https://randomuser.me/api/portraits/women/45.jpg',
    fullName: 'Sarah Dayan',
    username: 'SarahDayan',
    description: 'Front-End Engineer at Algolia',
  },
];

const ContactPage: FC = () => {
  const { id } = useParams({ strict: false });
  const [isEditing, setIsEditing] = useState(false);

  const contact = contacts.find((c) => c.id === id);

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
