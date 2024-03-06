const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize('thesis', 'root', 'root', {
  host: 'localhost',
  dialect: 'mysql',
});

const Skills = sequelize.define('Skills', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  skill: {
    type: DataTypes.STRING(45),
    allowNull: true
  }
},
{ freezeTableName: true, timestamps: false }

);

const Providers = sequelize.define('Providers', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  fullname: {
    type: DataTypes.STRING(255),
    allowNull: false
  },
  email_address: {
    type: DataTypes.STRING(255),
    allowNull: false
  },
  password: {
    type: DataTypes.STRING(255),
    allowNull: false
  },
  image: {
    type: DataTypes.TEXT,
    allowNull: true
  },
  phone: {
    type: DataTypes.STRING(45),
    allowNull: true
  },
  age: {
    type: DataTypes.INTEGER,
    allowNull: true
  },
  gender: {
    type: DataTypes.STRING(45),
    allowNull: true
  }
},
{ freezeTableName: true, timestamps: false }

);

const Seekers = sequelize.define('Seekers', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  fullname: {
    type: DataTypes.STRING(45),
    allowNull: false
  },
  email_address: {
    type: DataTypes.STRING(255),
    allowNull: false
  },
  password: {
    type: DataTypes.STRING(255),
    allowNull: false
  },
  image: {
    type: DataTypes.TEXT,
    allowNull: true
  },
  background: {
    type: DataTypes.TEXT,
    allowNull: true
  },
  bio: {
    type: DataTypes.TEXT,
    allowNull: true
  },
  phone: {
    type: DataTypes.STRING(45),
    allowNull: true
  },
  age: {
    type: DataTypes.INTEGER,
    allowNull: true
  },
  gender: {
    type: DataTypes.STRING(45),
    allowNull: true
  }
},
{ freezeTableName: true, timestamps: false }

);

const Rateseeker = sequelize.define('Rateseeker', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  rate: {
    type: DataTypes.INTEGER,
    allowNull: true
  }
},
{ freezeTableName: true, timestamps: false }

);

const Chat = sequelize.define('Chat', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  }
},
{ freezeTableName: true, timestamps: false }

);

const Messages = sequelize.define('Messages', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  content: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  timestamp: {
    type: DataTypes.DATE(3),
    allowNull: false
  },
  videopublicid: {
    type: DataTypes.TEXT,
    allowNull: true
  },
  videourl: {
    type: DataTypes.TEXT,
    allowNull: true
  }
},
{ freezeTableName: true, timestamps: false }

);

const Opportunities = sequelize.define('Opportunities', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  title: {
    type: DataTypes.STRING(45),
    allowNull: false
  },
  logistics: {
    type: DataTypes.STRING(255),
    allowNull: false
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  category: {
    type: DataTypes.STRING(45),
    allowNull: false
  },
  start: {
    type: DataTypes.DATEONLY,
    allowNull: false
  },
  end: {
    type: DataTypes.DATEONLY,
    allowNull: false
  },
  price: {
    type: DataTypes.INTEGER,
    allowNull: true
  },
  numberofseekers: {
    type: DataTypes.INTEGER,
    allowNull: true
  },
  location: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  image1: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  planning: {
    type: DataTypes.TEXT,
    allowNull: true
  },
  image2: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  image3: {
    type: DataTypes.TEXT,
    allowNull: true
  },
  image4: {
    type: DataTypes.TEXT,
    allowNull: true
  }
},
{ freezeTableName: true, timestamps: false }

);

const Packages = sequelize.define('Packages', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  title: {
    type: DataTypes.STRING(45),
    allowNull: false
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  price: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  validity: {
    type: DataTypes.DATEONLY,
    allowNull: false
  },
  features: {
    type: DataTypes.TEXT,
    allowNull: false
  }
},
{ freezeTableName: true, timestamps: false }

);

const PackagesHasProviders = sequelize.define('PackagesHasProviders', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  actve: {
    type: DataTypes.BOOLEAN,
    allowNull: false
  }
},
{ freezeTableName: true, timestamps: false }

);

const Payment = sequelize.define('Payment', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  paymentdate: {
    type: DataTypes.DATEONLY,
    allowNull: false
  },
  transaction: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
},
{ freezeTableName: true, timestamps: false }

);

const Ratereview = sequelize.define('Ratereview', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  rate: {
    type: DataTypes.INTEGER,
    allowNull: true
  },
  review: {
    type: DataTypes.TEXT,
    allowNull: true
  }
},
{ freezeTableName: true, timestamps: false }

);

const OpportunitiesHasSeekers = sequelize.define('OpportunitiesHasSeekers', {
  state: {
    type: DataTypes.STRING(45),
    allowNull: false,
    defaultValue: 'pending'
  }
},
{ freezeTableName: true, timestamps: false }

);

const OpportunitiesHasSkills = sequelize.define('OpportunitiesHasSkills', {},
{ freezeTableName: true, timestamps: false }

);

const SeekersHasSkills = sequelize.define('SeekersHasSkills', {},
{ freezeTableName: true, timestamps: false }

);

Providers.hasMany(Rateseeker, { foreignKey: 'providers_id', onDelete: 'CASCADE' });
Seekers.hasMany(Rateseeker, { foreignKey: 'seekers_id', onDelete: 'CASCADE' });

Providers.hasMany(Chat, { foreignKey: 'providers_id', onDelete: 'CASCADE' });
Seekers.hasMany(Chat, { foreignKey: 'seekers_id', onDelete: 'CASCADE' });

Chat.hasMany(Messages, { foreignKey: 'chat_id', onDelete: 'CASCADE' });

Providers.hasMany(Opportunities, { foreignKey: 'providers_id', onDelete: 'CASCADE' });

Opportunities.belongsToMany(Skills, { through: 'OpportunitiesHasSkills', foreignKey: 'opportunities_id', onDelete: 'CASCADE' });
Skills.belongsToMany(Opportunities, { through: 'OpportunitiesHasSkills', foreignKey: 'skills_id', onDelete: 'CASCADE' });

Seekers.belongsToMany(Skills, { through: 'SeekersHasSkills', foreignKey: 'seekers_id', onDelete: 'CASCADE' });
Skills.belongsToMany(Seekers, { through: 'SeekersHasSkills', foreignKey: 'skills_id', onDelete: 'CASCADE' });

Opportunities.belongsToMany(Seekers, { through: 'OpportunitiesHasSeekers', foreignKey: 'opportunities_id', onDelete: 'CASCADE' });
Seekers.belongsToMany(Opportunities, { through: 'OpportunitiesHasSeekers', foreignKey: 'seekers_id', onDelete: 'CASCADE' });

Packages.belongsToMany(Providers, { through: 'PackagesHasProviders', foreignKey: 'packages_id', onDelete: 'CASCADE' });
Providers.belongsToMany(Packages, { through: 'PackagesHasProviders', foreignKey: 'providers_id', onDelete: 'CASCADE' });

// Define one-to-one relationship between Payment and PackagesHasProviders
PackagesHasProviders.hasOne(Payment, { foreignKey: 'packages_has_providers_id', onDelete: 'CASCADE' });
Payment.belongsTo(PackagesHasProviders, { foreignKey: 'packages_has_providers_id' });

Ratereview.belongsTo(Opportunities, { foreignKey: 'opportunities_id', onDelete: 'CASCADE' });
Ratereview.belongsTo(Seekers, { foreignKey: 'seekers_id', onDelete: 'CASCADE' });

Rateseeker.belongsTo(Providers, { foreignKey: 'providers_id', onDelete: 'CASCADE' });
Rateseeker.belongsTo(Seekers, { foreignKey: 'seekers_id', onDelete: 'CASCADE' });

Messages.belongsTo(Chat, { foreignKey: 'chat_id', onDelete: 'CASCADE' });

sequelize.sync({alter:false})
  .then(() => {
    console.log('All models were synchronized successfully.');
  })
  .catch((error) => {
    console.error('Unable to synchronize the models:', error);
  });

// Export models
module.exports={
  Providers:Providers,
  Seekers:Seekers,
  Skills:Skills,
  OpportunitiesHasSeekers:OpportunitiesHasSeekers,
  OpportunitiesHasSkills:OpportunitiesHasSkills,
  SeekersHasSkills:SeekersHasSkills,
  Ratereview:Ratereview,
  Payment:Payment,
  PackagesHasProviders:PackagesHasProviders,
  Packages:Packages,
  Messages:Messages,
  Chat:Chat,
  Opportunities:Opportunities,
  Rateseeker:Rateseeker
};
