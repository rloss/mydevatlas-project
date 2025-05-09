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
};

type TechCategory = {
  description: string;
  color: string;
  nodes: TechNode[];
};

export default function Map() {
  const [data, setData] = useState<Record<string, TechCategory>>({});

  useEffect(() => {
    // JSON 직접 import했지만 useEffect 넣어 둠 (비동기 fetch 대응 가능)
    setData(techmap as Record<string, TechCategory>);
  }, []);

  return (
    <div className="space-y-12">
      {Object.entries(data).map(([category, { description, color, nodes }]) => (
        <section key={category}>
          <h2 className="text-2xl font-bold mb-1" style={{ color }}>{category}</h2>
          <p className="text-slate-400 text-sm mb-4">{description}</p>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {nodes.map((node) => (
              <a
                key={node.id}
                href={node.docs}
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-slate-800 hover:bg-slate-700 p-4 rounded-xl border border-slate-700 shadow-sm transition"
              >
                <h3 className="font-semibold text-white mb-1">{node.name}</h3>
                <p className="text-xs text-slate-400">{node.summary}</p>
              </a>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
