export enum VerbTense {
    PAST = "past",
    PRESENT = "present",
    FUTURE = "future"
}

export interface VerbForm {
    complete: string;
    base: string;
    prefix?: string;
    ending?: string;
    person: string;
    translation: string;
}

export interface SarfTable {
    id: string;
    title: string;
    description: string;
    tense: VerbTense;
    verbForms: VerbForm[];
}

import { faalaPast, nassaraPast } from './tablesByTense/pastTense';
import { faalaFuture } from './tablesByTense/futureTense';

export const sarfTables: SarfTable[] = [
    {
        id: 'faala',
        title: 'فَعَلَ',
        description: 'Practice the past tense conjugation of the فَعَلَ verb pattern',
        tense: VerbTense.PAST,
        verbForms: faalaPast
    },
    {
        id: 'nassara',
        title: 'نَصَرَ',
        description: 'Practice the past tense conjugation of the نَصَرَ verb pattern',
        tense: VerbTense.PAST,
        verbForms: nassaraPast
    },
    {
        id: 'faala-future',
        title: 'يَفْعَلُ',
        description: 'Practice the future tense conjugation of the فَعَلَ verb pattern',
        tense: VerbTense.FUTURE,
        verbForms: faalaFuture
    },
];

export function getSarfTable(id: string): SarfTable | undefined {
    return sarfTables.find(table => table.id === id);
}