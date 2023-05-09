import type { Writable } from "svelte/store";
import { writable } from "svelte/store";

export const userData: Writable<string[]> = writable([])

if (typeof window !== "undefined") {
    const storage = window.localStorage

    userData.set(JSON.parse(storage.getItem("userData") || "[]"))

    userData.subscribe((data) => {
        storage.setItem("userData", JSON.stringify(data))
    })
}

