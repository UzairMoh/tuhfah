import React from "react";

export const formatText = (text: string) => {
    const arabicRegex = /[\u0600-\u06FF\u0750-\u077F\u08A0-\u08FF\uFB50-\uFDFF\uFE70-\uFEFF]+/g;
    const parts = [];
    let lastIndex = 0;
    let match;

    while ((match = arabicRegex.exec(text)) !== null) {
        if (match.index > lastIndex) {
            parts.push({
                text: text.slice(lastIndex, match.index),
                isArabic: false
            });
        }

        parts.push({
            text: match[0],
            isArabic: true
        });

        lastIndex = match.index + match[0].length;
    }

    if (lastIndex < text.length) {
        parts.push({
            text: text.slice(lastIndex),
            isArabic: false
        });
    }

    return parts.map((part, index) => (
        <React.Fragment key={index}>
            {part.isArabic ? (
                <span className="font-arabic text-xl mx-1 text-gray-800">
                    {part.text}
                </span>
            ) : (
                part.text
            )}
        </React.Fragment>
    ));
};