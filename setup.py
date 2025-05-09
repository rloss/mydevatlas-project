import os
import subprocess

BASE_DIR = "mydevatlas"

DIR_STRUCTURE = [
    "public/tech-icons",
    "src/assets/map-backgrounds",
    "src/components",
    "src/pages",
    "src/data",
    "src/hooks",
    "src/lib",
    "src/styles"
]

FILES = {
    "src/App.tsx": "import React from 'react';\n\nexport default function App() {\n  return <div className=\"p-4\">MyDevAtlas</div>;\n}\n",
    "src/main.tsx": "import React from 'react';\nimport ReactDOM from 'react-dom/client';\nimport App from './App';\nimport './styles/index.css';\n\nReactDOM.createRoot(document.getElementById('root')!).render(\n  <React.StrictMode>\n    <App />\n  </React.StrictMode>\n);\n",
    "src/styles/index.css": "@tailwind base;\n@tailwind components;\n@tailwind utilities;\n",
    "src/pages/Home.tsx": "export default function Home() { return <div>Home</div>; }\n",
    "src/pages/Map.tsx": "export default function Map() { return <div>Main Map</div>; }\n",
    "src/pages/SubMap.tsx": "export default function SubMap() { return <div>Sub Map</div>; }\n",
    "src/components/Header.tsx": "// Header Component\n",
    "src/components/Sidebar.tsx": "// Sidebar Component\n",
    "src/components/NodeCard.tsx": "// Node Card Component\n",
    "src/components/TechMap.tsx": "// Tech Map Visualizer\n",
    "src/data/techmap.json": "{\n  \"Frontend\": {}\n}\n",
    "src/data/categories.json": "{\n  \"categories\": []\n}\n",
    "src/hooks/useTechMap.ts": "// Hook for loading map data\n",
    "src/lib/parseGraph.ts": "// Helper to parse tech relations\n",
    "tailwind.config.js": "module.exports = {\n  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],\n  theme: { extend: {} },\n  plugins: [],\n};\n",
    "vite.config.ts": "import { defineConfig } from 'vite';\nimport react from '@vitejs/plugin-react';\n\nexport default defineConfig({\n  plugins: [react()],\n});\n",
    "tsconfig.json": "{\n  \"compilerOptions\": {\n    \"target\": \"ESNext\",\n    \"module\": \"ESNext\",\n    \"jsx\": \"react-jsx\",\n    \"moduleResolution\": \"Node\",\n    \"strict\": true,\n    \"esModuleInterop\": true,\n    \"skipLibCheck\": true,\n    \"forceConsistentCasingInFileNames\": true\n  },\n  \"include\": [\"src\"]\n}\n",
    "index.html": "<!DOCTYPE html>\n<html lang=\"en\">\n  <head>\n    <meta charset=\"UTF-8\" />\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n    <title>MyDevAtlas</title>\n  </head>\n  <body>\n    <div id=\"root\"></div>\n    <script type=\"module\" src=\"/src/main.tsx\"></script>\n  </body>\n</html>\n",
    "README.md": "# MyDevAtlas\n",
    ".gitignore": "node_modules/\ndist/\n.env\n"
}

def create_dirs():
    for path in DIR_STRUCTURE:
        dir_path = os.path.join(BASE_DIR, path)
        os.makedirs(dir_path, exist_ok=True)
        print(f"[+] Created directory: {path}")

def create_files():
    for path, content in FILES.items():
        file_path = os.path.join(BASE_DIR, path)
        with open(file_path, "w", encoding="utf-8") as f:
            f.write(content)
        print(f"[+] Created file: {path}")

def init_npm():
    print("\n[⚙️  npm 환경 설정 중...]\n")
    subprocess.run("npm init vite@latest mydevatlas -- --template react-ts", shell=True)
    subprocess.run("npm install", cwd=BASE_DIR, shell=True)
    subprocess.run("npm install -D tailwindcss postcss autoprefixer", cwd=BASE_DIR, shell=True)
    subprocess.run("npx tailwindcss init -p", cwd=BASE_DIR, shell=True)
    print("[✅ npm & Tailwind 설치 완료]\n")

def main():
    print("[🚀 MyDevAtlas 프로젝트 생성 시작]")
    init_npm()
    create_dirs()
    create_files()
    print("\n[✅ 모든 초기 설정 완료!]")
    print("\n👉 다음 단계:")
    print(f"   cd {BASE_DIR}")
    print("   npm run dev")

if __name__ == "__main__":
    main()
