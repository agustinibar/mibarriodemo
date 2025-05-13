import { Problema, Problematica } from "@/interfaces/Problematicas";
import { db } from "../config";
import { collection, addDoc, getDocs, doc, updateDoc, deleteDoc, Timestamp, orderBy, query, onSnapshot } from "firebase/firestore";

const reclamosRef = collection(db, "reclamos");

export const crearReclamo = async (problematica: Problematica) => {
     try {
    const docRef = await addDoc(collection(db, "problematicas"), {
      ...problematica,
      estado: "pendiente",
      fecha: Timestamp.now(),
    });
    return docRef.id;
  } catch (error) {
    console.error("Error al agregar la problemática:", error);
    throw error;
  }
}

export const obtenerReclamos = (
  callback: (problemas: Problema[]) => void
) => {
  const q = query(collection(db, "problematicas"), orderBy("fecha", "desc"));

  return onSnapshot(q, (querySnapshot) => {
    const lista: Problema[] = [];
    querySnapshot.forEach((doc) => {
      lista.push({
        id: doc.id,
        ...doc.data(),
        fecha: doc.data().fecha.toDate().toLocaleString("es-AR"), 
      } as Problema);

    });
    callback(lista);
  });
}
export const actualizarReclamo = async (id: string, datos: any) => await updateDoc(doc(db, "reclamos", id), datos);
export const eliminarReclamo = async (id: string) => await deleteDoc(doc(db, "reclamos", id));