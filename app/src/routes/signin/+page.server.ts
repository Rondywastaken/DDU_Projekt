import { fail, redirect } from "@sveltejs/kit";
import { ClientResponseError } from "pocketbase";

export const actions = {
    signin: async ({ locals, request }) => {
        const formData = await request.formData();
        const data = Object.fromEntries([...formData]);

        console.log(data)

        try {
            const authUser = await locals.pb.collection("users").authWithPassword(
                data.email.toString(), data.password.toString());
            console.log("user has been authenticated", authUser);
            
            
        } catch (err) {
            if (err instanceof ClientResponseError) {
                const errorTrue = true;
                return fail(400, {errorTrue});
                
            }
            
        } 
        throw redirect(303, '/dashboard');
    }
}