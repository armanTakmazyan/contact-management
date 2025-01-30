export interface Contact {
  id: string;
  name: string;
}

export interface ContactListProps {
  contacts: Contact[];
  className?: string;
}
