import { Contact } from '@api/jsonServerService/types';
import type { ContactFormValues } from '@/components/ContactForm/types';
import { UseMutationOptions, UseMutationResult } from '@tanstack/react-query';

export type UseCreateContactWithImageResult = UseMutationResult<
  Contact,
  Error,
  ContactFormValues
>;

export type UseCreateContactWithImageArgs = UseMutationOptions<
  Contact,
  Error,
  ContactFormValues
>;

export type UseCreateContactWithImage = (
  args?: UseCreateContactWithImageArgs,
) => UseCreateContactWithImageResult;
