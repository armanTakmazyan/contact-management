import { FC } from 'react';

export const ContactStartScreen: FC = () => {
  return (
    <div className="w-full p-2 flex flex-col items-center justify-center h-full text-gray-300 text-center">
      <h2 className="text-2xl font-semibold">
        Find a Contact or Create a New One
      </h2>
      <p className="text-gray-400 mt-2 text-sm">
        Start by selecting an existing contact or adding a new one.
      </p>
    </div>
  );
};
