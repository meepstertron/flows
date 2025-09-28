import { Handle, Position } from '@xyflow/react';

export type HandleType = 'string' | 'number' | 'boolean' | 'object' | 'trigger';

interface CustomHandleProps {
  dataType: HandleType;
  label: string;
  position: Position;
  handleType: 'source' | 'target';
  id: string;
}

const typeStyles: Record<HandleType, React.CSSProperties> = {
  string: { background: '#3b82f6', borderRadius: '50%', width: 6, height: 6 }, // Blue circle
  number: { background: '#10b981', borderRadius: '0', width: 6, height: 6 }, // Green square
  boolean: { background: '#f59e0b', borderRadius: '50%', width: 6, height: 6 }, // Orange circle
  object: { background: '#8b5cf6', borderRadius: '0', width: 6, height: 6 }, // Purple square
  trigger: { background: '#4f46e5', borderRadius: '50%', width: 10, height: 10 }, // Indigo circle for triggers
};

const labelPositions: Record<Position, React.CSSProperties> = {
  [Position.Left]: { right: 16, top: '50%', transform: 'translateY(-50%)' },
  [Position.Right]: { left: 16, top: '50%', transform: 'translateY(-50%)' },
  [Position.Top]: { bottom: 16, left: '50%', transform: 'translateX(-50%)' },
  [Position.Bottom]: { top: 16, left: '50%', transform: 'translateX(-50%)' },
};

function CustomHandle({ dataType, label, position, handleType, id }: CustomHandleProps) {
  return (
    <div style={{ position: 'relative', display: 'inline-block' }}>
      <Handle
        type={handleType}
        position={position}
        id={id}
        style={typeStyles[dataType]}
      />
      <span
        style={{
          position: 'absolute',
          fontSize: '7px',
          color: '#666',
          whiteSpace: 'nowrap',
          pointerEvents: 'none',
          ...labelPositions[position],
        }}
      >
        {label}
      </span>
    </div>
  );
}

export default CustomHandle;