export interface VerbForm {
    complete: string;
    base: string;
    ending: string;
    person: string;
    translation: string;
}

export interface SarfTable {
    id: string;
    title: string;
    description: string;
    verbForms: VerbForm[];
}

export const faalaPattern: VerbForm[] = [
    { complete: 'فَعَلَ', base: 'فَعَ', ending: 'لَ', person: 'He (3rd person masculine singular)', translation: 'He did' },
    { complete: 'فَعَلا', base: 'فَعَ', ending: 'لا', person: 'They (dual masculine)', translation: 'They (2) did' },
    { complete: 'فَعَلُو', base: 'فَعَ', ending: 'لُو', person: 'They (3rd person masculine plural)', translation: 'They (all) did' },
    { complete: 'فَعَلَتْ', base: 'فَعَ', ending: 'لَتْ', person: 'She (3rd person feminine singular)', translation: 'She did' },
    { complete: 'فَعَلَتَا', base: 'فَعَ', ending: 'لَتَا', person: 'They (dual feminine)', translation: 'They (2 females) did' },
    { complete: 'فَعَلْنَ', base: 'فَعَ', ending: 'لْنَ', person: 'They (3rd person feminine plural)', translation: 'They (females) did' },
    { complete: 'فَعَلْتَ', base: 'فَعَ', ending: 'لْتَ', person: 'You (2nd person masculine singular)', translation: 'You did' },
    { complete: 'فَعَلتُمَا', base: 'فَعَ', ending: 'لتُمَا', person: 'You (dual)', translation: 'You (2) did' },
    { complete: 'فَعَلْتُمْ', base: 'فَعَ', ending: 'لْتُمْ', person: 'You (2nd person masculine plural)', translation: 'You (all) did' },
    { complete: 'فَعَلْتِ', base: 'فَعَ', ending: 'لْتِ', person: 'You (2nd person feminine singular)', translation: 'You (female) did' },
    { complete: 'فَعَلْتُمَا', base: 'فَعَ', ending: 'لْتُمَا', person: 'You (dual feminine)', translation: 'You (2 females) did' },
    { complete: 'فَعَلْتُنَّ', base: 'فَعَ', ending: 'لْتُنَّ', person: 'You (2nd person feminine plural)', translation: 'You (females) did' },
    { complete: 'فَعَلْتُ', base: 'فَعَ', ending: 'لْتُ', person: 'I (1st person singular)', translation: 'I did' },
    { complete: 'فَعَلْنَا', base: 'فَعَ', ending: 'لْنَا', person: 'We (1st person plural)', translation: 'We did' },
];

export const nassaraPattern: VerbForm[] = [
    { complete: 'نَصَرَ', base: 'نَصَ', ending: 'رَ', person: 'He (3rd person masculine singular)', translation: 'He helped' },
    { complete: 'نَصَرَا', base: 'نَصَ', ending: 'رَا', person: 'They (dual masculine)', translation: 'They (2) helped' },
    { complete: 'نَصَرُوا', base: 'نَصَ', ending: 'رُوا', person: 'They (3rd person masculine plural)', translation: 'They (all) helped' },
    { complete: 'نَصَرَتْ', base: 'نَصَ', ending: 'رَتْ', person: 'She (3rd person feminine singular)', translation: 'She helped' },
    { complete: 'نَصَرَتَا', base: 'نَصَ', ending: 'رَتَا', person: 'They (dual feminine)', translation: 'They (2 females) helped' },
    { complete: 'نَصَرْنَ', base: 'نَصَ', ending: 'رْنَ', person: 'They (3rd person feminine plural)', translation: 'They (females) helped' },
    { complete: 'نَصَرْتَ', base: 'نَصَ', ending: 'رْتَ', person: 'You (2nd person masculine singular)', translation: 'You helped' },
    { complete: 'نَصَرْتُمَا', base: 'نَصَ', ending: 'رْتُمَا', person: 'You (dual)', translation: 'You (2) helped' },
    { complete: 'نَصَرْتُمْ', base: 'نَصَ', ending: 'رْتُمْ', person: 'You (2nd person masculine plural)', translation: 'You (all) helped' },
    { complete: 'نَصَرْتِ', base: 'نَصَ', ending: 'رْتِ', person: 'You (2nd person feminine singular)', translation: 'You (female) helped' },
    { complete: 'نَصَرْتُمَا', base: 'نَصَ', ending: 'رْتُمَا', person: 'You (dual feminine)', translation: 'You (2 females) helped' },
    { complete: 'نَصَرْتُنَّ', base: 'نَصَ', ending: 'رْتُنَّ', person: 'You (2nd person feminine plural)', translation: 'You (females) helped' },
    { complete: 'نَصَرْتُ', base: 'نَصَ', ending: 'رْتُ', person: 'I (1st person singular)', translation: 'I helped' },
    { complete: 'نَصَرْنَا', base: 'نَصَ', ending: 'رْنَا', person: 'We (1st person plural)', translation: 'We helped' },
];

export const sarfTables: SarfTable[] = [
    {
        id: 'faala',
        title: 'فَعَلَ',
        description: 'Practice the past tense conjugation of the فَعَلَ verb pattern',
        verbForms: faalaPattern
    },
    {
        id: 'nassara',
        title: 'نَصَرَ',
        description: 'Practice the past tense conjugation of the نَصَرَ verb pattern',
        verbForms: nassaraPattern
    }
];

export function getSarfTable(id: string): SarfTable | undefined {
    return sarfTables.find(table => table.id === id);
}

export default faalaPattern;