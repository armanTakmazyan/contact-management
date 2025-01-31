import axios from 'axios';
import { CLOUDINARY_ENDPOINT, CLOUDINARY_CLOUD_NAME } from './constants';

export const cloudinaryClient = axios.create({
  baseURL: `${CLOUDINARY_ENDPOINT}/${CLOUDINARY_CLOUD_NAME}`,
});
