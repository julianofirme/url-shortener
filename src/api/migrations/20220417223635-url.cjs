// eslint-disable-next-line @typescript-eslint/no-var-requires
const DataTypes = require('sequelize');

module.exports = {
    up: (queryInterface) => queryInterface.sequelize.transaction(
        async () => {
          await queryInterface.createTable("Urls", {
            id: DataTypes.UUID,
            original_url: DataTypes.STRING,
            hash: DataTypes.STRING,
            createdAt: DataTypes.DATE,  
            updatedAt: DataTypes.DATE  
          })
        }
    ),

    down: (queryInterface) => queryInterface.sequelize.transaction(
        async () => {
          await queryInterface.dropTable("Url")
        }
    )
};