import { create } from 'zustand';

export const useAppStore = create((set) => ({
  theme: 'dark',
  toggleTheme: () => set((state) => ({ theme: state.theme === 'light' ? 'dark' : 'light' })),
  
  progress: {},
  updateProgress: (lessonId, status) => set((state) => ({
    progress: { ...state.progress, [lessonId]: status }
  })),
  
  resetProgress: () => set({ progress: {} }),
  
  isQuizActive: false,
  setQuizActive: (status) => set({ isQuizActive: status }),
}));
