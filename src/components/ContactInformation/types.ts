export interface ContactInformationProps {
  image: string;
  name: string;
  username: string;
  description: string;
  onEdit: () => void;
  onDelete: () => void;
}
