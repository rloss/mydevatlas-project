import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white px-8 py-20 flex flex-col items-center">
      <h1 className="text-5xl font-bold mb-4 text-sky-400">MyDevAtlas</h1>
      <p className="text-lg text-slate-300 max-w-xl text-center mb-10">
        개발 핵심 개념을 기술 지도를 통해 한눈에 파악하세요.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl w-full">
        {[
          { title: "Frontend Map", path: "/map/frontend" },
          { title: "Backend Map", path: "/map/backend" },
          { title: "Database Map", path: "/map/database" },
          { title: "DevOps Map", path: "/map/devops" }
        ].map((item) => (
          <div
            key={item.title}
            onClick={() => navigate(item.path)}
            className="cursor-pointer p-6 bg-slate-800 hover:bg-slate-700 transition rounded-xl shadow-lg border border-slate-700"
          >
            <h2 className="text-xl font-semibold mb-2 text-white">
              {item.title}
            </h2>
            <p className="text-slate-400 text-sm">
              {item.title.split(" ")[0]} 기술의 흐름과 핵심 개념을 한눈에
            </p>
          </div>
        ))}
      </div>

      <button
        onClick={() => navigate("/map")}
        className="mt-12 px-6 py-3 rounded-xl bg-sky-500 hover:bg-sky-600 transition text-white font-semibold shadow-md"
      >
        전체 기술 지도 보기 →
      </button>
    </div>
  );
}


