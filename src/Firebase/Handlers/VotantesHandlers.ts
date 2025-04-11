import { db } from "../config";
import { collection, addDoc, getDocs, doc, updateDoc, deleteDoc } from "firebase/firestore";

const votantesRef = collection(db, "votantes");

export const crearVotante = async (votante: any) => await addDoc(votantesRef, votante);
export const obtenerVotantes = async () => (await getDocs(votantesRef)).docs.map(doc => ({ id: doc.id, ...doc.data() }));
export const actualizarVotante = async (id: string, datos: any) => await updateDoc(doc(db, "votantes", id), datos);
export const eliminarVotante = async (id: string) => await deleteDoc(doc(db, "votantes", id));