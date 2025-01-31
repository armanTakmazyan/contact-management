import type { ContactFormValues } from '@/components/ContactForm/types';
import { UseMutationResult } from '@tanstack/react-query';

export type UseCreateContactWithImageResult = UseMutationResult<
  void,
  Error,
  ContactFormValues
>;

export type UseCreateContactWithImage = () => UseCreateContactWithImageResult;
