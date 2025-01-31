import type { FC } from 'react';
import clsx from 'clsx';
import { Link, useParams } from '@tanstack/react-router';
import type { ContactListProps } from './types';

export const ContactList: FC<ContactListProps> = ({ contacts, className }) => {
  const { id: selectedId } = useParams({ strict: false });

  return (
    <div
      className={clsx(
        'w-full flex flex-col bg-gray-800 p-4 rounded-lg shadow-md',
        className,
      )}
    >
      <h2 className="text-gray-200 text-lg font-semibold tracking-wide">
        Contacts
      </h2>
      <div className="mt-3 space-y-1 overflow-y-auto">
        {contacts.map((contact) => (
          <Link
            key={contact.id}
            to="/contact/$id"
            params={{ id: `${contact.id}` }}
            className={clsx(
              'block px-5 py-3 rounded-lg text-gray-300 text-sm font-medium transition-all',
              selectedId === contact.id
                ? 'bg-blue-600 text-white'
                : 'hover:bg-blue-500/30 hover:text-white',
            )}
          >
            {contact.fullName}
          </Link>
        ))}
      </div>
    </div>
  );
};
