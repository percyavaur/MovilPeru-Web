import {firestore} from "./config";

export const deleteDocument = (collection, id) => {
    firestore.collection(collection)
        .doc(id)
        .delete();
};