import create from 'zustand';
import shallow from 'zustand/shallow';
import { devtools } from 'zustand/middleware';

interface IToastStore {
  toastList: Set<string>;
  show: (toastId: string) => void;
  close: (toastId: string) => void;
  closeAll: () => void;
}

export const useToastStore = create<IToastStore>(
  devtools((set, get) => ({
    toastList: new Set(),
    show(toastId: string) {
      const { toastList } = get();
      const newToastList = new Set(toastList);
      newToastList.add(toastId);

      set({
        toastList: newToastList,
      });
    },
    close(toastId: string) {
      const { toastList } = get();
      const newToastList = new Set(toastList);
      newToastList.delete(toastId);

      set({
        toastList: newToastList,
      });
    },
    closeAll() {
      const newToastList = new Set<string>();
      set({
        toastList: newToastList,
      });
    },
  }))
);

export function useToastControls() {
  const controls = useToastStore(
    (store) => ({
      show: store.show,
      close: store.close,
      closeAll: store.closeAll,
    }),
    shallow
  );

  return controls;
}
