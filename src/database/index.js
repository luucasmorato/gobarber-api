import Sequelize from "sequelize";
import databaseConfig from "../config/database";

import User from "../app/models/User";

//array que contém todos os models da aplicacao
const models = [User];

class DataBase {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);

    //percorre o array e estabelece a conexao para cada model
    models.map(model => {
      model.init(this.connection);
    });
  }
}

export default new DataBase();