import { create } from 'zustand';
import { addEdge, applyNodeChanges, applyEdgeChanges, reconnectEdge } from '@xyflow/react';

import { initialNodes } from './nodes';
import { initialEdges } from './edges';
import { type AppState } from '@/types';
import { toast } from 'sonner';

// this is our useStore hook that we can use in our components to get parts of the store and call actions
const useStore = create<AppState>((set, get) => ({
  nodes: initialNodes,
  edges: initialEdges,
  reconnectSuccessful: true,
  onNodesChange: (changes) => {
    set({
      nodes: applyNodeChanges(changes, get().nodes),
    });
  },
  onEdgesChange: (changes) => {
    set({
      edges: applyEdgeChanges(changes, get().edges),
    });
  },
  onConnect: (connection) => {

    if (connection.source === connection.target) {
        toast.error("ERROR: Unable to connect node to itself");
      return;
    }

    set({
      edges: addEdge(connection, get().edges),
    });
  },
  setNodes: (nodes) => {
    set({ nodes });
  },
  setEdges: (edges) => {
    set({ edges });
  },
  onReconnectStart: () => {
    set({ reconnectSuccessful: false });
  },
  onReconnect: (oldEdge, newConnection) => {
        if (newConnection.source === newConnection.target) {
            toast.error("ERROR: Unable to connect node to itself");
      return;
    }

    set({ reconnectSuccessful: true });
    set({
      edges: reconnectEdge(oldEdge, newConnection, get().edges),
    });
  },
  onReconnectEnd: (_, edge) => {
    if (!get().reconnectSuccessful) {
      set({
        edges: get().edges.filter((e) => e.id !== edge.id),
      });
    }
    set({ reconnectSuccessful: true });
  },
  setReconnectSuccessful: (value) => {
    set({ reconnectSuccessful: value });
  },
}));

export default useStore;
