import { writable } from "svelte/store";

const initialAddedMail: string[] = [];
export const addedMail = writable<string[]>(initialAddedMail);