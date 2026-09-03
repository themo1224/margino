import { AnimationContainer, MaxWidthWrapper } from "@/components";
import MagicBadge from "@/components/ui/magic-badge";

const ChangeLogPage = () => {
    return (
        <MaxWidthWrapper className="mb-40">
            <AnimationContainer delay={0.1}>
                <div className="flex flex-col items-center justify-center py-16 max-w-2xl mx-auto">
                    <MagicBadge title="تغییرات" />
                    <h1 className="text-2xl md:text-4xl lg:text-5xl font-semibold font-heading text-center mt-6 !leading-tight">
                        الان چه هست، چه چیزی به‌زودی است
                    </h1>
                    <p className="text-base md:text-lg mt-6 text-center text-muted-foreground">
                        طبق مسیر محصول: اول موتور هزینه و قیمت رقبا و ووکامرس؛ اینستاگرام و API بعد از کاربران پرداختی اول.
                    </p>
                </div>
            </AnimationContainer>
            <AnimationContainer delay={0.2}>
                <div className="max-w-2xl mx-auto space-y-8">
                    <div className="rounded-xl border border-border p-6">
                        <p className="text-sm text-muted-foreground">الان</p>
                        <h2 className="mt-2 text-xl font-medium">موتور هزینه و قیمت امن</h2>
                        <p className="mt-2 text-muted-foreground">
                            پروفایل هزینه، کف قیمت، و قیمت پیشنهادی که زیر هزینه به‌علاوه حاشیه نمی‌رود.
                        </p>
                    </div>
                    <div className="rounded-xl border border-border p-6">
                        <p className="text-sm text-muted-foreground">الان</p>
                        <h2 className="mt-2 text-xl font-medium">قیمت رقبا</h2>
                        <p className="mt-2 text-muted-foreground">
                            ترب/اسنپ و آگهی‌های دیجی‌کالا/باسلام به‌عنوان رقیب — نه به‌عنوان مشتری یا مارکت‌پلیس ما.
                        </p>
                    </div>
                    <div className="rounded-xl border border-border p-6">
                        <p className="text-sm text-muted-foreground">الان</p>
                        <h2 className="mt-2 text-xl font-medium">ووکامرس</h2>
                        <p className="mt-2 text-muted-foreground">
                            افزونه وردپرس فقط برای کاربران ووکامرس، به‌عنوان رابط.
                        </p>
                    </div>
                    <div className="rounded-xl border border-border p-6">
                        <p className="text-sm text-muted-foreground">به‌زودی</p>
                        <h2 className="mt-2 text-xl font-medium">اینستاگرام و API باز</h2>
                        <p className="mt-2 text-muted-foreground">
                            در چشم‌انداز هستند و تا آماده نشوند فقط به‌عنوان به‌زودی نشان داده می‌شوند. اتوماسیون اینستاگرام در نسخه اول نیست.
                        </p>
                    </div>
                </div>
            </AnimationContainer>
        </MaxWidthWrapper>
    );
};

export default ChangeLogPage;
