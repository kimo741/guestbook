import "@/firebase/init.js";
import { storage } from "../init.js";

export const uploadToStorage = (file) => {
  const fileref = storage.ref(`products/${file.lastModified}_${file.name}`);
  return fileref.put(file).then((res) => res.ref.getDownloadURL());
};
export const DeletFromStorage = (file) => {
  const fileref = storage.refFromURL(file);
  return fileref.delete();
};
