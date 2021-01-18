module.exports = (sequelize, DataTypes) => {
	return sequelize.define('users', {
		user_id: {
			type: DataTypes.STRING,
			primaryKey: true,
		},
		first_name: {
			type: DataType.STRING,
		},
		last_name: {
			type: DataType.STRING,
		},
		balance: {
			type: DataTypes.INTEGER,
			defaultValue: 10000,
			allowNull: false,
		},
		},{
			timestamps: false,
		});
};
