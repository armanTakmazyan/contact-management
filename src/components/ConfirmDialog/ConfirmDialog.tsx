import { forwardRef } from 'react';
import { PrimaryButton } from '@components/Buttons/PrimaryButton';
import { DangerButton } from '@components/Buttons/DangerButton';
import { ConfirmDialogProps } from './types';

export const ConfirmDialog = forwardRef<HTMLDialogElement, ConfirmDialogProps>(
  (
    {
      title = 'Confirm Action',
      message = 'Are you sure?',
      confirmText = 'Yes',
      cancelText = 'No',
      isProcessing = false,
      onConfirm,
      onCancel,
    },
    dialogRef,
  ) => {
    return (
      <>
        <dialog
          ref={dialogRef}
          className="p-6 bg-gray-800 text-white rounded-lg shadow-lg border border-gray-700 backdrop:bg-black/50 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        >
          <div className="w-full flex flex-col justify-center items-center">
            <h2 className="text-lg font-semibold">{title}</h2>
            <p className="mt-2 text-gray-300">{message}</p>
            <div className="mt-4 flex justify-end gap-3">
              <PrimaryButton onClick={onConfirm} disabled={isProcessing}>
                {confirmText}
              </PrimaryButton>
              <DangerButton onClick={onCancel} disabled={isProcessing}>
                {cancelText}
              </DangerButton>
            </div>
          </div>
        </dialog>
      </>
    );
  },
);
