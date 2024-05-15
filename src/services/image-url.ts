import { url } from "inspector";

const getCroppedImageUrl = (url: string) => {
  // https://media.rawg.io/media/games/20a/20aa03a10cda45239fe22d035c0ebe64.jpg
  // https://media.rawg.io/media/crop/600/400/games/20a/20aa03a10cda45239fe22d035c0ebe64.jpg
  const target = "media/";
  const index = url.indexOf(target) + target.length;
  return url.slice(0, index) + "crop/600/400/" + url.slice(index);
};

export default getCroppedImageUrl;
