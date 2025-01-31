import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createContact } from '@api/jsonServerService';
import { UseCreateContact } from './types';

export const useCreateContact: UseCreateContact = () => {
  const queryClient = useQueryClient();

  const result = useMutation({
    mutationFn: createContact,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['contacts'] });
    },
  });

  return result;
};
