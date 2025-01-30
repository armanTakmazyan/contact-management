import { FC } from 'react';
import { createLazyFileRoute, useParams } from '@tanstack/react-router';
import {
  ContactNotFound,
  ContactInformation,
} from '@/components/ContactInformation';

const contacts = [
  {
    id: '1',
    image: 'https://randomuser.me/api/portraits/men/32.jpg',
    name: 'Henri Helvetica',
    username: 'HenriHelvetica',
    description: 'How To WebPageTest',
  },
  {
    id: '2',
    image: 'https://randomuser.me/api/portraits/women/45.jpg',
    name: 'Sarah Dayan',
    username: 'SarahDayan',
    description: 'Front-End Engineer at Algolia',
  },
];

const ContactPage: FC = () => {
  const { id } = useParams({ strict: false });

  const contact = contacts.find((c) => c.id === id);

  if (!contact) {
    return <ContactNotFound />;
  }

  return (
    <div className="w-full h-full bg-gray-900 p-3">
      <div className="max-w-xl">
        <ContactInformation
          image={contact.image}
          name={contact.name}
          username={contact.username}
          description={contact.description}
          onEdit={() => alert('Edit Contact')}
          onDelete={() => alert('Delete Contact')}
        />
      </div>
    </div>
  );
};

export const Route = createLazyFileRoute('/contact/$id')({
  component: ContactPage,
});
