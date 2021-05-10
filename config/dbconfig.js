import Sequilize from 'sequelize';
const credentials={
  user: "postgres",
  password: "karthik@123",
  host: "localhost",
  database: "sales"
}

// creating the sequilize instance.

const connect = new Sequilize(credentials.database, credentials.user, credentials.password, {
  host: credentials.host,
  dialect: credentials.user,
  logging: false,
  operatorsAliases: false,
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
});

export {connect}