import localFont from "next/font/local";

export const Ubuntu = localFont({
  src: [
    {
      path: "./fonts/Ubuntu-Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "./fonts/Ubuntu-LightItalic.ttf",
      weight: "300",
      style: "italic",
    },
    {
      path: "./fonts/Ubuntu-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/Ubuntu-Italic.ttf",
      weight: "400",
      style: "italic",
    },
    {
      path: "./fonts/Ubuntu-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/Ubuntu-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "./fonts/Ubuntu-BoldItalic.ttf",
      weight: "700",
      style: "italic",
    },
  ],
  variable: "--font-ubuntu",
});

export const Naruto = localFont({
  src: "./fonts/naruto.ttf",
  variable: "--font-naruto",
});
