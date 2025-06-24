export interface WordMapping {
    arabicWord: string;
    arabicComponents?: string[];
    englishTranslation: string;
    position: number;
    englishPosition: number;
    isCompound?: boolean;
    compoundGroup?: number;
}

export interface StorySentence {
    id: number;
    arabicText: string;
    englishTranslation: string;
    wordMappings: WordMapping[];
}

export interface ProphetStory {
    id: number;
    prophetName: string;
    prophetNameArabic: string;
    storyTitle: string;
    storyTitleArabic: string;
    description: string;
    sentences: StorySentence[];
}

export const prophetStories: ProphetStory[] = [
    {
        id: 1,
        prophetName: "Yusuf (A.S)",
        prophetNameArabic: "يوسف عليه السلام",
        storyTitle: "The Story of Prophet Yusuf (A.S)",
        storyTitleArabic: "قصة النبي يوسف",
        description: "The story of Prophet Yusuf (Joseph), his childhood, dreams, and trials.",
        sentences: [
            {
                id: 1,
                arabicText: "كان يوسف ولداً صغيراً",
                englishTranslation: "Yusuf was a small boy",
                wordMappings: [
                    {
                        arabicWord: "صغيراً",
                        englishTranslation: "small",
                        position: 3,
                        englishPosition: 3
                    },
                    {
                        arabicWord: "ولداً",
                        englishTranslation: "boy",
                        position: 2,
                        englishPosition: 4
                    },
                    {
                        arabicWord: "يوسف",
                        englishTranslation: "Yusuf",
                        position: 1,
                        englishPosition: 0
                    },
                    {
                        arabicWord: "كان",
                        englishTranslation: "was",
                        position: 0,
                        englishPosition: 1
                    }
                ]
            },
            {
                id: 2,
                arabicText: "وكان له أحد عشر أخاً",
                englishTranslation: "And he had eleven brothers",
                wordMappings: [
                    {
                        arabicWord: "أخاً",
                        englishTranslation: "brothers",
                        position: 4,
                        englishPosition: 4
                    },
                    {
                        arabicWord: "عشر",
                        englishTranslation: "",
                        position: 3,
                        englishPosition: 3,
                        isCompound: true,
                        compoundGroup: 1
                    },
                    {
                        arabicWord: "أحد",
                        englishTranslation: "eleven",
                        position: 2,
                        englishPosition: 2,
                        isCompound: true,
                        compoundGroup: 1
                    },
                    {
                        arabicWord: "له",
                        englishTranslation: "he",
                        position: 1,
                        englishPosition: 1
                    },
                    {
                        arabicWord: "وكان",
                        arabicComponents: ["و", "كان"],
                        englishTranslation: "And",
                        position: 0,
                        englishPosition: 0
                    }
                ]
            }
        ]
    }
];