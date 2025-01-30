import { FC } from 'react';
import type { ContactInformationProps } from './types';
import { PrimaryButton } from '@components/Buttons/PrimaryButton';
import { DangerButton } from '@components/Buttons/DangerButton';

export const ContactInformation: FC<ContactInformationProps> = ({
  image,
  name,
  username,
  description,
  onEdit,
  onDelete,
}) => {
  return (
    <div className="flex items-center bg-gray-800 p-6 rounded-lg shadow-md">
      <img
        src={image}
        alt={name}
        className="w-20 h-20 rounded-full object-cover border-2 border-gray-600"
      />
      <div className="ml-5 flex-1">
        <h2 className="text-xl font-semibold text-white">{name}</h2>
        <p className="text-blue-400 text-sm">@{username}</p>
        <p className="text-gray-400 text-sm mt-1">{description}</p>
        <div className="mt-4 flex space-x-3">
          <PrimaryButton onClick={onEdit}>Edit</PrimaryButton>
          <DangerButton onClick={onDelete}>Delete</DangerButton>
        </div>
      </div>
    </div>
  );
};
