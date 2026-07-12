ALTER TABLE public.note
    ADD COLUMN type TEXT;

UPDATE public.note
SET type = 'MARKDOWN'
WHERE type IS NULL;

ALTER TABLE public.note
    ALTER COLUMN type SET NOT NULL;
