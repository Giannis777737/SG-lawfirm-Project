
-- Remove SELECT access from anon/authenticated at the GRANT level
REVOKE SELECT ON public.contact_submissions FROM anon;
REVOKE SELECT ON public.contact_submissions FROM authenticated;

-- Explicit restrictive SELECT policy: only service_role can read
CREATE POLICY "Only service role can read contact submissions"
ON public.contact_submissions
FOR SELECT
TO service_role
USING (true);

GRANT ALL ON public.contact_submissions TO service_role;
