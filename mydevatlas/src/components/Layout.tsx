// src/components/Layout.tsx
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";

export default function Layout() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-900 text-white">
      {/* 상단 고정 헤더 */}
      <Header />

      {/* 본문 영역: 사이드바 + 페이지 콘텐츠 */}
      <div className="flex flex-1">
        {/* 좌측 카테고리 메뉴 */}
        <Sidebar />

        {/* 우측 콘텐츠 영역 (각 페이지 출력) */}
        <main className="flex-1 p-6 overflow-y-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

