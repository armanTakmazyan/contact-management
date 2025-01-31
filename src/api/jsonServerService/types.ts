export interface Contact {
  id: string;
  fullName: string;
  username: string;
  description: string;
  image: string;
}

export type Contacts = Contact[];

export interface FetchContactsArgs {
  searchQuery?: string;
}

export type FetchContactsResult = Promise<Contact[]>;

export type FetchContacts = (args?: FetchContactsArgs) => FetchContactsResult;

export interface FetchContactByIdArgs {
  id: string;
}

export type FetchContactByIdResult = Promise<Contact>;

export type FetchContactById = (
  args: FetchContactByIdArgs,
) => FetchContactByIdResult;

export interface CreateContactArgs {
  newContact: Omit<Contact, 'id'>;
}

export type CreateContactResult = (args: CreateContactArgs) => Promise<Contact>;

export interface UpdateContactArgs {
  id: string;
  updatedData: Partial<Contact>;
}

export type UpdateContactResult = Promise<Contact>;

export type UpdateContact = (args: UpdateContactArgs) => UpdateContactResult;

export interface DeleteContactArgs {
  id: string;
}

export type DeleteContactResult = Promise<void>;

export type DeleteContact = (args: DeleteContactArgs) => DeleteContactResult;
