import { useEffect, useState } from "react";
import techmap from "../data/techmap.json";

type TechNode = {
  id: string;
  name: string;
  type: string;
  tier: string;
  summary: string;
  docs: string;
  related: string[];
  x: number;
  y: number;
};

type TechCategory = {
  description: string;
  color: string;
  nodes: TechNode[];
};

export default function Map() {
  const [data, setData] = useState<Record<string, TechCategory>>({});

  useEffect(() => {
    setData(techmap as Record<string, TechCategory>);
  }, []);

  const allNodes = Object.values(data).flatMap((cat) => cat.nodes);
  const getNodeById = (id: string) => allNodes.find((n) => n.id === id);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold text-white mb-4">기술 지도 (Tech Atlas)</h1>
      <svg
        viewBox="0 0 1200 800"
        className="w-full h-[80vh] bg-slate-800 rounded-xl shadow border border-slate-700"
      >
        {/* 연결선 */}
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

