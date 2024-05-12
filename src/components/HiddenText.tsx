"use client";
import React from "react";
import {
    TextRevealCard,
    TextRevealCardDescription,
    TextRevealCardTitle,
} from "../components/ui/text-reveal-card";

export function TextRevealCardPreview() {
    return (
        <div className="flex items-center justify-center bg-[#0E0E10] h-[40rem] rounded-2xl w-full">
            <TextRevealCard
                text="Savvy in IT solutions"
                revealText="I'm fluent in binary "
            >
                <TextRevealCardTitle>
                    Sometimes, you just need to see it.
                </TextRevealCardTitle>
                <TextRevealCardDescription>
                    Hover over the card to reveal the hidden text.
                </TextRevealCardDescription>
            </TextRevealCard>
        </div>
    );
}
