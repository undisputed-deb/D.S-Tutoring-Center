// src/lib/supabase.ts
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables. Check your .env file.')
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

export type ContactSubmission = {
  id?: string
  name: string
  email: string
  phone?: string
  grade: string
  school?: string
  subject: string
  message?: string
  created_at?: string
}

export type Review = {
  id?: string
  name: string
  email: string
  grade: string
  subject: string
  school?: string
  rating: number
  comment: string
  status: 'pending' | 'approved' | 'rejected'
  created_at?: string
}