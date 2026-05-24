import { useCallback } from 'react';
import { 
  ReactFlow, 
  Background, 
  Controls, 
  useNodesState, 
  useEdgesState,
  addEdge,
  Position,
  Handle
} from '@xyflow/react';
import type { Connection, Edge } from '@xyflow/react';
import '@xyflow/react/dist/style.css';

const initialNodes = [
  {
    id: 'muse',
    type: 'museCore',
    position: { x: 450, y: 250 },
    data: { label: 'Muse Core' },
    draggable: false,
  },
  {
    id: 'github',
    type: 'connector',
    position: { x: 100, y: 100 },
    data: { name: 'GitHub', icon: 'bg-black', iconChar: 'GH' },
  },
  {
    id: 'supabase',
    type: 'connector',
    position: { x: 100, y: 400 },
    data: { name: 'Supabase', icon: 'bg-[#3ECF8E]', iconChar: 'S' },
  },
  {
    id: 'vercel',
    type: 'connector',
    position: { x: 800, y: 250 },
    data: { name: 'Vercel', icon: 'bg-black', iconChar: '▲' },
  },
  {
    id: 'slack',
    type: 'connector',
    position: { x: 800, y: 100 },
    data: { name: 'Slack', icon: 'bg-[#4A154B]', iconChar: 'Sl' },
  },
  {
    id: 'figma',
    type: 'connector',
    position: { x: 800, y: 400 },
    data: { name: 'Figma', icon: 'bg-[#F24E1E]', iconChar: 'F' },
  }
];

const initialEdges = [
  { id: 'e-github-muse', source: 'github', target: 'muse', animated: true, style: { stroke: '#7b4aff', strokeWidth: 2 } },
  { id: 'e-supabase-muse', source: 'supabase', target: 'muse', animated: true, style: { stroke: '#fb8500', strokeWidth: 2 } },
  { id: 'e-muse-vercel', source: 'muse', target: 'vercel', animated: true, style: { stroke: '#ff6b4a', strokeWidth: 2 } },
  { id: 'e-muse-slack', source: 'muse', target: 'slack', animated: true, style: { stroke: '#4A154B', strokeWidth: 2 } },
];

const ConnectorNode = ({ data }: any) => {
  return (
    <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-2 pr-4 flex items-center gap-3 transform hover:scale-105 transition-transform duration-300 min-w-[140px]">
      <Handle type="target" position={Position.Left} className="w-3 h-3 !bg-gray-300 !border-2 !border-white" />
      <div className={`w-8 h-8 rounded-[10px] ${data.icon} flex items-center justify-center text-white font-bold text-xs shadow-md shrink-0`}>
        {data.iconChar}
      </div>
      <div className="font-semibold text-[13px] text-neutral-800 tracking-tight">{data.name}</div>
      <Handle type="source" position={Position.Right} className="w-3 h-3 !bg-[#7b4aff] !border-2 !border-white" />
    </div>
  );
};

const MuseCoreNode = () => {
  return (
    <div className="relative w-24 h-24 bg-white rounded-2xl shadow-xl flex items-center justify-center border border-gray-100">
      <div className="absolute inset-[-100%] animate-[spin_4s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#ff6b4a_0%,#7b4aff_50%,#ff6b4a_100%)] opacity-20 blur-xl"></div>
      <Handle type="target" position={Position.Left} className="w-3 h-3 !bg-gray-400" />
      <Handle type="target" position={Position.Top} className="w-3 h-3 !bg-gray-400" />
      <div className="relative z-10 font-bold text-2xl text-transparent bg-clip-text bg-gradient-to-r from-[#ff6b4a] to-[#7b4aff]">
        II
      </div>
      <Handle type="source" position={Position.Right} className="w-3 h-3 !bg-[#fb8500]" />
      <Handle type="source" position={Position.Bottom} className="w-3 h-3 !bg-[#fb8500]" />
    </div>
  );
};

const nodeTypes = {
  connector: ConnectorNode,
  museCore: MuseCoreNode,
};

export default function InteractiveHero() {
  const [nodes, _, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState<Edge>(initialEdges);

  const onConnect = useCallback(
    (params: Connection | Edge) => setEdges((eds) => addEdge({ ...params, animated: true, type: 'default' }, eds) as Edge[]),
    [setEdges],
  );

  return (
    <div className="w-full h-full relative">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        nodeTypes={nodeTypes}
        fitView
        className="touch-none"
        zoomOnScroll={false}
        zoomOnPinch={false}
        zoomOnDoubleClick={false}
        nodeExtent={[[0, 0], [1000, 600]]}
      >
        <Background color="#ccc" gap={24} size={1} />
        <Controls showInteractive={false} className="!bg-white/80 !backdrop-blur-md !border-neutral-200" />
      </ReactFlow>
      
      {/* Overlay to inform users it's interactive */}
      <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-4 py-2 rounded-full border border-neutral-200 shadow-sm text-xs font-semibold text-neutral-600 flex items-center gap-2 pointer-events-none">
        <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
        Interactive: Drag nodes to connect them
      </div>
    </div>
  );
}
