import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyCyTNNHIHuv4zLuj88sEwS4sJ120xCBNbA',
  authDomain: 'my-subscriptions-90de4.firebaseapp.com',
  projectId: 'my-subscriptions-90de4',
  storageBucket: 'my-subscriptions-90de4.appspot.com',
  messagingSenderId: '854234988784',
  appId: '1:854234988784:web:1ef50dd49208ea54128235'
}

const db = firebase.initializeApp(firebaseConfig)

export default db.firestore()
