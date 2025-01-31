import { UseMutationResult } from '@tanstack/react-query';
import { Contact, UpdateContactArgs } from '@api/jsonServerService/types';

export type UseUpdateContactResult = UseMutationResult<
  Contact,
  Error,
  UpdateContactArgs
>;

export type UseUpdateContact = () => UseUpdateContactResult;
