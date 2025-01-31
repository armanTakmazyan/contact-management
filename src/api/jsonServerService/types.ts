export interface Contact {
  id: string;
  fullName: string;
  username: string;
  description: string;
  image: string;
}

export type Contacts = Contact[];

export type FetchContactsResult = Promise<Contact[]>;

export type FetchContacts = () => FetchContactsResult;

export interface FetchContactByIdArgs {
  id: number;
}

export type FetchContactByIdResult = Promise<Contact>;

export type FetchContactById = (
  args: FetchContactByIdArgs,
) => FetchContactByIdResult;

export interface UpdateContactArgs {
  id: number;
  updatedData: Partial<Contact>;
}

export type UpdateContactResult = Promise<Contact>;

export type UpdateContact = (args: UpdateContactArgs) => UpdateContactResult;

export interface DeleteContactArgs {
  id: number;
}

export type DeleteContactResult = Promise<void>;

export type DeleteContact = (args: DeleteContactArgs) => DeleteContactResult;
