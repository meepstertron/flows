
import { useShallow } from 'zustand/react/shallow';
import { Background, ReactFlow, Controls } from '@xyflow/react';

import '@xyflow/react/dist/style.css';

import useStore from '../stores/appStore';


const selector = (state:any) => ({
  nodes: state.nodes,
  edges: state.edges,
  onNodesChange: state.onNodesChange,
  onEdgesChange: state.onEdgesChange,
  onConnect: state.onConnect,
  onReconnect: state.onReconnect,
  onReconnectStart: state.onReconnectStart,
  onReconnectEnd: state.onReconnectEnd,
});




function Flow() {
  const { nodes, edges, onNodesChange, onEdgesChange, onConnect, onReconnect, onReconnectStart, onReconnectEnd } = useStore(
    useShallow(selector),
  );

  return (
    <div style={{ height: '100%', width: '100%', overflow: 'hidden' }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        nodeTypes={{}}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        onReconnect={onReconnect}
        onReconnectStart={onReconnectStart}
        onReconnectEnd={onReconnectEnd}
        snapToGrid
        fitView
        proOptions={{ hideAttribution: true }}
        attributionPosition="top-right"
      >
        <Controls />
        <Background />
      </ReactFlow>
    </div>
  );
}

export default Flow;
