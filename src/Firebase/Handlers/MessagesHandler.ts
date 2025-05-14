import { addDoc, collection, onSnapshot, orderBy, query, serverTimestamp } from "firebase/firestore";
import { db } from "../config";
import { Message } from "@/interfaces/IChat";


export async function sendMessage(candidatoId: string, message: Message) {
  try {
    await addDoc(collection(db, "chats", candidatoId, "messages"), {
      ...message,
      timestamp: serverTimestamp(),
    });
  } catch (error) {
    console.error("Error al enviar mensaje:", error);
  }
}

export function subscribeToChat(
  candidatoId: string,
  callback: (messages: Message[]) => void
) {
  const q = query(
    collection(db, "chats", candidatoId, "messages"),
    orderBy("timestamp", "asc")
  );

  return onSnapshot(q, (snapshot) => {
    const messages: Message[] = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...(doc.data() as Omit<Message, "id">),
    }));
    callback(messages);
  });
}