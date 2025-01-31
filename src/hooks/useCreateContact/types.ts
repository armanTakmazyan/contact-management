import type { UseMutationResult } from '@tanstack/react-query';
import { Contact, CreateContactArgs } from '@api/jsonServerService/types';

export type UseCreateContactResult = UseMutationResult<
  Contact,
  Error,
  CreateContactArgs,
  unknown
>;

export type UseCreateContact = () => UseCreateContactResult;
