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
  authDomain: process.env.NEXT_PUBLIC_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_MESS_ID,
  appId: process.env.NEXT_PUBLIC_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_MEA,
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
