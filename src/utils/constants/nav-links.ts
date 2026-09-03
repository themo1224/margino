import { HelpCircleIcon, LineChartIcon, NewspaperIcon, PlugIcon, ShieldIcon, WalletIcon } from "lucide-react";

export const NAV_LINKS = [
    {
        title: "قابلیت‌ها",
        href: "/features",
        menu: [
            {
                title: "موتور هزینه و قیمت",
                tagline: "پروفایل هزینه، کف قیمت، و قیمت پیشنهادی امن.",
                href: "/features/link-shortening",
                icon: WalletIcon,
            },
            {
                title: "قیمت رقبا",
                tagline: "ترب، اسنپ، دیجی‌کالا و باسلام به‌عنوان رقیب.",
                href: "/features/analytics",
                icon: LineChartIcon,
            },
            {
                title: "کف قیمت امن",
                tagline: "هیچ‌وقت زیر هزینه به‌علاوه حاشیه.",
                href: "/features/password-protection",
                icon: ShieldIcon,
            },
            {
                title: "ووکامرس",
                tagline: "افزونه فقط رابط است. اینستاگرام و API به‌زودی.",
                href: "/features/qr-codes",
                icon: PlugIcon,
            },
        ],
    },
    {
        title: "قیمت‌ها",
        href: "/pricing",
    },
    {
        title: "سازمانی",
        href: "/enterprise",
    },
    {
        title: "منابع",
        href: "/resources/blog",
        menu: [
            {
                title: "وبلاگ",
                tagline: "یادداشت‌هایی برای فروشگاه‌های خرید و فروش مجدد.",
                href: "/resources/blog",
                icon: NewspaperIcon,
            },
            {
                title: "راهنما",
                tagline: "جواب سوال‌های رایج درباره مارجینو.",
                href: "/resources/help",
                icon: HelpCircleIcon,
            },
        ]
    },
    {
        title: "تغییرات",
        href: "/changelog",
    },
];
