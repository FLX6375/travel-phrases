-- Travel Phrases: хмарне збереження прогресу
-- Supabase → SQL Editor → New query → встав цей файл → Run

create table if not exists public.progress (
  sync_id text primary key,
  payload jsonb not null default '{}'::jsonb,
  updated_at timestamptz not null default now()
);

alter table public.progress enable row level security;

drop policy if exists "sync read" on public.progress;
drop policy if exists "sync insert" on public.progress;
drop policy if exists "sync update" on public.progress;

-- Anon key захищений sync_id (SHA-256 від твого коду синхронізації)
create policy "sync read" on public.progress for select to anon using (true);
create policy "sync insert" on public.progress for insert to anon with check (true);
create policy "sync update" on public.progress for update to anon using (true);

create index if not exists progress_updated_at_idx on public.progress (updated_at desc);
