export type FolderItemType = 'file' | 'folder';

export type FolderItem = {
  id: number;
  name: string;
  type: FolderItemType;
  createdAt: string;
  updatedAt: string;
};

export type FolderItemOptions = {
  label: string;
  onClick: (item?: FolderItem) => void;
};