import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deleteContact } from '@api/jsonServerService';
import { UseDeleteContact } from './types';

export const useDeleteContact: UseDeleteContact = () => {
  const queryClient = useQueryClient();

  const result = useMutation({
    mutationFn: deleteContact,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['contacts'] });
    },
  });

  return result;
};
