import { UseQueryResult } from '@tanstack/react-query';
import { Contacts } from '@api/jsonServerService/types';

export type UseContactsResult = UseQueryResult<Contacts, Error>;

export type UseContacts = () => UseContactsResult;
