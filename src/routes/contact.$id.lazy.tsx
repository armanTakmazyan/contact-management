import { type FC, useState, useRef } from 'react';
import { createLazyFileRoute, useParams } from '@tanstack/react-router';
import toast from 'react-hot-toast';
import { ConfirmDialog } from '@components/ConfirmDialog';
import { ContactForm } from '@components/ContactForm';
import {
  ContactNotFound,
  ContactInformation,
} from '@components/ContactInformation';
import { useContact } from '@hooks/useContact';
import { useDeleteContact } from '@hooks/useDeleteContact';

const ContactPage: FC = () => {
  const { id = '' } = useParams({ strict: false });
  const [isEditing, setIsEditing] = useState(false);
  const dialogRef = useRef<HTMLDialogElement>(null);

  const openDialog = () => dialogRef.current?.showModal();
  const closeDialog = () => dialogRef.current?.close();

  const { data: contact, isLoading, error } = useContact({ id });
  const { mutateAsync: deleteContact, isPending: isDeletingContact } =
    useDeleteContact({
      onSuccess: closeDialog,
    });

  const confirmDialog = () => {
    if (contact) {
      toast.promise(deleteContact({ id: contact.id }), {
        loading: 'Deleting contact...',
        success: <b>Contact was successfully deleted.</b>,
        error: <b>Unable to delete the contact.</b>,
      });
    }
  };

  if (isLoading) return <div>Loading...</div>;

  if (error) {
    return (
      <p className="text-red-500 text-base text-center mt-2">
        Failed to load contact.
      </p>
    );
  }

  if (!contact) {
    return <ContactNotFound />;
  }

  return (
    <div className="w-full h-full bg-gray-900 p-3">
      <div className="max-w-xl">
        {isEditing ? (
          <ContactForm
            initialValues={{ ...contact, image: undefined }}
            onSubmit={(updatedValues) => {
              console.log('Updated Contact:', updatedValues);
              setIsEditing(false);
            }}
            onCancel={() => setIsEditing(false)}
          />
        ) : (
          <ContactInformation
            image={contact.image}
            fullName={contact.fullName}
            username={contact.username}
            description={contact.description}
            onEdit={() => setIsEditing(true)}
            onDelete={openDialog}
          />
        )}
      </div>
      <ConfirmDialog
        title="Delete Contact"
        message="Are you sure you want to delete this contact? This action cannot be undone."
        confirmText="Delete"
        cancelText="Cancel"
        onCancel={closeDialog}
        onConfirm={confirmDialog}
        isProcessing={isDeletingContact}
        ref={dialogRef}
      />
    </div>
  );
};

export const Route = createLazyFileRoute('/contact/$id')({
  component: ContactPage,
});
