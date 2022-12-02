import { ImageResponse } from "@vercel/og";
import pageConfig from "pageConfig.json";
const { profile } = pageConfig;
const { name } = profile;

export const config = {
  runtime: "experimental-edge",
};

const font = fetch(
  new URL("../../public/fonts/Pencerio-Hairline.ttf", import.meta.url)
).then((res) => res.arrayBuffer());

export default async function handler() {
  const fontData = await font;
  return new ImageResponse(
    (
      // Modified based on https://tailwindui.com/components/marketing/sections/cta-sections
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#FCFCFC",
          fontFamily: "Pencerio-Hairline",
        }}
      >
        <p
          tw="absolute text-[200px] text-[#F5F5F5] -z-10"
          style={{
            textShadow: "0 0 2px #F5F5F5",
          }}
        >
          {name}
        </p>
        <p
          tw="relative z-10 text-[70px]"
          style={{
            textShadow: "0 0 2px #000",
          }}
        >
          {name}
        </p>
      </div>
    ),
    {
      width: 1200,
      height: 630,
      fonts: [
        {
          name: "Typewriter",
          data: fontData,
          style: "normal",
        },
      ],
    }
  );
}
