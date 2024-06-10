import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://your-project-url.supabase.co';
const supabaseKey = 'Dermalyze428.';
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
