import firebase from "@firebase/app"
import {snapshotToArray} from "../utils/snapshotToArray";

export const fetchCollection = (collection, func, whereClauses = []) => {
    let collectionRef = firebase.firestore().collection(collection);

    whereClauses.forEach(whereClause => collectionRef = collectionRef.where(whereClause.field, whereClause.operation, whereClause.value));

    collectionRef
        .onSnapshot(snapshot => {
                const data = snapshotToArray(snapshot);
                return func(data);
            }
        );
};