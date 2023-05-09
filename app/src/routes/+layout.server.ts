import { redirect } from "@sveltejs/kit";
import type { Record } from "pocketbase";

let usernames: string[];

export const load = async ({ locals }) => {

    if (locals.user) {
        
        if (!locals.pb.authStore.isValid) {
            throw redirect(302, "/login")
        }

        const users: Record[] = await locals.pb.collection("users").getFullList({
            sort: "-username",
        })

        usernames = users.map((user: Record) => user.username)
        
        return {
            user: locals.user,
            usernames
        }

    } else {
        return {
            user: undefined
        }
    }

}

