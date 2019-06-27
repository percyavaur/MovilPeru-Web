import {createDocument} from "./createDocument";
import {updateDocument} from "./updateDocument";
import {deleteDocument} from "./deleteDocument";
import {setDocument} from "./setDocument";
import {fetchCollection} from "./fetchCollection";
import {auth, firestore, server, storage, version} from "./config";

export {
    createDocument,
    updateDocument,
    deleteDocument,
    fetchCollection,
    setDocument,
    firestore,
    storage,
    auth,
    server,
    version,
}