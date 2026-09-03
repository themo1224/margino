import { buttonVariants } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Command } from "@/components/ui/command";
import { cn } from "@/utils";
import { ArrowLeftIcon, CalendarIcon, Link2Icon, SearchIcon, WaypointsIcon } from "lucide-react";
import Link from "next/link";
import { ReactNode } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./card";
import { Input } from "./input";
import { Integrations } from "./integrations";
import { Label } from "./label";

export const CARDS = [
    {
        Icon: Link2Icon,
        name: "موتور هزینه و قیمت",
        description: "پروفایل هزینه، کف قیمت، و قیمت پیشنهادی امن — هیچ‌وقت زیر هزینه به‌علاوه حاشیه.",
        href: "/features/link-shortening",
        cta: "بیشتر",
        className: "col-span-3 lg:col-span-1",
        background: (
            <Card className="absolute top-10 start-10 origin-top rounded-none rounded-ss-md transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_0%,#000_100%)] group-hover:scale-105 border border-border border-e-0">
                <CardHeader>
                    <CardTitle>
                        پروفایل هزینه
                    </CardTitle>
                    <CardDescription>
                        خرید، دلار، اجاره، نیرو و سربار را در یک جا ببینید.
                    </CardDescription>
                </CardHeader>
                <CardContent className="-mt-4">
                    <Label>
                        هزینه واحد
                    </Label>
                    <Input
                        type="text"
                        placeholder="هزینه کامل کالا…"
                        className="w-full focus-visible:ring-0 focus-visible:ring-transparent"
                    />
                </CardContent>
            </Card>
        ),
    },
    {
        Icon: SearchIcon,
        name: "قیمت رقبا",
        description: "قیمت زنده از ترب/اسنپ و آگهی‌های دیجی‌کالا/باسلام به‌عنوان رقیب — نه بازاری که به آن می‌فروشیم.",
        href: "/features/analytics",
        cta: "بیشتر",
        className: "col-span-3 lg:col-span-2",
        background: (
            <Command className="absolute end-10 top-10 w-[70%] origin-to translate-x-0 border border-border transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_40%,#000_100%)] group-hover:translate-x-10 p-2">
                <Input placeholder="جستجوی رقیب…" />
                <div className="mt-1 cursor-pointer">
                    <div className="px-4 py-2 hover:bg-muted rounded-md">ترب — عطر مشابه</div>
                    <div className="px-4 py-2 hover:bg-muted rounded-md">اسنپ — همان کالا</div>
                    <div className="px-4 py-2 hover:bg-muted rounded-md">دیجی‌کالا — آگهی رقیب</div>
                    <div className="px-4 py-2 hover:bg-muted rounded-md">باسلام — آگهی رقیب</div>
                    <div className="px-4 py-2 hover:bg-muted rounded-md">نقره دست‌ساز — مقایسه</div>
                    <div className="px-4 py-2 hover:bg-muted rounded-md">عطر اورجینال — مقایسه</div>
                </div>
            </Command>
        ),
    },
    {
        Icon: WaypointsIcon,
        name: "ووکامرس؛ اینستاگرام و API به‌زودی",
        description: "اول وردپرس برای کاربران ووکامرس (افزونه فقط رابط است). اینستاگرام و API باز هنوز آماده نیستند.",
        href: "/features/qr-codes",
        cta: "بیشتر",
        className: "col-span-3 lg:col-span-2 max-w-full overflow-hidden",
        background: (
            <Integrations className="absolute end-2 pe-28 md:pe-0 top-4 h-[300px] w-[600px] border-none transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)] group-hover:scale-105" />
        ),
    },
    {
        Icon: CalendarIcon,
        name: "هشدار رقبا",
        description: "وقتی از رقبا گران‌تر نشسته‌اید، بفهمید و روی قیمت اقدام کنید.",
        className: "col-span-3 lg:col-span-1",
        href: "/features/password-protection",
        cta: "بیشتر",
        background: (
            <Calendar
                mode="single"
                selected={new Date(2022, 4, 11, 0, 0, 0)}
                className="absolute end-0 top-10 origin-top rounded-md border border-border transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_40%,#000_100%)] group-hover:scale-105"
            />
        ),
    },
];

const BentoGrid = ({
    children,
    className,
}: {
    children: ReactNode;
    className?: string;
}) => {
    return (
        <div
            className={cn(
                "grid w-full auto-rows-[22rem] grid-cols-3 gap-4",
                className,
            )}
        >
            {children}
        </div>
    );
};

const BentoCard = ({
    name,
    className,
    background,
    Icon,
    description,
    href,
    cta,
}: {
    name: string;
    className: string;
    background: ReactNode;
    Icon: any;
    description: string;
    href: string;
    cta: string;
}) => (
    <div
        key={name}
        className={cn(
            "group relative col-span-3 flex flex-col justify-between border border-border/60 overflow-hidden rounded-xl",
            "bg-black [box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]",
            className,
        )}
    >
        <div>{background}</div>
        <div className="pointer-events-none z-10 flex flex-col gap-1 p-6 transition-all duration-300 group-hover:-translate-y-10">
            <Icon className="h-12 w-12 origin-left text-neutral-700 transition-all duration-300 ease-in-out group-hover:scale-75" />
            <h3 className="text-xl font-semibold text-neutral-300">
                {name}
            </h3>
            <p className="max-w-lg text-neutral-400">{description}</p>
        </div>

        <div
            className={cn(
                "absolute bottom-0 flex w-full translate-y-10 flex-row items-center p-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100",
            )}
        >
            <Link href={href} className={buttonVariants({ size: "sm", variant: "ghost", className: "cursor-pointer" })}>
                {cta}
                <ArrowLeftIcon className="ms-2 h-4 w-4" />
            </Link>
        </div>
        <div className="pointer-events-none absolute inset-0 transition-all duration-300 group-hover:bg-black/[.03] group-hover:dark:bg-neutral-800/10" />
    </div>
);

export { BentoCard, BentoGrid };
