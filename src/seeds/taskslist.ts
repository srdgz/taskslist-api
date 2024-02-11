import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  await knex("taskslist").truncate();

  // Inserts seed entries
  await knex("taskslist").insert([
    {
      title: "Primer task de prueba",
      description: "Esto es una prueba",
      status: "Pendiente",
    },
    {
      title: "Segundo task de prueba",
      description: "Esto es otra prueba",
      status: "Pendiente",
    },
  ]);
}
