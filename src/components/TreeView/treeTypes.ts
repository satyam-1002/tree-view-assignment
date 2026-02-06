export type TreeNodeData = {
  id: string;
  label: string;
  children?: TreeNodeData[];
  isExpanded?: boolean;
};
