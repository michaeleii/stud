export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      course: {
        Row: {
          created_at: string | null
          description: string
          id: number
          name: string
        }
        Insert: {
          created_at?: string | null
          description: string
          id?: number
          name: string
        }
        Update: {
          created_at?: string | null
          description?: string
          id?: number
          name?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
