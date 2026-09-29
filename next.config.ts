import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // C:\Users\ESU 에 있는 다른 package-lock.json 을 프로젝트 루트로 착각하지 않도록 고정
  outputFileTracingRoot: process.cwd(),
};

export default nextConfig;
