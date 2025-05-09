import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700 text-white flex items-center justify-center p-6">
      <div className="max-w-3xl text-center space-y-6">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
          MyDevAtlas
        </h1>
        <p className="text-lg md:text-xl text-slate-300">
          Explore. Understand. Connect. Own your stack.
        </p>
        <p className="text-sm md:text-base text-slate-400 max-w-xl mx-auto">
          기술 스택을 공간으로 이해하는 인터랙티브 지도.
        </p>
        <button
          onClick={() => navigate("/map")}
          className="mt-6 px-6 py-3 rounded-xl bg-sky-500 hover:bg-sky-600 transition text-white font-semibold shadow-md"
        >
          기술 지도 탐험하기 →
        </button>
      </div>
    </div>
  );
}

