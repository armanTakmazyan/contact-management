import type { FieldApi } from '@tanstack/react-form';

export interface FormInputProps {
  field: FieldApi<any, any, any, any>;
  label: string;
  placeholder?: string;
  type?: 'text' | 'textarea' | 'file';
  className?: string;
}

export interface FileInputProps {
  field: any;
  acceptedTypes?: string[];
}
