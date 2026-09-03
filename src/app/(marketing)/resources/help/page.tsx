import { AnimationContainer, MaxWidthWrapper } from "@/components";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import MagicBadge from "@/components/ui/magic-badge";
import { FAQ } from "@/utils/constants/faq";

const HelpPage = () => {
    return (
        <MaxWidthWrapper className="mb-40">
            <AnimationContainer delay={0.1} className="w-full">
                <div className="flex flex-col items-center justify-center py-16 max-w-2xl mx-auto">
                    <MagicBadge title="راهنما" />
                    <h1 className="text-2xl md:text-4xl lg:text-5xl font-semibold font-heading text-center mt-6 !leading-tight">
                        سوال‌های رایج
                    </h1>
                    <p className="text-base md:text-lg mt-6 text-center text-muted-foreground">
                        اگر جوابتان این‌جا نیست، از صفحه قیمت‌ها شروع کنید؛ پلن‌ها به‌زودی اعلام می‌شود.
                    </p>
                </div>
            </AnimationContainer>
            <AnimationContainer delay={0.2} className="w-full">
                <div className="max-w-3xl mx-auto w-full">
                    <Accordion type="single" collapsible>
                        {FAQ.map((faq) => (
                            <AccordionItem key={faq.id} value={faq.id}>
                                <AccordionTrigger>{faq.question}</AccordionTrigger>
                                <AccordionContent>{faq.answer}</AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </AnimationContainer>
        </MaxWidthWrapper>
    );
};

export default HelpPage;
