export type Status = "Pendiente" | "En progreso" | "Completado";

export interface TasksEntry {
  id: number;
  created_at: string;
  title: string;
  description: string;
  status: Status;
}

export const tasks: TasksEntry[] = [
  {
    id: 1,
    created_at: "09-02-2024",
    title: "Primer todo de prueba",
    description: "Esto es una prueba",
    status: "Pendiente",
  },
  {
    id: 2,
    created_at: "08-02-2024",
    title: "Segundo todo de prueba",
    description: "Esto es una prueba",
    status: "Completado",
  },
];
