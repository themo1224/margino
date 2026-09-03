import { AnimationContainer, Blogs } from "@/components";

const BlogPage = () => {
    return (
        <div className="flex flex-col items-center justify-center pb-20">
            <AnimationContainer delay={0.1} className="w-full">
                <h1 className="text-2xl md:text-4xl lg:text-5xl font-semibold font-heading text-center mt-6 !leading-tight">
                    وبلاگ
                </h1>
                <p className="text-base md:text-lg mt-6 text-center text-muted-foreground">
                    ضرر پنهان از هزینه واقعی، قیمت رقبا، و قیمت امن برای فروشگاه‌های خرید و فروش مجدد.
                </p>
            </AnimationContainer>
            <AnimationContainer delay={0.2} className="w-full pt-20">
                <Blogs />
            </AnimationContainer>
        </div>
    );
};

export default BlogPage;
