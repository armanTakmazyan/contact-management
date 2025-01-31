import { cloudinaryClient } from '@/api/cloudinaryClient';
import {
  CLOUNDINARY_API_ROUTES,
  CLOUDINARY_UPLOAD_PRESET
} from './constants';
import {
  UploadImageToCloudinary,
  UploadImageToCloudinaryResponse,
} from './types';

export const uploadImageToCloudinary: UploadImageToCloudinary = async ({
  imageFile,
}) => {
  const formData = new FormData();
  formData.append("file", imageFile);
  formData.append("upload_preset", CLOUDINARY_UPLOAD_PRESET);

  const response = await cloudinaryClient.post<UploadImageToCloudinaryResponse>(
    CLOUNDINARY_API_ROUTES.UPLOAD,
    formData,
    {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    },
  );

  return response.data;
};
