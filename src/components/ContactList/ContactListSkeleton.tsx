import { FC } from 'react';
import clsx from 'clsx';
import { ContactListSkeletonProps } from './types';

export const ContactListSkeleton: FC<ContactListSkeletonProps> = ({
  className,
}) => {
  return (
    <div
      className={clsx(
        'w-full flex flex-col bg-gray-800 p-4 rounded-lg shadow-md',
        className,
      )}
    >
      <div className="h-6 w-32 bg-gray-700 rounded animate-pulse"></div>
      <div className="mt-3 space-y-2">
        {Array.from({ length: 5 }).map((_, index) => (
          <div
            key={index}
            className="h-10 w-full bg-gray-700 rounded-lg animate-pulse"
          ></div>
        ))}
      </div>
    </div>
  );
};
