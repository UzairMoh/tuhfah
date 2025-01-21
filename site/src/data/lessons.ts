export enum SubLessonType {
    DEFAULT = 'DEFAULT',
    TABLE = 'TABLE'
}

export interface SubLesson {
    id: number;
    title: string;
    content: string;
    type?: SubLessonType;
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
    mainLesson: MainLesson;
    subLessons: SubLesson[];
    vocabulary: Vocabulary[];
}

export const lessons: Lesson[] = [
    {
        id: 1,
        title: "Lesson 1",
        description: "To understand the basics of 'هذا'.",
        infoText: "Learn about demonstrative pronouns in Arabic.",
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
        description: "To understand the basics of 'ذَلِكَ'.",
        infoText: "Learn about demonstrative pronouns in Arabic.",
        mainLesson: {
            title: "Understanding ذَلِكَ (That)",
            content: "ذَلِكَ is a demonstrative pronoun used to refer to masculine singular objects that are away from the speaker. It is equivalent to 'that' in English when referring to masculine objects. It is called اِسْمُ الْإِشَارَة, and the thing it refers to is called اَلْمُشَارُ إلَيْه.",
            example: "ذَلِكَ مَسْجِدٌُ\n - That is a Mosque"
        },
        subLessons: [
            {
                id: 1,
                title: "The Meaning of و",
                content: "و is used to connect two nouns or pronouns. It has many meaning its most common meaning is 'and' in English. و is written close to the next word without a gap.",
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
    },
    {
        id: 3,
        title: "Lesson 3",
        description: "To understand the basics of 'ال'.",
        infoText: "Learn about making common nouns specific in Arabic.",
        mainLesson: {
            title: "Understanding ال (The)",
            content: "In Arabic, 'ال' is added to common nouns to make them specific, similar to 'the' in English. 'ال' has various meanings, but its primary purpose here is to specify nouns. The Hamzah (ء) in 'ال' is only pronounced if it is the first word in a sentence. However, when preceded by another word, the Hamzah is silent. To indicate this, the symbol ٱ (Hamzah tul-Wasl) is placed on top of the Hamzah.",
            example: "المسجد\n - The mosque"
        },
        subLessons: [
            {
                id: 1,
                title: "Solar and Lunar Letters",
                type: SubLessonType.TABLE,
                content: "The Arabic alphabet is divided into two categories: solar letters and lunar letters. When 'ال' precedes a solar letter, the 'ل' is not pronounced, and the sound merges with the solar letter. When 'ال' precedes a lunar letter, the 'ل' is pronounced. This distinction affects pronunciation but not spelling.",
                example: "ت، ث، د، ذ، ر، ز، س، ش، ص، ض، ط، ظ، ل، ن\nا، ب، ج، ح، خ، ع، غ، ف، ق، ك، م، هـ، و، ي"
            }
        ],
        vocabulary: [
            {
                id: 1,
                word: "فَقِيْرٌ",
                pronunciation: "faqīr",
                meaning: "Bankrupt",
                example: "الرَّجُلُ فَقِيْرٌ - The man is bankrupt"
            },
            {
                id: 2,
                word: "غَنِيٌّ",
                pronunciation: "ghaniyy",
                meaning: "Rich",
                example: "هُوَ رَجُلٌ غَنِيٌّ - He is a rich man"
            },
            {
                id: 3,
                word: "قَصِيْرٌ",
                pronunciation: "qaṣīr",
                meaning: "Short",
                example: "الطَّرِيْقُ قَصِيْرٌ - The road is short"
            },
            {
                id: 4,
                word: "طَوِيْلٌ",
                pronunciation: "ṭawīl",
                meaning: "Tall",
                example: "البُرْجُ طَوِيْلٌ - The tower is tall"
            },
            {
                id: 5,
                word: "حَارٌ",
                pronunciation: "ḥārr",
                meaning: "Hot",
                example: "الطَّعَامُ حَارٌ - The food is hot"
            },
            {
                id: 6,
                word: "بَارِدٌ",
                pronunciation: "bārid",
                meaning: "Cold",
                example: "المَاءُ بَارِدٌ - The water is cold"
            },
            {
                id: 7,
                word: "وَاقِفٌ",
                pronunciation: "wāqif",
                meaning: "Standing",
                example: "الرَّجُلُ وَاقِفٌ - The man is standing"
            },
            {
                id: 8,
                word: "جَالِسٌ",
                pronunciation: "jālis",
                meaning: "Sitting",
                example: "الطَّالِبُ جَالِسٌ - The student is sitting"
            },
            {
                id: 9,
                word: "قَدِيْمٌ",
                pronunciation: "qadīm",
                meaning: "Old",
                example: "البَيْتُ قَدِيْمٌ - The house is old"
            },
            {
                id: 10,
                word: "جَدِيْدٌ",
                pronunciation: "jadīd",
                meaning: "New",
                example: "الكِتَابُ جَدِيْدٌ - The book is new"
            },
            {
                id: 11,
                word: "بَعِيْدٌ",
                pronunciation: "baʿīd",
                meaning: "Far",
                example: "المَسْجِدُ بَعِيْدٌ - The mosque is far"
            },
            {
                id: 12,
                word: "قَرِيْبٌ",
                pronunciation: "qarīb",
                meaning: "Near",
                example: "السُّوْقُ قَرِيْبٌ - The market is near"
            },
            {
                id: 13,
                word: "وَسِخٌ",
                pronunciation: "wasikh",
                meaning: "Dirty",
                example: "الثَّوْبُ وَسِخٌ - The clothes are dirty"
            },
            {
                id: 14,
                word: "نَظِيْفٌ",
                pronunciation: "naẓīf",
                meaning: "Clean",
                example: "البَيْتُ نَظِيْفٌ - The house is clean"
            },
            {
                id: 15,
                word: "كَبِيْرٌ",
                pronunciation: "kabīr",
                meaning: "Big",
                example: "المَسْجِدُ كَبِيْرٌ - The mosque is big"
            },
            {
                id: 16,
                word: "صَغِيْرٌ",
                pronunciation: "ṣaghīr",
                meaning: "Small",
                example: "البَيْتُ صَغِيْرٌ - The house is small"
            },
            {
                id: 17,
                word: "ثَقِيْلٌ",
                pronunciation: "thaqīl",
                meaning: "Heavy",
                example: "الحَقِيْبَةُ ثَقِيْلَةٌ - The bag is heavy"
            },
            {
                id: 18,
                word: "خَفِيْفٌ",
                pronunciation: "khafīf",
                meaning: "Light",
                example: "الكِتَابُ خَفِيْفٌ - The book is light"
            },
            {
                id: 19,
                word: "مَاءٌ",
                pronunciation: "māʾ",
                meaning: "Water",
                example: "المَاءُ بَارِدٌ - The water is cold"
            },
            {
                id: 20,
                word: "وَرَقٌ",
                pronunciation: "waraq",
                meaning: "Paper",
                example: "الوَرَقُ أَبْيَضُ - The paper is white"
            },
            {
                id: 21,
                word: "جَمِيْلٌ",
                pronunciation: "jamīl",
                meaning: "Beautiful",
                example: "البَيْتُ جَمِيْلٌ - The house is beautiful"
            },
            {
                id: 22,
                word: "تُفَّاحٌ",
                pronunciation: "tuffāḥ",
                meaning: "Apple",
                example: "التُّفَّاحُ أَحْمَرُ - The apple is red"
            },
            {
                id: 23,
                word: "حُلْوٌ",
                pronunciation: "ḥulw",
                meaning: "Sweet",
                example: "العَسَلُ حُلْوٌ - The honey is sweet"
            },
            {
                id: 24,
                word: "دُكَّانٌ",
                pronunciation: "dukkān",
                meaning: "Shop",
                example: "الدُّكَّانُ مَفْتُوْحٌ - The shop is open"
            },
            {
                id: 25,
                word: "قَمَرٌ",
                pronunciation: "qamar",
                meaning: "Moon",
                example: "القَمَرُ مُنِيْرٌ - The moon is bright"
            },
            {
                id: 26,
                word: "مَرِيْضٌ",
                pronunciation: "marīḍ",
                meaning: "Sick",
                example: "الوَلَدُ مَرِيْضٌ - The boy is sick"
            },
            {
                id: 27,
                word: "مَكْسُوْرٌ",
                pronunciation: "maksūr",
                meaning: "Broken",
                example: "البَابُ مَكْسُوْرٌ - The door is broken"
            },
            {
                id: 28,
                word: "مَفْتُوْحٌ",
                pronunciation: "maftūḥ",
                meaning: "Open",
                example: "النَّافِذَةُ مَفْتُوْحَةٌ - The window is open"
            },
            {
                id: 29,
                word: "جَنَّةٌ",
                pronunciation: "jannah",
                meaning: "Garden",
                example: "الجَنَّةُ جَمِيْلَةٌ - The garden is beautiful"
            },
            {
                id: 30,
                word: "هَوَاءٌ",
                pronunciation: "hawāʾ",
                meaning: "Air",
                example: "الهَوَاءُ نَظِيْفٌ - The air is clean"
            },
            {
                id: 31,
                word: "خُبْزٌ",
                pronunciation: "khubz",
                meaning: "Bread",
                example: "الخُبْزُ طَازِجٌ - The bread is fresh"
            },
            {
                id: 32,
                word: "يَدٌ",
                pronunciation: "yad",
                meaning: "Hand",
                example: "اليَدُ نَظِيْفَةٌ - The hand is clean"
            },
            {
                id: 33,
                word: "عَيْنٌ",
                pronunciation: "ʿayn",
                meaning: "Eye",
                example: "العَيْنُ جَمِيْلَةٌ - The eye is beautiful"
            },
            {
                id: 34,
                word: "تَاجِرٌ",
                pronunciation: "tājir",
                meaning: "Businessman",
                example: "التَّاجِرُ غَنِيٌّ - The businessman is rich"
            },
            {
                id: 35,
                word: "غَدَاءٌ",
                pronunciation: "ghadāʾ",
                meaning: "Lunch",
                example: "الغَدَاءُ جَاهِزٌ - The lunch is ready"
            },
            {
                id: 36,
                word: "ثَوْبٌ",
                pronunciation: "thawb",
                meaning: "Cloth",
                example: "الثَّوْبُ جَدِيْدٌ - The cloth is new"
            },
            {
                id: 37,
                word: "فَمٌ",
                pronunciation: "fam",
                meaning: "Mouth",
                example: "الفَمُ كَبِيْرٌ - The mouth is big"
            },
            {
                id: 38,
                word: "ذَهَبٌ",
                pronunciation: "dhahab",
                meaning: "Gold",
                example: "الذَّهَبُ غَالٍ - The gold is expensive"
            },
            {
                id: 39,
                word: "زَهْرَةٌ",
                pronunciation: "zahrah",
                meaning: "Flower",
                example: "الزَّهْرَةُ جَمِيْلَةٌ - The flower is beautiful"
            },
            {
                id: 40,
                word: "صَدْرٌ",
                pronunciation: "ṣadr",
                meaning: "Chest",
                example: "الصَّدْرُ قَوِيٌّ - The chest is strong"
            },
            {
                id: 41,
                word: "سَمَكٌ",
                pronunciation: "samak",
                meaning: "Fish",
                example: "السَّمَكُ طَازِجٌ - The fish is fresh"
            },
            {
                id: 42,
                word: "ضَيْفٌ",
                pronunciation: "ḍayf",
                meaning: "Guest",
                example: "الضَّيْفُ كَرِيْمٌ - The guest is generous"
            },
            {
                id: 43,
                word: "ظَهْرٌ",
                pronunciation: "ẓahr",
                meaning: "Back",
                example: "الظَّهْرُ قَوِيٌّ - The back is strong"
            },
            {
                id: 44,
                word: "لَحْمٌ",
                pronunciation: "laḥm",
                meaning: "Meat",
                example: "اللَّحْمُ طَازِجٌ - The meat is fresh"
            }
        ]
    }
];
