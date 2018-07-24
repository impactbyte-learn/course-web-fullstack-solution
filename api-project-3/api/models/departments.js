/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('departments', {
    dept_no: {
      type: DataTypes.CHAR(4),
      allowNull: false,
      primaryKey: true
    },
    dept_name: {
      type: DataTypes.STRING(40),
      allowNull: false,
      unique: true
    }
  }, {
    tableName: 'departments'
  });
};
