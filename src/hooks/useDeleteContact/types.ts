import { UseMutationOptions, UseMutationResult } from '@tanstack/react-query';
import { DeleteContactArgs } from '@api/jsonServerService/types';

export type UseDeleteContactResult = UseMutationResult<
  void,
  Error,
  DeleteContactArgs
>;

export type UseDeleteContactArgs = UseMutationOptions<
  void,
  Error,
  DeleteContactArgs
>;

export type UseDeleteContact = (
  args?: UseDeleteContactArgs,
) => UseDeleteContactResult;
