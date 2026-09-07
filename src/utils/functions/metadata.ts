import { Metadata } from "next";

export const generateMetadata = ({
    title = "مارجینو — حتی اگر حواس‌ات نباشد، ضرر نمی‌کنی",
    description = "قیمت کالاهایت را با هزینه‌ات و قیمت روز به‌روز نگه می‌داریم و قیمت رقبا را هم رصد می‌کنیم.",
    image = "/thumbnail.png",
    icons = [
        {
            rel: "apple-touch-icon",
            sizes: "32x32",
            url: "/apple-touch-icon.png"
        },
        {
            rel: "icon",
            sizes: "32x32",
            url: "/favicon-32x32.png"
        },
        {
            rel: "icon",
            sizes: "16x16",
            url: "/favicon-16x16.png"
        },
    ],
    noIndex = false
}: {
    title?: string;
    description?: string;
    image?: string | null;
    icons?: Metadata["icons"];
    noIndex?: boolean;
} = {}): Metadata => ({
    title,
    description,
    icons,
    openGraph: {
        title,
        description,
        ...(image && { images: [{ url: image }] }),
    },
    twitter: {
        title,
        description,
        ...(image && { card: "summary_large_image", images: [image] }),
    },
    ...(noIndex && { robots: { index: false, follow: false } }),
});
