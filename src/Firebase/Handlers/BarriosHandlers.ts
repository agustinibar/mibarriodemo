import { db } from "../config";
import { collection, addDoc, getDocs, doc, updateDoc, deleteDoc } from "firebase/firestore";

const barriosRef = collection(db, "barrios");

export const crearBarrio = async (barrio: any) => await addDoc(barriosRef, barrio);
export const obtenerBarrios = async () => (await getDocs(barriosRef)).docs.map(doc => ({ id: doc.id, ...doc.data() }));
export const actualizarBarrio = async (id: string, datos: any) => await updateDoc(doc(db, "barrios", id), datos);
export const eliminarBarrio = async (id: string) => await deleteDoc(doc(db, "barrios", id));