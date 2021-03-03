export const createAudio = (src: string, volume: number) => {
  const audio = new Audio();
  audio.src = src;
  audio.volume = volume / 100;
  audio.play();
};
