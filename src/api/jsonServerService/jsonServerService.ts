import { jsonServerClient } from '@api/jsonServerClient';
import { AxiosResponse } from 'axios';
import { JSON_SERVER_API_ROUTES } from './constants';
import {
  Contact,
  FetchContacts,
  FetchContactById,
  CreateContactResult,
  UpdateContact,
  DeleteContact,
} from './types';

export const fetchContacts: FetchContacts = async ({
  searchQuery = '',
} = {}): Promise<Contact[]> => {
  const response: AxiosResponse<Contact[]> = await jsonServerClient.get(
    JSON_SERVER_API_ROUTES.CONTACTS,
    {
      params: searchQuery ? { fullName_like: searchQuery } : {},
    },
  );
  return response.data;
};

export const fetchContactById: FetchContactById = async ({ id }) => {
  const response: AxiosResponse<Contact> = await jsonServerClient.get(
    `${JSON_SERVER_API_ROUTES.CONTACTS}/${id}`,
  );
  return response.data;
};

export const createContact: CreateContactResult = async ({ newContact }) => {
  const response: AxiosResponse<Contact> = await jsonServerClient.post(
    JSON_SERVER_API_ROUTES.CONTACTS,
    newContact,
  );
  return response.data;
};

export const updateContact: UpdateContact = async ({ id, updatedData }) => {
  const response: AxiosResponse<Contact> = await jsonServerClient.patch(
    `${JSON_SERVER_API_ROUTES.CONTACTS}/${id}`,
    updatedData,
  );
  return response.data;
};

export const deleteContact: DeleteContact = async ({ id }) => {
  await jsonServerClient.delete(`${JSON_SERVER_API_ROUTES.CONTACTS}/${id}`);
};
