// importere pocketbase sdk.
import PocketBase from "pocketbase";

// Handle funktionen kører på alle sider. Skal bruges til SSR, da den loader hver gang der bliver lavet en request.
export const handle = async ({ event, resolve }) => { 

    // Laver en ny pocketbase instans, som kan bruges til at hente data fra databasen.
    event.locals.pb = new PocketBase("http://127.0.0.1:8090");

    // Henter data fra cookie (bruger). Hvis der ikke er en cookie, så bliver den sat til en tom string.
    event.locals.pb.authStore.loadFromCookie(event.request.headers.get("cookie") || "");

    if (event.locals.pb.authStore.isValid) {

        // forkorter så der ikke behøves at skrives event.locals.pb.authStore.model hele tiden
        // model er en verificeret token, altså en bruger som allerede er logget ind
        event.locals.user = event.locals.pb.authStore.model;

        // Hvis brugeren er logget ind, så bliver der hentet en ny token, så brugeren ikke bliver logget ud.
        try {
            await event.locals.pb.collection("users").authRefresh();
        } 
        catch (_) {
            // Hvis der er en fejl, så bliver brugeren logget ud.
            event.locals.pb.authStore.clear();

        }
    }
    
    // venter på at resolve funktionen er færdig med at køre.
    const response = await resolve(event);

    // Et svar til resolve funktionen.Sætter cookie til at være den nye token. 
    response.headers.set("set-cookie", event.locals.pb.authStore.exportToCookie());

    // returnerer svar til resolve funktionen.
    return response;
    

}
