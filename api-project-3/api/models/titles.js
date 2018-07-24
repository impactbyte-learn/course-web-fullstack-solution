/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('titles', {
    emp_no: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'employees',
        key: 'emp_no'
      }
    },
    title: {
      type: DataTypes.STRING(50),
      allowNull: false,
      primaryKey: true
    },
    from_date: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      primaryKey: true
    },
    to_date: {
      type: DataTypes.DATEONLY,
      allowNull: true
    }
  }, {
    tableName: 'titles'
  });
};
