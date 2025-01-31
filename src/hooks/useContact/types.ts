import { UseQueryResult } from '@tanstack/react-query';
import { Contact } from '@api/jsonServerService/types';

export interface UseContactArgs {
  id: number;
}

export type UseContactResult = UseQueryResult<Contact, Error>;

export type UseContact = (args: UseContactArgs) => UseContactResult;
