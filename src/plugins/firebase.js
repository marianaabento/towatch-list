import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyAwhUUV1MP1Uhhuhx_pLNSRsmNS8mhs1Gw",
    authDomain: "towatch-list.firebaseapp.com",
    projectId: "towatch-list",
    storageBucket: "towatch-list.appspot.com",
    messagingSenderId: "1080232283834",
    appId: "1:1080232283834:web:89a1b8d9cf62893f59bc83"
};

firebase.initializeApp(firebaseConfig)

const db = firebase.firestore()
const auth = firebase.auth()
const googleProvider = new firebase.auth.GoogleAuthProvider()

const profileCollection = db.collection('profile')
const tasksCollection = db.collection('tasks')

export {
    db, auth, profileCollection, tasksCollection, googleProvider
}