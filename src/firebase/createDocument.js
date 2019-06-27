import { firestore } from "./config";

export const createDocument = (collection, object) => {
    return firestore.collection(collection)
        .add(object);
};