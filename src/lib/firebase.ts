import { initializeApp } from "firebase/app";
import { ref, getStorage, uploadBytes, getDownloadURL } from "firebase/storage";
import { toast } from "react-hot-toast";

const firebaseConfig = {
  apiKey: "AIzaSyDAzs6eo-sUHTF9xfdx3J1V0w297MFkA4Q",
  authDomain: "portfolio-template-c4db5.firebaseapp.com",
  projectId: "portfolio-template-c4db5",
  storageBucket: "portfolio-template-c4db5.appspot.com",
  messagingSenderId: "683853928967",
  appId: "1:683853928967:web:b772097c68de56b162e8a2",
  measurementId: "G-G9T9VFFH6Z",
};

const app = initializeApp(firebaseConfig);

export const fireStore = getStorage(app);

export const uploadImage = async (
  imageName: string,
  image: File
): Promise<string | null> => {
  try {
    const imageRef = ref(
      fireStore,
      `images/${imageName + crypto.randomUUID()}`
    );

    await uploadBytes(imageRef, image);

    const url = await getDownloadURL(imageRef);

    return url;
  } catch (error) {
    toast.error("Something went wrong!");
    console.error(error);
    return null;
  }
};
