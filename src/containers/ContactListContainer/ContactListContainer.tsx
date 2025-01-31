import type { FC } from 'react';
import { ContactListSkeleton, ContactList } from '@components/ContactList';
import { useContacts } from '@hooks/useContacts';
import { ContactListContainerProps } from './types';

export const ContactListContainer: FC<ContactListContainerProps> = ({
  searchQuery,
}) => {
  const { data: contacts, isLoading, error } = useContacts({ searchQuery });

  if (isLoading) return <ContactListSkeleton className="h-full" />;

  if (error) {
    return (
      <p className="text-red-500 text-base text-center mt-2">
        Failed to load contacts.
      </p>
    );
  }

  if (!contacts || !contacts.length) {
    return (
      <p className="text-gray-400 text-md text-center mt-2">
        No contacts available.
      </p>
    );
  }

  return <ContactList contacts={contacts} className="h-full" />;
};
