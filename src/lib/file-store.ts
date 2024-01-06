import {
  ref,
  getStorage,
  uploadBytes,
  getDownloadURL,
  FirebaseStorage,
  deleteObject,
} from "firebase/storage";
import { initializeApp, FirebaseOptions } from "firebase/app";

const firebaseConfig: FirebaseOptions = {
  apiKey: process.env.NEXT_PUBLIC_API_KEY,
  authDomain: "portfolio-template-c4db5.firebaseapp.com",
  projectId: "portfolio-template-c4db5",
  storageBucket: "portfolio-template-c4db5.appspot.com",
  messagingSenderId: "683853928967",
  appId: "1:683853928967:web:b772097c68de56b162e8a2",
  measurementId: "G-G9T9VFFH6Z",
};

class FileStore {
  private store: FirebaseStorage;

  constructor(options: FirebaseOptions) {
    const app = initializeApp(options);
    this.store = getStorage(app);
  }

  public async uploadFile(file: File) {
    try {
      const fileName =
        file.name.split(" ").join("-") + "-" + crypto.randomUUID();
      const fileRef = ref(this.store, `files/${fileName}`);

      await uploadBytes(fileRef, file);

      const fileURL = await getDownloadURL(fileRef);

      return { fileName, fileURL };
    } catch (error) {
      throw error;
    }
  }

  public async deleteFile(fileName: string) {
    try {
      const fileRef = ref(this.store, `files/${fileName}`);

      await deleteObject(fileRef);
    } catch (error) {
      throw error;
    }
  }
}

declare global {
  var store: FileStore | undefined;
}

const fileStore = globalThis.store || new FileStore(firebaseConfig);
if (process.env.NODE_ENV !== "production") globalThis.store = fileStore;

export default fileStore;
