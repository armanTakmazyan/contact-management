import { useQuery } from '@tanstack/react-query';
import { fetchContacts } from '@api/jsonServerService';
import { Contacts } from '@api/jsonServerService/types';
import { UseContacts } from './types';

export const useContacts: UseContacts = ({ searchQuery = '' } = {}) => {
  const result = useQuery<Contacts>({
    queryKey: ['contacts', searchQuery],
    queryFn: () => fetchContacts({ searchQuery }),
  });

  return result;
};
