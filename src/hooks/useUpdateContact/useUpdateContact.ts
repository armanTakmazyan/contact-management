import { useMutation, useQueryClient } from '@tanstack/react-query';
import { updateContact } from '@api/jsonServerService';
import { UseUpdateContact } from './types';

export const useUpdateContact: UseUpdateContact = () => {
  const queryClient = useQueryClient();

  const result = useMutation({
    mutationFn: updateContact,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['contacts'] });
    },
  });

  return result;
};
