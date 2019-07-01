import Sequelize from "sequelize";
import databaseConfig from "../config/database";

import User from "../app/models/User";
import File from "../app/models/File";

//array que contém todos os models da aplicacao
const models = [User, File];

class DataBase {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);

    //percorre o array e estabelece a conexao para cada model
    models
      .map(model => model.init(this.connection))
      .map(model => model.associate && model.associate(this.connection.models));
  }
}

export default new DataBase();
