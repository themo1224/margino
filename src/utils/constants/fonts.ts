import { Inter, Vazirmatn } from "next/font/google";
import localFont from "next/font/local";

export const aeonik = localFont({
    src: [
        {
            path: "../../../public/fonts/AeonikPro-Light.woff2",
            weight: "300",
        },
        {
            path: "../../../public/fonts/AeonikPro-Regular.woff2",
            weight: "400",
        },
        {
            path: "../../../public/fonts/AeonikPro-Medium.woff2",
            weight: "500",
        },
        {
            path: "../../../public/fonts/AeonikPro-Bold.woff2",
            weight: "700",
        },
        {
            path: "../../../public/fonts/AeonikPro-Black.woff2",
            weight: "900",
        }
    ],
    variable: "--font-aeonik",
});

/** Estedad Mad (display) — Farsi-digits cut for FA pricing UI */
export const estedad = localFont({
    src: [
        {
            path: "../../../public/fonts/Estedad-Mad-FD.woff2",
            weight: "700",
            style: "normal",
        },
    ],
    variable: "--font-estedad",
    display: "swap",
});

export const inter = Inter({
    subsets: ["latin"],
    variable: "--font-inter",
});

export const vazirmatn = Vazirmatn({
    subsets: ["latin", "arabic"],
    variable: "--font-vazirmatn",
});
