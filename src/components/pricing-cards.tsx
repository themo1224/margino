"use client";

import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn, PLANS } from "@/utils";
import { motion } from "framer-motion";
import { CheckCircleIcon } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

type Tab = "monthly" | "yearly";

const billingSuffix = (tab: Tab): string => {
    switch (tab) {
        case "monthly":
            return " / ماه";
        case "yearly":
            return " / سال";
        default: {
            const _exhaustive: never = tab;
            return _exhaustive;
        }
    }
};

const PricingCards = () => {

    const MotionTabTrigger = motion(TabsTrigger);

    const [activeTab, setActiveTab] = useState<Tab>("monthly");

    return (
        <Tabs dir="rtl" defaultValue="monthly" className="w-full flex flex-col items-center justify-center">
            <TabsList>
                <MotionTabTrigger
                    value="monthly"
                    onClick={() => setActiveTab("monthly")}
                    className="relative"
                >
                    {activeTab === "monthly" && (
                        <motion.div
                            layoutId="active-tab-indicator"
                            transition={{
                                type: "spring",
                                bounce: 0.5,
                            }}
                            className="absolute top-0 start-0 w-full h-full bg-background shadow-sm rounded-md z-10"
                        />
                    )}
                    <span className="z-20">
                        ماهانه
                    </span>
                </MotionTabTrigger>
                <MotionTabTrigger
                    value="yearly"
                    onClick={() => setActiveTab("yearly")}
                    className="relative"
                >
                    {activeTab === "yearly" && (
                        <motion.div
                            layoutId="active-tab-indicator"
                            transition={{
                                type: "spring",
                                bounce: 0.5,
                            }}
                            className="absolute top-0 start-0 w-full h-full bg-background shadow-sm rounded-md z-10"
                        />
                    )}
                    <span className="z-20">
                        سالانه
                    </span>
                </MotionTabTrigger>
            </TabsList>
            <p className="mt-4 text-sm text-muted-foreground text-center max-w-lg">
                پرداخت سالانه دو ماه رایگان دارد. بیشتر فروشگاه‌ها پلن حرفه‌ای را انتخاب می‌کنند.
            </p>

            <TabsContent value="monthly" className="grid grid-cols-1 lg:grid-cols-3 gap-5 w-full md:gap-8 max-w-5xl mx-auto pt-6 [direction:rtl]">
                {PLANS.map((plan) => (
                    <PlanCard key={plan.name} plan={plan} tab="monthly" />
                ))}
            </TabsContent>
            <TabsContent value="yearly" className="grid grid-cols-1 lg:grid-cols-3 gap-5 w-full md:gap-8 max-w-5xl mx-auto pt-6 [direction:rtl]">
                {PLANS.map((plan) => (
                    <PlanCard key={plan.name} plan={plan} tab="yearly" />
                ))}
            </TabsContent>
        </Tabs>
    )
};

const PlanCard = ({
    plan,
    tab,
}: {
    plan: (typeof PLANS)[number];
    tab: Tab;
}) => {
    const amount = tab === "monthly" ? plan.price.monthly : plan.price.yearly;
    const isNumericPrice = typeof amount === "number";

    return (
        <Card
            dir="rtl"
            className={cn(
                "flex flex-col w-full border-border rounded-xl text-start",
                plan.highlighted && "border-2 border-brand"
            )}
        >
            <CardHeader className={cn(
                "border-b border-border text-start",
                plan.highlighted ? "bg-brand/[0.07]" : "bg-foreground/[0.03]"
            )}>
                <CardTitle className={cn(!plan.highlighted && "text-muted-foreground", "text-lg font-medium text-start")}>
                    {plan.name}
                </CardTitle>
                <CardDescription className="text-start">
                    {plan.info}
                </CardDescription>
                <h5 className="text-3xl font-semibold text-start">
                    {amount}
                    {isNumericPrice && (
                        <span className="text-base text-muted-foreground font-normal">
                            {billingSuffix(tab)}
                        </span>
                    )}
                </h5>
            </CardHeader>
            <CardContent className="pt-6 space-y-4">
                {plan.features.map((feature, index) => (
                    <div key={index} className="flex flex-row items-start gap-2 text-start">
                        <CheckCircleIcon className="text-brand w-4 h-4 mt-0.5 shrink-0" />
                        <p className="text-start leading-relaxed">
                            {feature.text}
                        </p>
                    </div>
                ))}
            </CardContent>
            <CardFooter className="w-full mt-auto">
                <Link
                    href={plan.btn.href}
                    style={{ width: "100%" }}
                    className={buttonVariants({ className: plan.highlighted && "bg-brand hover:bg-brand-muted text-brand-foreground" })}
                >
                    {plan.btn.text}
                </Link>
            </CardFooter>
        </Card>
    );
};

export default PricingCards
