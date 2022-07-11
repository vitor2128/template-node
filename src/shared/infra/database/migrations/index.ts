import { Usuario } from "./usuario";
const migrations = async (database) => {
  await Usuario(database);
};

export { migrations };
