import { getPlaiceholder } from "plaiceholder";

export const getBlurUrlFromSrc = async (src: string) => {
  const buffer = await fetch(src).then(async (res) =>
    Buffer.from(await res.arrayBuffer()),
  );

  const blurUrl = (await getPlaiceholder(buffer, { size: 64 })).base64;

  return blurUrl;
};
