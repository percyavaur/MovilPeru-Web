import {firestore} from "./config";

export const updateDocument = (collection, id, object) => {
    firestore.collection(collection)
        .doc(id)
        .update(object);
};