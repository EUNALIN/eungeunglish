/**
 * Supabase 에 학습 기록 저장 (기기 간 동기화).
 * 테이블은 직접 못 읽고, supabase/schema.sql 의 RPC 함수 두 개만 쓴다.
 * 라이브러리 없이 REST(fetch)로 호출한다.
 */

const URL = process.env.NEXT_PUBLIC_SUPABASE_URL;
const KEY = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY;

/** 환경 변수가 없으면(예: 키 등록 전) 브라우저 저장만 쓴다 */
export const cloudEnabled = Boolean(URL && KEY);

/** "닉네임#코드" → SHA-256 hex. 서버에는 이 값만 저장된다 */
export async function userKey(nickname: string, code: string): Promise<string> {
  const bytes = new TextEncoder().encode(`eungeunglish:${nickname.trim()}#${code}`);
  const hash = await crypto.subtle.digest("SHA-256", bytes);
  return [...new Uint8Array(hash)].map((b) => b.toString(16).padStart(2, "0")).join("");
}

async function rpc<T>(fn: string, body: unknown): Promise<T> {
  const res = await fetch(`${URL}/rest/v1/rpc/${fn}`, {
    method: "POST",
    headers: { apikey: KEY!, "Content-Type": "application/json" },
    body: JSON.stringify(body),
    keepalive: true,
  });
  if (!res.ok) throw new Error(`${fn} 실패: ${res.status}`);
  const text = await res.text();
  return (text ? JSON.parse(text) : null) as T;
}

export function fetchProgress<T>(key: string): Promise<T | null> {
  return rpc<T | null>("get_progress", { p_key: key });
}

export function pushProgress(key: string, data: unknown): Promise<void> {
  return rpc<void>("save_progress", { p_key: key, p_data: data });
}
