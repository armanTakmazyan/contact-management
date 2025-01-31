import type { FC } from 'react';
import { createLazyFileRoute } from '@tanstack/react-router';
import { ContactForm } from '@components/ContactForm';
import { useUploadImageToCloudinary } from '@hooks/useUploadImageToCloudinary';

const ContactNew: FC = () => {
  const {
    mutateAsync: uploadImageToCloudinary,
    isPending,
    error,
    data,
  } = useUploadImageToCloudinary();

  const handleSubmit = async (updatedValues: any) => {
    console.log('Updated Contact:', updatedValues);

    const imageFile = updatedValues.image;

    if (imageFile) {
      const uploadedImageUrl = await uploadImageToCloudinary({ imageFile });
      console.log('Uploaded Image URL:', uploadedImageUrl);
    }
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
