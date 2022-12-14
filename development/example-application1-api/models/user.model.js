module.exports = (sequelize, Sequelize) => {
  const User = sequelize.define("user", {
    id: { type: Sequelize.STRING, primaryKey: true },
    firstName: { type: Sequelize.STRING },
    lastName: { type: Sequelize.STRING },
    email: { type: Sequelize.STRING },
    password : { type: Sequelize.STRING },
    role : { type: Sequelize.STRING },
    belongsTo : { type: Sequelize.STRING },
    // here change in commit-1
    birthDate: {
      type: Sequelize.DATE,
      get() {
        dat = this.getDataValue("birthDate");
        if (dat) dat = dat.toLocaleString("sv-SE");
        return dat;
      },
    },
    createdAt: {
      type: Sequelize.DATE,
      get() {
        dat = this.getDataValue("createdAt");
        if (dat) dat = dat.toLocaleString("sv-SE");
        return dat;
      },
    },
    updatedAt: {
      type: Sequelize.DATE,
      get() {
        dat = this.getDataValue("updatedAt");
        if (dat) dat = dat.toLocaleString("sv-SE");
        return dat;
      },
    },
  });

  return User;
};
