import { AnimationContainer, MaxWidthWrapper } from "@/components";
import { Button } from "@/components/ui/button";
import MagicBadge from "@/components/ui/magic-badge";
import Link from "next/link";

const EnterprisePage = () => {
    return (
        <MaxWidthWrapper className="mb-40">
            <AnimationContainer delay={0.1}>
                <div className="flex flex-col items-center justify-center py-16 max-w-2xl mx-auto">
                    <MagicBadge title="سازمانی" />
                    <h1 className="text-2xl md:text-4xl lg:text-5xl font-semibold font-heading text-center mt-6 !leading-tight">
                        برای فروشگاه‌های خرید و فروش مجدد
                    </h1>
                    <p className="text-base md:text-lg mt-6 text-center text-muted-foreground">
                        مارجینو محصول قیمت‌گذاری است، نه مدیریت فروشگاه دیجی‌کالا یا باسلام. فروش SaaS از همین سایت و برای کاربران وردپرس از ژاکت و RTL است.
                    </p>
                    <div className="flex items-center gap-4 mt-8">
                        <Button asChild>
                            <Link href="/pricing">قیمت‌ها</Link>
                        </Button>
                        <Button asChild variant="outline">
                            <Link href="/resources/help">راهنما</Link>
                        </Button>
                    </div>
                </div>
            </AnimationContainer>
            <AnimationContainer delay={0.2}>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                    <div className="rounded-xl border border-border p-6">
                        <h2 className="font-medium">مخاطب اول</h2>
                        <p className="mt-2 text-sm text-muted-foreground">
                            عطر، نقره و کالای مشابه که قیمت خریدشان با دلار و تورم تکان می‌خورد.
                        </p>
                    </div>
                    <div className="rounded-xl border border-border p-6">
                        <h2 className="font-medium">چه کار نمی‌کنیم</h2>
                        <p className="mt-2 text-sm text-muted-foreground">
                            دیجی‌کالا و باسلام مشتری ما نیستند. رستوران و کالای بدون SKU مخاطب اول نیستند.
                        </p>
                    </div>
                    <div className="rounded-xl border border-border p-6">
                        <h2 className="font-medium">از کجا می‌خرید</h2>
                        <p className="mt-2 text-sm text-muted-foreground">
                            همین سایت؛ کاربران وردپرس از ژاکت و RTL. اینستاگرام برای پیدا کردن فروشگاه است، نه کانال اصلی درآمد.
                        </p>
                    </div>
                </div>
            </AnimationContainer>
        </MaxWidthWrapper>
    );
};

export default EnterprisePage;
