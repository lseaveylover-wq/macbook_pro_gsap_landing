import { create } from "zustand";

type MacBookProStore = {
  color: string;
  scale: number;
  texture: string;

  setColor: (color: string) => void;
  setScale: (scale: number) => void;
  setTexture: (texture: string) => void;

  reset: () => void;
};

const useMacBookProStore = create<MacBookProStore>((set) => ({
  color: "#2c2e2c",
  setColor: (color) => set({ color }),

  scale: 0.08,
  setScale: (scale) => set({ scale }),

  texture: "/videos/feature-1.mp4",
  setTexture: (texture) => set({ texture }),

  reset: () =>
    set({
      color: "#2c2e2c",
      scale: 0.08,
      texture: "/videos/feature-1.mp4",
    }),
}));

export default useMacBookProStore;