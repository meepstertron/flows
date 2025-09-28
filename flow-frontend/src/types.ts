import {
  type Edge,
  type Node,
  type OnNodesChange,
  type OnEdgesChange,
  type OnConnect,
  type Connection,
} from '@xyflow/react';

export type HandleType = 'string' | 'number' | 'boolean' | 'object' | 'trigger';

export interface HandleData {
  id: string;
  type: HandleType;
  label: string;
}

export interface CustomNodeData extends Record<string, unknown> {
  label: string;
  inputs?: HandleData[];
  outputs?: HandleData[];
}

export type AppNode = Node<CustomNodeData>;

export type AppState = {
  nodes: AppNode[];
  edges: Edge[];
  onNodesChange: OnNodesChange<AppNode>;
  onEdgesChange: OnEdgesChange;
  onConnect: OnConnect;
  setNodes: (nodes: AppNode[]) => void;
  setEdges: (edges: Edge[]) => void;
  onReconnect: (oldEdge: Edge, newConnection: Connection) => void;
  onReconnectStart: () => void;
  onReconnectEnd: (event: MouseEvent | TouchEvent, edge: Edge) => void;
  reconnectSuccessful: boolean;
  setReconnectSuccessful: (value: boolean) => void;
};
