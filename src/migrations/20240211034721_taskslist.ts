import { Knex } from "knex";

/**
 * @param { Knex } knex
 * @returns { Promise<void> }
 */
export const up = async (knex: Knex): Promise<void> => {
  await knex.schema.createTable("taskslist", (tbl) => {
    tbl.increments("id").primary();
    tbl.date("created_at").defaultTo(knex.fn.now());
    tbl.text("title").notNullable();
    tbl.text("description").notNullable();
    tbl
      .enum("status", ["Pendiente", "En progreso", "Completado"])
      .notNullable();
  });
};

/**
 * @param { Knex } knex
 * @returns { Promise<void> }
 */
export const down = async (knex: Knex): Promise<void> => {
  await knex.schema.dropTableIfExists("taskslist");
};
