// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage, ref, uploadBytes,getDownloadURL } from "firebase/storage";
import { getFirestore, collection, addDoc, getDocs } from "firebase/firestore";



const firebaseConfig = {
  apiKey: "AIzaSyD4YCUKpSqM7MVRhtmNrEHv3g9q83N3wyM",
  authDomain: "onlyimageurl.firebaseapp.com",
  projectId: "onlyimageurl",
  storageBucket: "onlyimageurl.appspot.com",
  messagingSenderId: "168054973384",
  appId: "1:168054973384:web:a43b58551de845fb3e56fd"
};

// Initialize Firebase

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
const db = getFirestore(app);

//url create work in firebase//

export async function urlGetNodeWork (info) {
try {
    const {img} = info
    // step 1//
    const storageRef = ref(storage, `adds - ${img.name}`);
    await uploadBytes(storageRef, img)
    //step 2//
    const url = await  getDownloadURL(storageRef)
    //step 3 //
    await addDoc(collection(db, "image"), {
       image: url
      });

   
      alert('working success')
    
      return url
    
} catch (e) {
    alert(e.message)
    throw e;
    
}
}

// export async function getUrl () {
// const querySnapshot = await getDocs(collection(db,"image"));
//   const ADD =[]

//   querySnapshot.forEach((doc) => {
//     // doc.data() is never undefined for query doc snapshots
//     const ads = doc.data();
//     ads.id = doc.id
    
//     ADD.push(ads)
 
//   });

//   return ADD
// }



//-------------------------------------------------------------//