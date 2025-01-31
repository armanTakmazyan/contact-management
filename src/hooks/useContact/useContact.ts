import { useQuery } from '@tanstack/react-query';
import { fetchContactById } from '@api/jsonServerService';
import { Contact } from '@api/jsonServerService/types';
import { UseContact } from './types';

export const useContact: UseContact = ({ id }) => {
  const result = useQuery<Contact>({
    queryKey: ['contact', id],
    queryFn: () => fetchContactById({ id }),
    enabled: !!id,
  });

  return result;
};
