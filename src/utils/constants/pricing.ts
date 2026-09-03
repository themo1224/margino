const PLAN_PRICE_PLACEHOLDER = "به‌زودی";

export const PLANS = [
    {
        name: "پلن ۱",
        info: "به‌زودی",
        highlighted: false,
        price: {
            monthly: PLAN_PRICE_PLACEHOLDER,
            yearly: PLAN_PRICE_PLACEHOLDER,
        },
        features: [
            { text: "به‌زودی" },
        ],
        btn: {
            text: "شروع",
            href: "/pricing",
            variant: "default",
        }
    },
    {
        name: "پلن ۲",
        info: "به‌زودی",
        highlighted: true,
        price: {
            monthly: PLAN_PRICE_PLACEHOLDER,
            yearly: PLAN_PRICE_PLACEHOLDER,
        },
        features: [
            { text: "به‌زودی" },
        ],
        btn: {
            text: "شروع",
            href: "/pricing",
            variant: "purple",
        }
    },
    {
        name: "پلن ۳",
        info: "به‌زودی",
        highlighted: false,
        price: {
            monthly: PLAN_PRICE_PLACEHOLDER,
            yearly: PLAN_PRICE_PLACEHOLDER,
        },
        features: [
            { text: "به‌زودی" },
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
        text: "به‌زودی",
        tooltip: "جزئیات پلن‌ها هنوز اعلام نشده است",
    },
];

export const WORKSPACE_LIMIT = 2;
