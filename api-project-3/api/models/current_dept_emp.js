/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('current_dept_emp', {
    emp_no: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    dept_no: {
      type: DataTypes.CHAR(4),
      allowNull: false
    },
    from_date: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    to_date: {
      type: DataTypes.DATEONLY,
      allowNull: true
    }
  }, {
    tableName: 'current_dept_emp'
  });
};
