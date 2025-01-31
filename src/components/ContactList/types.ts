import { Contacts } from '@api/jsonServerService/types';

export interface ContactListSkeletonProps {
  className?: string;
}

export interface ContactListProps {
  contacts: Contacts;
  className?: string;
}
