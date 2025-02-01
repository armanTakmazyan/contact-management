import { useMutation } from '@tanstack/react-query';
import { ContactFormValues } from '@components/ContactForm/types';
import { useUploadImageToCloudinary } from '@hooks/useUploadImageToCloudinary';
import { useCreateContact } from '@hooks/useCreateContact';
import { UseCreateContactWithImage } from './types';

export const useCreateContactWithImage: UseCreateContactWithImage = (
  options = {},
) => {
  const { mutateAsync: uploadImageToCloudinary } = useUploadImageToCloudinary();
  const { mutateAsync: createContact } = useCreateContact();

  const result = useMutation({
    mutationFn: async (newContact: ContactFormValues) => {
      const imageFile = newContact.image;

      if (!imageFile) {
        throw new Error('An image is required.');
      }

      const cloudinaryImage = await uploadImageToCloudinary({ imageFile });

      const contact = await createContact({
        newContact: {
          ...newContact,
          image: cloudinaryImage.url,
        },
      });

      return contact;
    },
    ...options,
  });

  return result;
};
