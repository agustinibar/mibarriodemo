export type Message = {
id?: string;
from: "usuario" | "candidato";
text: string;
timestamp: number;
};