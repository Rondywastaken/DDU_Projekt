import { v4 as uuidv4 } from 'uuid';
import { goto } from '$app/navigation';

export const serializeNonPOJOs = (object: any) => {
    return structuredClone(object);
}

export const navigateEventPage = () => {
    console.log("hello")
    const id = uuidv4()
    goto(`/events/${id}`)
} 


