export interface SubLesson {
    id: number;
    title: string;
    content: string;
    example?: string;
}

export interface MainLesson {
    title: string;
    content: string;
    example?: string;
}

export interface Vocabulary {
    id: number;
    word: string;
    pronunciation?: string;
    meaning: string;
    example?: string;
}

export interface Lesson {
    id: number;
    title: string;
    description: string;
    infoText: string;
    to: string;
    mainLesson: MainLesson;
    subLessons: SubLesson[];
    vocabulary: Vocabulary[];
}

export const lessons: Lesson[] = [
    {
        id: 1,
        title: "Lesson 1",
        description: "This lesson introduces the basics of 'هذا'.",
        infoText: "Learn about demonstrative pronouns in Arabic.",
        to: "/lesson-1",
        mainLesson: {
            title: "Understanding هذا (This)",
            content: "هذا is a demonstrative pronoun used to refer to masculine singular objects that are near the speaker. It is equivalent to 'this' in English when referring to masculine objects. It is called اِسْمُ الْإِشَارَة, and the thing it refers to is called اَلْمُشَارُ إلَيْه.",
            example: "هَذَا مَسْجِدُ\n - This is a Mosque"
        },
        subLessons: [
            {
                id: 1,
                title: "The Meaning of تنوين",
                content: "Arabic does not have a word equivalent to the English article 'a'. Instead, تنوين is used to convey this meaning.",
                example: "جَاءَ خَالِدُ مَعَ كِتَابٍ \n - Khalid came with a book."
            },
            {
                id: 2,
                title: "The Meaning of من",
                content: "من is used to ask questions about a non-intelligent being or thing. Such questions cannot be answered with a simple 'yes' or 'no'.",
                example: "مَنْ هَذَا الرَّجُل؟\n - Who is this man?"
            },
            {
                id: 3,
                title: "The Meaning of ما",
                content: "ما is used to ask questions in Arabic. It is equivalent to 'what' in English. Questions using ما cannot be answered with a simple 'yes' or 'no'.",
                example: "مَا هَذَا الْكِتَابُ؟\n - What is this book?"
            },
            {
                id: 4,
                title: "The Meaning of أ",
                content: "أ is used to form yes-or-no questions, whether about an intelligent being or a thing.",
                example: "نَعَمْ، أهَذَا كِتَابٌ؟\n - Yes, is this a book?"
            }
        ],
        vocabulary: [
            {
                id: 1,
                word: "قَمِيصٌ",
                pronunciation: "qamīṣ",
                meaning: "Shirt",
                example: "هذا قَمِيصٌ جَدِيدٌ - This is a new shirt."
            },
            {
                id: 2,
                word: "حِمَارٌ",
                pronunciation: "ḥimār",
                meaning: "Donkey",
                example: "هذا حِمَارٌ صَغِيرٌ - This is a small donkey."
            },
            {
                id: 3,
                word: "مَسْجِدٌ",
                pronunciation: "masjid",
                meaning: "Masjid",
                example: "هذا مَسْجِدٌ كَبِيرٌ - This is a big masjid."
            },
            {
                id: 4,
                word: "دِيكٌ",
                pronunciation: "dīk",
                meaning: "Rooster",
                example: "هذا دِيكٌ جَمِيلٌ - This is a beautiful rooster."
            },
            {
                id: 5,
                word: "كَلْبٌ",
                pronunciation: "kalb",
                meaning: "Dog",
                example: "هذا كَلْبٌ وَفِيٌّ - This is a loyal dog."
            },
            {
                id: 6,
                word: "قِطٌّ",
                pronunciation: "qiṭṭ",
                meaning: "Cat",
                example: "هذا قِطٌّ لَطِيفٌ - This is a cute cat."
            },
            {
                id: 7,
                word: "حِصَانٌ",
                pronunciation: "ḥiṣān",
                meaning: "Horse",
                example: "هذا حِصَانٌ سَرِيعٌ - This is a fast horse."
            },
            {
                id: 8,
                word: "وَلَدٌ",
                pronunciation: "walad",
                meaning: "Boy",
                example: "هذا وَلَدٌ صَغِيرٌ - This is a little boy."
            },
            {
                id: 9,
                word: "بَيْتٌ",
                pronunciation: "bayt",
                meaning: "House",
                example: "هذا بَيْتٌ جَمِيلٌ - This is a beautiful house."
            },
            {
                id: 10,
                word: "تَاجِرٌ",
                pronunciation: "tājir",
                meaning: "Businessman",
                example: "هذا تَاجِرٌ نَاجِحٌ - This is a successful businessman."
            },
            {
                id: 11,
                word: "مُدَرِّسٌ",
                pronunciation: "mudarris",
                meaning: "Teacher",
                example: "هذا مُدَرِّسٌ مُتَمَيِّزٌ - This is an excellent teacher."
            },
            {
                id: 12,
                word: "رَجُلٌ",
                pronunciation: "rajul",
                meaning: "Man",
                example: "هذا رَجُلٌ قَوِيٌّ - This is a strong man."
            },
            {
                id: 13,
                word: "مَكْتَبٌ",
                pronunciation: "maktab",
                meaning: "Writing table",
                example: "هذا مَكْتَبٌ مُرَتَّبٌ - This is a tidy desk."
            },
            {
                id: 14,
                word: "طَبِيبٌ",
                pronunciation: "ṭabīb",
                meaning: "Doctor",
                example: "هذا طَبِيبٌ مَشْهُورٌ - This is a famous doctor."
            },
            {
                id: 15,
                word: "سَرِيرٌ",
                pronunciation: "sarīr",
                meaning: "Bed",
                example: "هذا سَرِيرٌ مُرِيحٌ - This is a comfortable bed."
            },
            {
                id: 16,
                word: "جَمَلٌ",
                pronunciation: "jamal",
                meaning: "Camel",
                example: "هذا جَمَلٌ قَوِيٌّ - This is a strong camel."
            },
            {
                id: 17,
                word: "قَلَمٌ",
                pronunciation: "qalam",
                meaning: "Pen",
                example: "هذا قَلَمٌ جَدِيدٌ - This is a new pen."
            },
            {
                id: 18,
                word: "بَابٌ",
                pronunciation: "bāb",
                meaning: "Door",
                example: "هذا بَابٌ مَفْتُوحٌ - This is an open door."
            },
            {
                id: 19,
                word: "طَالِبٌ",
                pronunciation: "ṭālib",
                meaning: "Student",
                example: "هذا طَالِبٌ مُجْتَهِدٌ - This is a hardworking student."
            },
            {
                id: 20,
                word: "كُرْسِيٌّ",
                pronunciation: "kursiyy",
                meaning: "Chair",
                example: "هذا كُرْسِيٌّ مُرِيحٌ - This is a comfortable chair."
            },
            {
                id: 21,
                word: "مِفْتَاحٌ",
                pronunciation: "miftāḥ",
                meaning: "Key",
                example: "هذا مِفْتَاحٌ ذَهَبِيٌّ - This is a golden key."
            },
            {
                id: 22,
                word: "نَجْمٌ",
                pronunciation: "najm",
                meaning: "Star",
                example: "هذا نَجْمٌ لَامِعٌ - This is a shining star."
            },
            {
                id: 23,
                word: "مِنْدِيلٌ",
                pronunciation: "mindīl",
                meaning: "Handkerchief",
                example: "هذا مِنْدِيلٌ نَظِيفٌ - This is a clean handkerchief."
            },
            {
                id: 24,
                word: "كِتَابٌ",
                pronunciation: "kitāb",
                meaning: "Book",
                example: "هذا كِتَابٌ مُفِيدٌ - This is a useful book."
            }
        ]
    },
    {
        id: 2,
        title: "Lesson 2",
        description: "This lesson introduces the basics of 'ذَلِكَ'.",
        infoText: "Learn about demonstrative pronouns in Arabic.",
        to: "/lesson-2",
        mainLesson: {
            title: "Understanding ذَلِكَ (That)",
            content: "ذَلِكَ is a demonstrative pronoun used to refer to masculine singular objects that are away from the speaker. It is equivalent to 'that' in English when referring to masculine objects. It is called اِسْمُ الْإِشَارَة, and the thing it refers to is called اَلْمُشَارُ إلَيْه.",
            example: "ذَلِكَ مَسْجِدٌُ\n - That is a Mosque"
        },
        subLessons: [
            {
                id: 1,
                title: "The Meaning of و",
                content: "و is used to connect two nouns or pronouns. It is equivalent to 'and' in English. و is written close to the next word without a gap.",
                example: "جَاءَ سَعِيْدٌ وَفَارُوْقٌ \n - Saeed and Farooq came"
            },
        ],
        vocabulary: [
            {
                id: 1,
                word: "لَبَنٌ",
                pronunciation: "laban",
                meaning: "Milk",
                example: "هذا لَبَنٌ طَازِجٌ - This is fresh milk."
            },
            {
                id: 2,
                word: "سُكَّرٌ",
                pronunciation: "sukkar",
                meaning: "Sugar",
                example: "هذا سُكَّرٌ حُلْوٌ - This is sweet sugar."
            },
            {
                id: 3,
                word: "إمَامٌ",
                pronunciation: "imām",
                meaning: "Imam",
                example: "هذا إمَامٌ صَالِحٌ - This is a righteous imam."
            },
            {
                id: 4,
                word: "حَجَرٌ",
                pronunciation: "ḥajar",
                meaning: "Stone",
                example: "هذا حَجَرٌ كَبِيرٌ - This is a big stone."
            }
        ]
    }
];
