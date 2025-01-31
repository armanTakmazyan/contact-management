import type { FC } from 'react';
import { useForm } from '@tanstack/react-form';
import { PrimaryButton } from '@components/Buttons/PrimaryButton';
import { DangerButton } from '@components/Buttons/DangerButton';
import { FormInput } from './FormInput';
import { contactSchema } from './constants';
import type { ContactFormProps } from './types';

export const ContactForm: FC<ContactFormProps> = ({
  initialValues = {},
  onSubmit,
  onCancel,
  formTitle = 'Edit Contact',
  submitText = 'Save',
}) => {
  const form = useForm({
    defaultValues: {
      fullName: initialValues.fullName ?? '',
      username: initialValues.username ?? '',
      description: initialValues.description ?? '',
      image: initialValues.image,
    },
    onSubmit: async ({ value }) => {
      onSubmit(value);
    },
    validators: {
      onSubmit: contactSchema,
    },
  });

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        e.stopPropagation();
        form.handleSubmit();
      }}
      className="bg-gray-800 p-6 rounded-lg shadow-md w-full max-w-lg"
    >
      <p className="text-xl font-semibold text-white mb-4">{formTitle}</p>
      <form.Field name="fullName">
        {(field) => (
          <FormInput
            field={field}
            label="Full Name"
            placeholder="Enter full name"
            className="mt-3"
          />
        )}
      </form.Field>
      <form.Field name="username">
        {(field) => (
          <FormInput
            field={field}
            label="Username"
            placeholder="Enter username"
            className="mt-3"
          />
        )}
      </form.Field>
      <form.Field name="description">
        {(field) => (
          <FormInput
            field={field}
            label="Description"
            placeholder="Enter description"
            type="textarea"
            className="mt-3"
          />
        )}
      </form.Field>
      <form.Field name="image">
        {(field) => (
          <FormInput field={field} label="Image" type="file" className="mt-3" />
        )}
      </form.Field>
      <div className="mt-4 flex space-x-3">
        <form.Subscribe
          selector={(state) => [state.canSubmit, state.isSubmitting]}
        >
          {([canSubmit, isSubmitting]) => (
            <PrimaryButton type="submit" disabled={!canSubmit}>
              {isSubmitting ? 'Processing...' : submitText}
            </PrimaryButton>
          )}
        </form.Subscribe>
        <DangerButton type="button" onClick={onCancel}>
          Cancel
        </DangerButton>
      </div>
    </form>
  );
};
