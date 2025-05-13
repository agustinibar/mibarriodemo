import { Propuesta } from "@/interfaces/IPropuesta";
import { db } from "../config";
import { collection, addDoc, getDocs, doc, updateDoc, deleteDoc, Timestamp, query, orderBy, onSnapshot } from "firebase/firestore";

const propuestasRef = collection(db, "propuestas");

export const crearPropuesta = async (propuesta: Omit<Propuesta, "id" | "fecha">) => {
  try {
    const docRef = await addDoc(propuestasRef, {
      ...propuesta,
      fecha: Timestamp.now(),
    });
    return docRef.id;
  } catch (error) {
    console.error("Error al agregar la propuesta:", error);
    throw error;
  }
};

export const obtenerPropuestas = (callback: (data: Propuesta[]) => void) => {
  const q = query(propuestasRef, orderBy("fecha", "desc"));
  return onSnapshot(q, (snapshot) => {
    const lista: Propuesta[] = [];
    snapshot.forEach((doc) => {
      lista.push({ id: doc.id, ...doc.data() } as Propuesta);
    });
    callback(lista);
  });
};

export const actualizarPropuesta = async (id: string, datos: any) => await updateDoc(doc(db, "propuestas", id), datos);
export const eliminarPropuesta = async (id: string) => await deleteDoc(doc(db, "propuestas", id));
