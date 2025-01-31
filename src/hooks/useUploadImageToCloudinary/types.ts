import { UseMutationResult } from '@tanstack/react-query';
import {
  UploadImageToCloudinaryArgs,
  UploadImageToCloudinaryResponse,
} from '@api/cloudinaryService/types';

export type UseUploadImageToCloudinaryResult = UseMutationResult<
  UploadImageToCloudinaryResponse,
  Error,
  UploadImageToCloudinaryArgs
>;

export type UseUploadImageToCloudinary = () => UseUploadImageToCloudinaryResult;
