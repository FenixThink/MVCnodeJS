import Sequelize from 'sequelize';

// export const sequelize = new Sequelize({
//     host: 'localhost',
//     dialect: 'mysql',
//     user: "root",
//     password: "",
//     port: 3306,
//     database: "agenda"
//   });
export const sequelize = new Sequelize(
    'agenda',
    'root',
    '',
     {
       host: 'localhost',
       dialect: 'mysql'
     }
   );