
export const serializeNonPOJOs = (object: any) => {
    return structuredClone(object);
}