import type { SpecialProject } from "./SpecialProject";

export interface ExpItem {
    company: string;
    title: string;
    duration: string;
    points: string[];
    specialProject: SpecialProject | null;
}