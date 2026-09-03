"use client";

import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Tooltip, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
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
        <Tabs defaultValue="monthly" className="w-full flex flex-col items-center justify-center">
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

            <TabsContent value="monthly" className="grid grid-cols-1 lg:grid-cols-3 gap-5 w-full md:gap-8 flex-wrap max-w-5xl mx-auto pt-6">
                {PLANS.map((plan) => (
                    <PlanCard key={plan.name} plan={plan} tab="monthly" />
                ))}
            </TabsContent>
            <TabsContent value="yearly" className="grid grid-cols-1 lg:grid-cols-3 gap-5 w-full md:gap-8 flex-wrap max-w-5xl mx-auto pt-6">
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
            className={cn(
                "flex flex-col w-full border-border rounded-xl",
                plan.highlighted && "border-2 border-purple-500"
            )}
        >
            <CardHeader className={cn(
                "border-b border-border",
                plan.highlighted ? "bg-purple-500/[0.07]" : "bg-foreground/[0.03]"
            )}>
                <CardTitle className={cn(!plan.highlighted && "text-muted-foreground", "text-lg font-medium")}>
                    {plan.name}
                </CardTitle>
                <CardDescription>
                    {plan.info}
                </CardDescription>
                <h5 className="text-3xl font-semibold">
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
                    <div key={index} className="flex items-center gap-2">
                        <CheckCircleIcon className="text-purple-500 w-4 h-4" />
                        <TooltipProvider>
                            <Tooltip delayDuration={0}>
                                <TooltipTrigger asChild>
                                    <p>
                                        {feature.text}
                                    </p>
                                </TooltipTrigger>
                            </Tooltip>
                        </TooltipProvider>
                    </div>
                ))}
            </CardContent>
            <CardFooter className="w-full mt-auto">
                <Link
                    href={plan.btn.href}
                    style={{ width: "100%" }}
                    className={buttonVariants({ className: plan.highlighted && "bg-purple-500 hover:bg-purple-500/80 text-white" })}
                >
                    {plan.btn.text}
                </Link>
            </CardFooter>
        </Card>
    );
};

export default PricingCards
