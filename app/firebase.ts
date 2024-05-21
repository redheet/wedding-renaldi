import { initializeApp } from "firebase/app";
import {
  getFirestore,
  addDoc,
  collection,
  serverTimestamp,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAKtTXwBLadKMe27bNW6Qwcu7yswunaCus",
  authDomain: "wedding-renaldi.firebaseapp.com",
  projectId: "wedding-renaldi",
  storageBucket: "wedding-renaldi.appspot.com",
  messagingSenderId: "882776683297",
  appId: "1:882776683297:web:28df08da25e0a45b4c4460",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function sendReservation(
  name: string,
  wish: string,
  presence: string,
  numOfPeople: string | null,
  waktuKehadiran: string | null
) {
  try {
    await addDoc(collection(db, "reservation"), {
      name: name,
      wish: wish,
      presence: presence,
      time: serverTimestamp(),
      numOfPeople: numOfPeople,
      waktuKehadiran: waktuKehadiran,
    });
  } catch (e) {
    alert(e);
  }
}

export { db, sendReservation };
