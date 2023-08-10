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
