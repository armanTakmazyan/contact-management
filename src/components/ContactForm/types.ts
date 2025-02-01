import { z } from 'zod';
import { contactSchema } from './constants';
import { FormApi } from '@tanstack/react-form';

export type ContactFormValues = z.infer<typeof contactSchema>;

export interface ContactFormOnSubmitArgs {
  value: ContactFormValues;
  formApi: FormApi<ContactFormValues>;
}

export type ContactFormOnSubmitResult = Promise<any>;

export type ContactFormOnSubmit = (
  args: ContactFormOnSubmitArgs,
) => ContactFormOnSubmitResult;

export interface ContactFormProps {
  initialValues?: Partial<ContactFormValues>;
  onSubmit: ContactFormOnSubmit;
  onCancel: () => void;
  formTitle?: string;
  submitText?: string;
  cancelText?: string;
}
