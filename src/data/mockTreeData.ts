import type { TreeNodeData } from "../components/TreeView/treeTypes";


export const mockTreeData: TreeNodeData[] = [
  {
    id: "1",
    label: "Applications",
    isExpanded: true,
    children: [
      { id: "1-1", label: "VS Code" },
      { id: "1-2", label: "Chrome" },
    ],
  },
  {
    id: "2",
    label: "Documents",
    children: [{ id: "2-1", label: "Resume.pdf" }],
  },
];
