// src/components/Sidebar.tsx
import { useNavigate } from "react-router-dom";

export default function Sidebar() {
  const navigate = useNavigate();

  const categories = [
    { name: "Frontend", path: "/map/frontend" },
    { name: "Backend", path: "/map/backend" },
    { name: "Database", path: "/map/database" },
    { name: "DevOps", path: "/map/devops" }
  ];

  return (
    <aside className="w-56 bg-slate-800/90 backdrop-blur border-r border-slate-700 shadow-inner sticky top-16 h-[calc(100vh-4rem)] p-4">
      <h2 className="text-xs uppercase tracking-wider text-slate-400 font-semibold mb-4">
        기술 카테고리
      </h2>
      <ul className="space-y-3">
        {categories.map(({ name, path }) => (
          <li
            key={name}
            onClick={() => navigate(path)}
            className="cursor-pointer text-sm text-slate-200 hover:text-sky-400 transition"
          >
            {name}
          </li>
        ))}
      </ul>
    </aside>
  );
}
