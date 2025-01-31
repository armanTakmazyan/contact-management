import { useMutation } from '@tanstack/react-query';
import { uploadImageToCloudinary } from '@api/cloudinaryService';
import { UseUploadImageToCloudinary } from './types';

export const useUploadImageToCloudinary: UseUploadImageToCloudinary = () => {
  const result = useMutation({
    mutationFn: uploadImageToCloudinary,
  });

  return result;
};
