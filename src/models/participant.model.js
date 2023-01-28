import {sequelize} from '../db.js';
import { DataTypes } from "sequelize";

const Participant = sequelize.define('participants', {
    // Model attributes are defined here
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    // Other model options go here
  });

export default Participant;