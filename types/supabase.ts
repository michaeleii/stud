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
          color: string
          created_at: string | null
          description: string
          id: number
          name: string
          schedule: Json | null
          user_id: string
        }
        Insert: {
          color: string
          created_at?: string | null
          description: string
          id?: number
          name: string
          schedule?: Json | null
          user_id: string
        }
        Update: {
          color?: string
          created_at?: string | null
          description?: string
          id?: number
          name?: string
          schedule?: Json | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "course_user_id_fkey"
            columns: ["user_id"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      task: {
        Row: {
          course_id: number
          created_at: string
          id: number
          is_completed: boolean
          name: string
        }
        Insert: {
          course_id: number
          created_at?: string
          id?: number
          is_completed?: boolean
          name: string
        }
        Update: {
          course_id?: number
          created_at?: string
          id?: number
          is_completed?: boolean
          name?: string
        }
        Relationships: [
          {
            foreignKeyName: "task_course_id_fkey"
            columns: ["course_id"]
            referencedRelation: "course"
            referencedColumns: ["id"]
          }
        ]
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
