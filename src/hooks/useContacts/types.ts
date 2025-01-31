import { UseQueryResult } from '@tanstack/react-query';
import { Contacts } from '@api/jsonServerService/types';

export interface UseContactsArgs {
  searchQuery?: string;
}

export type UseContactsResult = UseQueryResult<Contacts, Error>;

export type UseContacts = (args?: UseContactsArgs) => UseContactsResult;
