/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('dept_emp', {
    emp_no: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'employees',
        key: 'emp_no'
      }
    },
    dept_no: {
      type: DataTypes.CHAR(4),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'departments',
        key: 'dept_no'
      }
    },
    from_date: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    to_date: {
      type: DataTypes.DATEONLY,
      allowNull: false
    }
  }, {
    tableName: 'dept_emp'
  });
};
