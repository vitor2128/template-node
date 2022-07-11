import { Knex } from "knex";

const Usuario = async (tenant: Knex) => {
  await tenant.raw('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"'),
    await tenant.schema.createTable("usuarios", (table) => {
      table.uuid("id").primary().defaultTo(tenant.raw("uuid_generate_v4()"));
      table.string("nome_completo").notNullable();
      table.string("email").notNullable();
      table.string("senha_hash").notNullable();
      table
        .enum("funcao", ["Administrador", "Gerente", "Funcionario"])
        .notNullable()
        .defaultTo("Administrador");
      table
        .enum("status", ["ativado", "desativado", "excluido"])
        .notNullable()
        .defaultTo("ativado");
      table.dateTime("CREATED_AT").notNullable().defaultTo(tenant.raw("now()"));
      table.dateTime("UPDATED_AT").notNullable().defaultTo(tenant.raw("now()"));
    });
};

export { Usuario };
