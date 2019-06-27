import {firestore} from "./config";

export const setDocument = (collection, id, object, marge = true) => {
    firestore.collection(collection)
        .doc(id)
        .set(object, {merge: marge});
};