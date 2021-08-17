import create from 'zustand';
import shallow from 'zustand/shallow';
import { devtools } from 'zustand/middleware';

interface IModalStore {
  show: boolean;
  title?: string;
  toggle: () => void;
  setTitle: (title: string) => void;
}

export const useModalStore = create<IModalStore>(
  devtools((set, get) => ({
    show: false,
    title: 'Default Modal',
    toggle() {
      const { show } = get();
      set({
        show: !show,
      });
    },
    setTitle(title: string) {
      set({ title });
    },
  }))
);

export function useModal() {
  const controls = useModalStore(
    (store) => ({
      show: store.show,
      title: store.title,
      toggle: store.toggle,
      setTitle: store.setTitle,
    }),
    shallow
  );

  return controls;
}
