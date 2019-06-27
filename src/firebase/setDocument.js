import firebase from "@firebase/app";

export const setDocument = (collection, id, object, marge = true) => {
    return firebase.firestore()
        .collection(collection)
        .doc(id)
        .set(object, {merge: marge});
};