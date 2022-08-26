import app from './app.js'
import {getFirestore, collection, addDoc, getDocs } from 'https://www.gstatic.com/firebasejs/9.9.3/firebase-firestore.js'

export async function SubscribetoHellfireClub(subscription) {
 const db = getFirestore(app)
 const HellfireClubcollection = collection(db, 'Hellfire-clube')
 const docRef = await addDoc(HellfireClubcollection, subscription)
 return docRef.id
}

export async function getHellfireClubSubscriptions () {
    const db = getFirestore(app)
    const HellfireClubcollection = collection(db, 'Hellfire-clube')
    const HellfireClubcollectionSnapshot = await getDocs(HellfireClubcollection);
    const subscriptions = HellfireClubcollectionSnapshot.docs.map(doc => doc.data());
    return subscriptions;
}


 

