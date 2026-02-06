import { useState } from "react";
import type { TreeNodeData } from "./treeTypes";
import { mockTreeData } from "../../data/mockTreeData";
import { toggleNode, addChildNode } from "./treeUtils";
import TreeNode from "./TreeNode";

export default function TreeView() {
  const [tree, setTree] = useState<TreeNodeData[]>(mockTreeData);

  const handleToggle = (id: string) => {
    setTree((prev) => toggleNode(prev, id));
  };

  const handleAdd = (parentId: string) => {
    const name = prompt("Enter node name");
    if (!name) return;

    setTree((prev) =>
      addChildNode(prev, parentId, {
        id: Date.now().toString(),
        label: name,
      })
    );
  };

  return (
    <div>
      {tree.map((node) => (
        <TreeNode
          key={node.id}
          node={node}
          onToggle={handleToggle}
          onAdd={handleAdd}
        />
      ))}
    </div>
  );
}
