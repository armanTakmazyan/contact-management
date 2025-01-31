import axios from 'axios';
import { CLOUDINARY_CLOUD_NAME } from './constants';

export const cloudinaryClient = axios.create({
  baseURL: `https://api.cloudinary.com/v1_1/${CLOUDINARY_CLOUD_NAME}`,
});