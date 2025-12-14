import { doc, getDoc } from "firebase/firestore";
import { db } from "./firebase";

export async function isAdmin(uid) {
  const snap = await getDoc(doc(db, "users", uid));
  return snap.exists() && snap.data().role === "admin";
}
