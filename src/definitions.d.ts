type AnimeCallbackFunction = (anim: anime.AnimeInstance) => void;

declare module "*.svg" {
  const content: any;
  export default content;
}
