const PLAN_PRICE_PLACEHOLDER = "به‌زودی";

export const PLANS = [
    {
        name: "پایه",
        info: "یک فروشگاه، چند SKU",
        highlighted: false,
        price: {
            monthly: PLAN_PRICE_PLACEHOLDER,
            yearly: PLAN_PRICE_PLACEHOLDER,
        },
        features: [
            { text: "پروفایل هزینه و قیمت پیشنهادی امن" },
            { text: "قیمت رقبا — محصول محدود، به‌روزرسانی کندتر" },
            { text: "هشدار قیمت" },
            { text: "رابط ووکامرس داخل پلن" },
            { text: "اینستاگرام و API به‌زودی" },
        ],
        btn: {
            text: "شروع",
            href: "/pricing",
            variant: "default",
        }
    },
    {
        name: "حرفه‌ای",
        info: "عطر و زیورآلات، حدود ۱۰۰ تا ۵۰۰ سفارش در ماه — پلن اصلی",
        highlighted: true,
        price: {
            monthly: PLAN_PRICE_PLACEHOLDER,
            yearly: PLAN_PRICE_PLACEHOLDER,
        },
        features: [
            { text: "همهٔ امکانات پایه" },
            { text: "محصولات بیشتر و به‌روزرسانی سریع‌تر رقبا" },
            { text: "هشدار قوی‌تر: زیر هزینه یا بالای رقبا" },
            { text: "اعمال اختیاری قیمت در ووکامرس" },
            { text: "اینستاگرام و API به‌زودی" },
        ],
        btn: {
            text: "شروع با حرفه‌ای",
            href: "/pricing",
            variant: "purple",
        }
    },
    {
        name: "فروشگاه‌ها",
        info: "چند فروشگاه یا SKU بیشتر",
        highlighted: false,
        price: {
            monthly: PLAN_PRICE_PLACEHOLDER,
            yearly: PLAN_PRICE_PLACEHOLDER,
        },
        features: [
            { text: "چند فروشگاه و SKU بیشتر" },
            { text: "پشتیبانی اولویت‌دار" },
            { text: "API وقتی آماده شود" },
        ],
        btn: {
            text: "شروع",
            href: "/pricing",
            variant: "default",
        }
    }
];

export const PRICING_FEATURES = [
    {
        text: "اشتراک ماهانه یا سالانه",
        tooltip: "سالانه حدود ده ماه است؛ دو ماه رایگان",
    },
    {
        text: "ووکامرس داخل پلن است",
        tooltip: "رابط است، محصول جدا نیست",
    },
];

export const WORKSPACE_LIMIT = 2;
