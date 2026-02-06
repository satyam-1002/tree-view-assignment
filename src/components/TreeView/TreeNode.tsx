import type { TreeNodeData } from "./treeTypes";


interface TreeNodeProps {
  node: TreeNodeData;
  onToggle: (id: string) => void;
  onAdd: (parentId: string) => void;
}

export default function TreeNode({ node, onToggle, onAdd }: TreeNodeProps) {
  return (
    <div style={{ marginLeft: "20px" }}>
      <div>
        {node.children && (
          <button onClick={() => onToggle(node.id)}>
            {node.isExpanded ? "-" : "+"}
          </button>
        )}
        {node.label}
        <button onClick={() => onAdd(node.id)}>+</button>
      </div>

      {node.isExpanded &&
        node.children?.map((child) => (
          <TreeNode
            key={child.id}
            node={child}
            onToggle={onToggle}
            onAdd={onAdd}
          />
        ))}
    </div>
  );
}
