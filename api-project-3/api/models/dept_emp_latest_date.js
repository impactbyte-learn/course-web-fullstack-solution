/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('dept_emp_latest_date', {
    emp_no: {
      type: DataTypes.INTEGER(11),
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
    tableName: 'dept_emp_latest_date'
  });
};
