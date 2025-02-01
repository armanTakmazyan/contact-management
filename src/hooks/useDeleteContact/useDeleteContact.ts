import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deleteContact } from '@api/jsonServerService';
import { UseDeleteContact } from './types';

export const useDeleteContact: UseDeleteContact = (options = {}) => {
  const queryClient = useQueryClient();

  const result = useMutation({
    mutationFn: deleteContact,
    ...options,
    onSuccess: (...onSuccessArgs) => {
      queryClient.invalidateQueries({ queryKey: ['contacts'] });
      options.onSuccess?.(...onSuccessArgs);
    },
  });

  return result;
};
