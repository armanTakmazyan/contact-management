import { useQuery } from '@tanstack/react-query';
import { fetchContacts } from '@api/jsonServerService';
import { Contacts } from '@api/jsonServerService/types';
import { UseContacts } from './types';

export const useContacts: UseContacts = () => {
  const result = useQuery<Contacts>({
    queryKey: ['contacts'],
    queryFn: fetchContacts,
  });

  return result;
};
