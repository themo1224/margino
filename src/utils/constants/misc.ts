import { BarChart3Icon, FolderOpenIcon, WandSparklesIcon } from "lucide-react";

export const DEFAULT_AVATAR_URL = "https://api.dicebear.com/8.x/initials/svg?backgroundType=gradientLinear&backgroundRotation=0,360&seed=";

export const PAGINATION_LIMIT = 10;

export const COMPANIES = [
    {
        name: "عطر سرای نسترن",
        logo: "/assets/company-01.svg",
    },
    {
        name: "نقره سیمین",
        logo: "/assets/company-02.svg",
    },
    {
        name: "فروشگاه رزگلد",
        logo: "/assets/company-03.svg",
    },
    {
        name: "گالری نقره‌کار",
        logo: "/assets/company-04.svg",
    },
    {
        name: "عطریات پارس",
        logo: "/assets/company-05.svg",
    },
    {
        name: "زیورآلات مهتاب",
        logo: "/assets/company-06.svg",
    }
] as const;

export const PROCESS = [
    {
        title: "پروفایل هزینه بسازید",
        description: "هزینه کامل کالا را ثبت کنید: خرید، دلار، اجاره، نیرو و بقیه سربار — تا کف قیمت معلوم باشد.",
        icon: FolderOpenIcon,
    },
    {
        title: "قیمت پیشنهادی امن بگیرید",
        description: "از پروفایل هزینه به‌علاوه قیمت زنده رقبا، یک قیمت پیشنهادی می‌گیرید که هیچ‌وقت زیر هزینه به‌علاوه حاشیه نمی‌رود.",
        icon: WandSparklesIcon,
    },
    {
        title: "روی هشدار رقبا اقدام کنید",
        description: "وقتی روی ترب، دیجی‌کالا یا باسلام از رقبا گران‌تر نشسته‌اید و فروش از دست می‌رود، بفهمید و قیمت را عوض کنید.",
        icon: BarChart3Icon,
    },
] as const;

export const FEATURES = [
    {
        title: "موتور هزینه و قیمت",
        description: "پروفایل هزینه، کف قیمت، و قیمت پیشنهادی امن.",
    },
    {
        title: "قیمت رقبا",
        description: "قیمت زنده رقبا از ترب/اسنپ و آگهی‌های دیجی‌کالا/باسلام.",
    },
    {
        title: "ووکامرس",
        description: "افزونه وردپرس فقط برای فروشندگان ووکامرس، به‌عنوان رابط.",
    },
    {
        title: "اینستاگرام و API",
        description: "به‌زودی؛ هنوز آماده نیستند.",
    },
    {
        title: "کف قیمت",
        description: "قیمت پیشنهادی هیچ‌وقت زیر هزینه به‌علاوه حاشیه نمی‌رود.",
    },
    {
        title: "اقدام روی هشدار",
        description: "وقتی از رقبا گران‌ترید، بفهمید و قیمت را عوض کنید.",
    },
] as const;

export const REVIEWS = [
    {
        name: "رضا محمدی",
        username: "عطر فروشی",
        avatar: "https://randomuser.me/api/portraits/men/1.jpg",
        rating: 5,
        review: "قیمت خرید عطر با دلار بالا می‌رود و من هنوز با قیمت قدیمی می‌فروختم. حالا از هزینه واقعی می‌فهمم کی دارم ضرر می‌دهم."
    },
    {
        name: "سارا احمدی",
        username: "نقره و زیورآلات",
        avatar: "https://randomuser.me/api/portraits/women/1.jpg",
        rating: 4,
        review: "روی ترب از رقبا گران‌تر بودم و فروش کم شده بود. تا خودم دستی چک نمی‌کردم، خبر نداشتم."
    },
    {
        name: "امیر حسینی",
        username: "خرید و فروش عطر",
        avatar: "https://randomuser.me/api/portraits/men/2.jpg",
        rating: 5,
        review: "اجاره و نیرو را هیچ‌وقت در قیمت کالا حساب نمی‌کردم. پروفایل هزینه همان چیزی است که کم داشتم."
    },
    {
        name: "نرگس رضایی",
        username: "گالری نقره",
        avatar: "https://randomuser.me/api/portraits/women/2.jpg",
        rating: 4,
        review: "قیمت پیشنهادی زیر هزینه به‌علاوه حاشیه نمی‌رود. دیگر از ترس ضرر، چشم‌بسته ارزان نمی‌فروشم."
    },
    {
        name: "حسین کریمی",
        username: "فروشگاه عطر",
        avatar: "https://randomuser.me/api/portraits/men/3.jpg",
        rating: 5,
        review: "دیجی‌کالا و باسلام را به‌عنوان رقیب می‌بینم، نه جایی که بخواهم فروشگاه‌شان را مدیریت کنم. همان قیمت آگهی‌ها برایم کافی است."
    },
    {
        name: "مینا صادقی",
        username: "زیورآلات نقره",
        avatar: "https://randomuser.me/api/portraits/women/3.jpg",
        rating: 4,
        review: "صدها کالا را دستی با ترب و اسنپ مقایسه نمی‌توانم. بدون قیمت رقبا نمی‌فهمم کی گران نشسته‌ام."
    },
    {
        name: "علی مرادی",
        username: "عمده عطر",
        avatar: "https://randomuser.me/api/portraits/men/4.jpg",
        rating: 5,
        review: "فروشگاه ووکامرس دارم؛ افزونه فقط رابط است. محصول برای قیمت‌گذاری است، نه اینکه شرکت افزونه باشد."
    },
    {
        name: "فاطمه نوری",
        username: "خرید و فروش زیورآلات",
        avatar: "https://randomuser.me/api/portraits/women/4.jpg",
        rating: 4,
        review: "وقتی هزینه بالا می‌رود و قیمت روی سایت کهنه می‌ماند، ضرر پنهان است. همین را می‌خواستم ببینم."
    },
    {
        name: "مهدی جعفری",
        username: "عطریات",
        avatar: "https://randomuser.me/api/portraits/men/5.jpg",
        rating: 5,
        review: "بعد از قیمت پیشنهادی، روی هشدار رقبا قیمت را عوض کردم. دیگر بالای بازار نمی‌مانم بی‌خبر."
    },
] as const;
