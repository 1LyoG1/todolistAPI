const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize({
  database: 'd5302qkl6pfd4u',
  username: 'kbaqcjfzysugzk',
  password: 'f8cfc8bef9606e37cba011f9e955970012d65cbce1a70256998b1a64194c6ed9',
  host: 'ec2-54-80-122-11.compute-1.amazonaws.com',
  port: 5432,
  dialect: 'postgres',
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    },
  },
});

module.exports = {
  sequelize,
  DataTypes,
  open: async () => {
    try {
      await sequelize.authenticate();

      console.log('Servidor inicializado!');
    } catch (error) {
      console.error('Não foi possivel inicializar o servidor!' + error);
    }
  },
};
