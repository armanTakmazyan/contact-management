import { useMutation } from '@tanstack/react-query';
import { uploadImageToCloudinary } from '@/api/cloudinaryService';

export const useUploadImageToCloudinary = () => {
  const result = useMutation({
    mutationFn: uploadImageToCloudinary,
  });
  
  return result;
};
