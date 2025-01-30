import { z } from 'zod';
import { contactSchema } from './constants';

export type ContactFormValues = z.infer<typeof contactSchema>;

export interface ContactFormProps {
  initialValues?: Partial<ContactFormValues>;
  onSubmit: (values: ContactFormValues) => void;
  onCancel: () => void;
  formTitle?: string;
  submitText?: string;
}
