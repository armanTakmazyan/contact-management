export interface ContactInformationProps {
  image: string;
  fullName: string;
  username: string;
  description: string;
  onEdit: () => void;
  onDelete: () => void;
}
