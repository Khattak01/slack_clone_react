import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyCnFBbY_E7oSDq7eBZ63o1UHra6ypp2FzQ",
    authDomain: "slack-clone-react-48cb5.firebaseapp.com",
    databaseURL: "https://slack-clone-react-48cb5.firebaseio.com",
    projectId: "slack-clone-react-48cb5",
    storageBucket: "slack-clone-react-48cb5.appspot.com",
    messagingSenderId: "411934952933",
    appId: "1:411934952933:web:496b994c6fb2fdbde2b30c",
    measurementId: "G-N5JDHJ98L9"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()

export {auth,provider};
export default db;