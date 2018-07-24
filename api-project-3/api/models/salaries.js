/* jshint indent: 2 */

module.exports = (sequelize, DataTypes) => {
  return sequelize.define('salaries', {
    emp_no: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'employees',
        key: 'emp_no'
      }
    },
    salary: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    from_date: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      primaryKey: true
    },
    to_date: {
      type: DataTypes.DATEONLY,
      allowNull: false
    }
  }, {
      tableName: 'salaries',
      timestamps: false
    });
};
