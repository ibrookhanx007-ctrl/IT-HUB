import { ImageResponse } from "next/og";

import { siteConfig } from "@/content/site";

export const alt = siteConfig.name;
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

// ImageResponse renders with inline styles only — no next/font or
// global CSS — so brand colors are hardcoded here rather than pulled
// from the Tailwind theme tokens in globals.css.
export default function Image() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "80px",
        backgroundColor: "#0a1120",
        fontFamily: "sans-serif",
      }}
    >
      <div
        style={{
          width: "72px",
          height: "6px",
          backgroundColor: "#c9a961",
          marginBottom: "40px",
          display: "flex",
        }}
      />
      <div
        style={{
          fontSize: "72px",
          fontWeight: 700,
          color: "#f5f7fa",
          lineHeight: 1.1,
          display: "flex",
        }}
      >
        {siteConfig.name}
      </div>
      <div
        style={{
          fontSize: "32px",
          color: "#c9a961",
          marginTop: "24px",
          display: "flex",
        }}
      >
        {siteConfig.tagline}
      </div>
    </div>,
    { ...size },
  );
}
