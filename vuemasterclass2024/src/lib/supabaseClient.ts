import { createClient } from '@supabase/supabase-js'

// Create a single supabase client for interacting with your database
export const supabase = createClient('https://pfosyacbszmwxrkxaaaw.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBmb3N5YWNic3ptd3hya3hhYWF3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjc5NTcyNTgsImV4cCI6MjA0MzUzMzI1OH0.hk32iblNrg4NjWJvLDYH7Ht0RjKrxC3JaaJucN8PMgE')