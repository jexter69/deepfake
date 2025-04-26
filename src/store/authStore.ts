import { create } from 'zustand';
import { supabase } from '../lib/supabase';
import { User } from '@supabase/supabase-js';

interface AuthState {
  user: User | null;
  session: any | null;
  isLoading: boolean;
  error: string | null;
  signUp: (email: string, password: string) => Promise<void>;
  signIn: (email: string, password: string) => Promise<void>;
  signOut: () => Promise<void>;
  clearError: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  session: null,
  isLoading: true,
  error: null,
  
  signUp: async (email: string, password: string) => {
    try {
      set({ isLoading: true, error: null });
      const { data, error } = await supabase.auth.signUp({ 
        email, 
        password,
        options: {
          emailRedirectTo: `${window.location.origin}/auth/callback`,
        },
      });
      
      if (error) throw error;
      
      set({ 
        user: data.user,
        session: data.session,
        isLoading: false,
      });
    } catch (error: any) {
      set({ 
        error: error.message || 'An error occurred during sign up',
        isLoading: false,
      });
    }
  },
  
  signIn: async (email: string, password: string) => {
    try {
      set({ isLoading: true, error: null });
      const { data, error } = await supabase.auth.signInWithPassword({ email, password });
      
      if (error) throw error;
      
      set({ 
        user: data.user,
        session: data.session,
        isLoading: false,
      });
    } catch (error: any) {
      set({ 
        error: error.message || 'An error occurred during sign in',
        isLoading: false,
      });
    }
  },
  
  signOut: async () => {
    try {
      set({ isLoading: true, error: null });
      const { error } = await supabase.auth.signOut();
      
      if (error) throw error;
      
      set({ 
        user: null,
        session: null,
        isLoading: false,
      });
    } catch (error: any) {
      set({ 
        error: error.message || 'An error occurred during sign out',
        isLoading: false,
      });
    }
  },

  clearError: () => set({ error: null }),
}));

// Initialize session from local storage
export const initializeAuth = async () => {
  const { data } = await supabase.auth.getSession();
  useAuthStore.setState({ 
    user: data.session?.user || null,
    session: data.session,
    isLoading: false,
  });

  // Set up auth state listener
  supabase.auth.onAuthStateChange((_, session) => {
    useAuthStore.setState({ 
      user: session?.user || null,
      session,
      isLoading: false,
    });
  });
};