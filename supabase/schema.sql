-- 응응글리쉬 학습 기록 저장소
-- Supabase 대시보드 → SQL Editor → New query 에 붙여넣고 Run
--
-- 보안 설계
-- * key 는 "닉네임#코드" 의 SHA-256 해시 (원래 닉네임·코드는 저장하지 않음)
-- * 테이블은 직접 읽기/쓰기 불가 (RLS 켜고 정책 없음) → 목록 조회 불가
-- * get_progress / save_progress 함수로만 "내 key 의 기록" 을 읽고 쓸 수 있음

create table if not exists public.progress (
  key text primary key check (key ~ '^[0-9a-f]{64}$'),
  data jsonb not null,
  updated_at timestamptz not null default now()
);

alter table public.progress enable row level security;
revoke all on table public.progress from anon, authenticated;

create or replace function public.get_progress(p_key text)
returns jsonb
language sql
stable
security definer
set search_path = public
as $$
  select data from public.progress where key = p_key;
$$;

create or replace function public.save_progress(p_key text, p_data jsonb)
returns void
language plpgsql
security definer
set search_path = public
as $$
begin
  if p_key !~ '^[0-9a-f]{64}$' then
    raise exception 'invalid key';
  end if;
  if pg_column_size(p_data) > 500000 then
    raise exception 'progress too large';
  end if;
  insert into public.progress (key, data, updated_at)
  values (p_key, p_data, now())
  on conflict (key) do update set data = excluded.data, updated_at = now();
end;
$$;

revoke all on function public.get_progress(text) from public;
revoke all on function public.save_progress(text, jsonb) from public;
grant execute on function public.get_progress(text) to anon, authenticated;
grant execute on function public.save_progress(text, jsonb) to anon, authenticated;
