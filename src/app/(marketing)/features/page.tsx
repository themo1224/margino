import { AnimationContainer, MaxWidthWrapper } from "@/components";
import { buttonVariants } from "@/components/ui/button";
import MagicBadge from "@/components/ui/magic-badge";
import { NAV_LINKS } from "@/utils";
import Link from "next/link";

const features = NAV_LINKS.find((link) => link.title === "قابلیت‌ها")?.menu ?? [];

const FeaturesPage = () => {
    return (
        <MaxWidthWrapper className="mb-40">
            <AnimationContainer delay={0.1}>
                <div className="flex flex-col items-center justify-center py-10 max-w-2xl mx-auto">
                    <MagicBadge title="قابلیت‌ها" />
                    <h1 className="text-2xl md:text-4xl lg:text-5xl font-semibold font-heading text-center mt-6 !leading-tight">
                        هزینه واقعی، قیمت رقبا، قیمت امن
                    </h1>
                    <p className="text-base md:text-lg mt-6 text-center text-muted-foreground">
                        پروفایل هزینه کامل به‌علاوه قیمت زنده رقبا می‌شود یک قیمت پیشنهادی که هیچ‌وقت زیر هزینه به‌علاوه حاشیه نیست.
                    </p>
                </div>
            </AnimationContainer>
            <AnimationContainer delay={0.2}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                    {features.map((feature) => (
                        <Link
                            key={feature.href}
                            href={feature.href}
                            className="rounded-xl border border-border p-6 hover:bg-muted/40 transition-colors"
                        >
                            <feature.icon className="h-6 w-6 text-foreground mb-4" />
                            <h2 className="text-lg font-medium">{feature.title}</h2>
                            <p className="mt-2 text-sm text-muted-foreground">{feature.tagline}</p>
                            <span className={buttonVariants({ variant: "ghost", size: "sm", className: "mt-4 px-0" })}>
                                بیشتر
                            </span>
                        </Link>
                    ))}
                </div>
            </AnimationContainer>
        </MaxWidthWrapper>
    );
};

export default FeaturesPage;
