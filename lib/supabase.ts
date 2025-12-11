// lib/supabase.ts
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || ''
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ''



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