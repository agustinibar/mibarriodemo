import { db } from "../config";
import { collection, addDoc, getDocs, doc, updateDoc, deleteDoc } from "firebase/firestore";

const reclamosRef = collection(db, "reclamos");

export const crearReclamo = async (reclamo: any) => await addDoc(reclamosRef, reclamo);
export const obtenerReclamos = async () => (await getDocs(reclamosRef)).docs.map(doc => ({ id: doc.id, ...doc.data() }));
export const actualizarReclamo = async (id: string, datos: any) => await updateDoc(doc(db, "reclamos", id), datos);
export const eliminarReclamo = async (id: string) => await deleteDoc(doc(db, "reclamos", id));