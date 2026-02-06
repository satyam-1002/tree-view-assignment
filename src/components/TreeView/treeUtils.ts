import type { TreeNodeData } from "./treeTypes";


export function toggleNode(
  tree: TreeNodeData[],
  nodeId: string
): TreeNodeData[] {
  return tree.map((node) => {
    if (node.id === nodeId) {
      return { ...node, isExpanded: !node.isExpanded };
    }

    if (node.children) {
      return {
        ...node,
        children: toggleNode(node.children, nodeId),
      };
    }

    return node;
  });
}

export function addChildNode(
  tree: TreeNodeData[],
  parentId: string,
  newNode: TreeNodeData
): TreeNodeData[] {
  return tree.map((node) => {
    if (node.id === parentId) {
      return {
        ...node,
        isExpanded: true,
        children: [...(node.children || []), newNode],
      };
    }

    if (node.children) {
      return {
        ...node,
        children: addChildNode(node.children, parentId, newNode),
      };
    }

    return node;
  });
}
