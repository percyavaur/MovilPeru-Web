import firebase from "@firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const hostName = window.location.hostname;
let getServer;
let getVersion;

const productionConfig = {
    //Your Production API Key here
};

const devConfig = {
    apiKey: "AIzaSyDLieBYpSFU6fyL6EPz4hzEhevkOda27es",
    authDomain: "movilperu.firebaseapp.com",
    databaseURL: "https://movilperu.firebaseio.com",
    projectId: "movilperu",
    storageBucket: "movilperu.appspot.com",
    messagingSenderId: "135498032188",
    appId: "1:135498032188:web:88106717a56fe17b"
};

if (hostName === "url-prod") {
    getVersion = 0.1;
    getServer = "server-prod";
    firebase.initializeApp(productionConfig);
} else {
    getVersion = 0.1;
    getServer = "server-dev";
    firebase.initializeApp(devConfig);
}

let pageLoaded = false;

firebase.firestore()
    .collection("versions")
    .onSnapshot(() => {
        pageLoaded && document.location.reload(true);
        pageLoaded = true;
    });


const firestore = firebase.firestore();
const storage = firebase.storage();
const auth = firebase.auth();
const server = getServer;
const version = getVersion;

export {
    server,
    storage,
    firestore,
    auth,
    version,
};
