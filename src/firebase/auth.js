import {auth} from './config';
import firebase from "@firebase/app";

export const doSignInWithEmailAndPassword = (email, password, thenFunction, catchFunction) => {
    auth.setPersistence(firebase.auth.Auth.Persistence.SESSION)
        .then(() => {
            return auth.signInWithEmailAndPassword(email, password).then(thenFunction).catch(catchFunction);
        })
        .catch((error) => {
            console.log(error.code, error.message)
        });
};

export const signInAnonymously = () =>
    signInAnonymously();

export const doSignOut = () =>
    auth.signOut();