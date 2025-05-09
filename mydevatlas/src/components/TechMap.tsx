// src/components/TechMap.tsx
import techmap from "../data/techmap.json";

export default function TechMap() {
  const data = techmap as Record<
    string,
    {
      description: string;
      color: string;
      nodes: {
        id: string;
        name: string;
        x: number;
        y: number;
        related: string[];
      }[];
    }
  >;

  const allNodes = Object.values(data).flatMap((cat) => cat.nodes);

  const getNodeById = (id: string) => allNodes.find((n) => n.id === id);

  return (
    <svg viewBox="0 0 1200 800" className="w-full h-[80vh] bg-slate-800 rounded-lg shadow-md">
      {/* 연결선 먼저 렌더링 */}
      {allNodes.map((node) =>
        node.related.map((targetId) => {
          const target = getNodeById(targetId);
          if (!target) return null;
          return (
            <line
              key={`${node.id}-${targetId}`}
              x1={node.x}
              y1={node.y}
              x2={target.x}
              y2={target.y}
              stroke="#64748b"
              strokeWidth={1}
              opacity={0.6}
            />
          );
        })
      )}

      {/* 노드 렌더링 */}
      {allNodes.map((node) => (
        <g key={node.id}>
          <circle cx={node.x} cy={node.y} r={20} fill="#0ea5e9" />
          <text
            x={node.x}
            y={node.y + 35}
            textAnchor="middle"
            fontSize={12}
            fill="white"
          >
            {node.name}
          </text>
        </g>
      ))}
    </svg>
  );
}
