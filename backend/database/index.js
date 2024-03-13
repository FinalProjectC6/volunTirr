
const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize('thesis', 'root', 'eyajouini', {

const { Sequelize, DataTypes, BelongsTo } = require('sequelize');
const config = require('../config.json')
const sequelize = new Sequelize('thesis', config.user, config.password, {
>>>>>>> 328874534f957cdfce43f51ed0b974bf294f2a6e
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

const Messages = sequelize.define(
  "Messages",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    timestamp: {
      type: DataTypes.DATE(3),
      allowNull: false,
    },
    videopublicid: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    videourl: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    isProvider: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
  },
<<<<<<< HEAD
  { freezeTableName: true, timestamps: false }
=======
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

>>>>>>> 328874534f957cdfce43f51ed0b974bf294f2a6e
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
const Audio = sequelize.define(
  "audio",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    data: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
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
  }
},
  { freezeTableName: true, timestamps: false }

);

const Features = sequelize.define("Features", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.TEXT,
    allowNull: false
  }
})

const PackagesHasProviders = sequelize.define('PackagesHasProviders', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  active: {
    type: DataTypes.BOOLEAN,
    allowNull: false
  },
  date: {
    type: DataTypes.DATE,
    defaultValue: new Date()
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
const PackageHasFeatures = sequelize.define('PackageHasFeatures', {

},
  { freezeTableName: true, timestamps: false }

);

Providers.belongsToMany(Seekers, { through: "Rateseeker", onDelete: 'CASCADE' });
Seekers.belongsToMany(Providers, { through: "Rateseeker", onDelete: 'CASCADE' });

<<<<<<< HEAD

Chat.hasMany(Messages, { onDelete: 'CASCADE' });
Messages.belongsTo(Chat)


=======
Providers.hasMany(Chat, { onDelete: 'CASCADE' });
Chat.belongsTo(Providers)

Seekers.hasMany(Chat, { onDelete: 'CASCADE' });
Chat.belongsTo(Seekers)
>>>>>>> 328874534f957cdfce43f51ed0b974bf294f2a6e

Chat.hasMany(Messages, { onDelete: 'CASCADE' });
Messages.belongsTo(Chat)

Providers.hasMany(Opportunities, { onDelete: 'CASCADE' });
Opportunities.belongsTo(Providers)



Skills.belongsToMany(Seekers, { through: 'SeekersHasSkills', onDelete: 'CASCADE' });
Seekers.belongsToMany(Skills, { through: 'SeekersHasSkills', onDelete: 'CASCADE' });

Packages.belongsToMany(Features, { through: 'PackageHasFeatures', onDelete: 'CASCADE' });
Features.belongsToMany(Packages, { through: 'PackageHasFeatures', onDelete: 'CASCADE' });

Packages.belongsToMany(Providers, { through: 'PackagesHasProviders', onDelete: 'CASCADE' });
Providers.belongsToMany(Packages, { through: 'PackagesHasProviders', onDelete: 'CASCADE' });

// Define one-to-one relationship between Payment and PackagesHasProviders
PackagesHasProviders.hasOne(Payment, { onDelete: 'CASCADE' });
// Payment.belongsTo(PackagesHasProviders, { foreignKey: 'packages_has_providers_id' });


Opportunities.hasMany(Ratereview, { onDelete: 'CASCADE' });
Ratereview.belongsTo(Opportunities, { onDelete: 'CASCADE' });

Seekers.hasMany(Ratereview, { onDelete: 'CASCADE' });
Ratereview.belongsTo(Seekers, { foreignKey: 'seekers_id', onDelete: 'CASCADE' });

Skills.belongsToMany(Opportunities, { through: OpportunitiesHasSkills, onDelete: 'CASCADE' });
Opportunities.belongsToMany(Skills, { through: OpportunitiesHasSkills, onDelete: 'CASCADE' });

<<<<<<< HEAD

Seekers.hasMany(Chat, { onDelete: "CASCADE" });
Chat.belongsTo(Seekers);

=======
>>>>>>> 328874534f957cdfce43f51ed0b974bf294f2a6e

sequelize.sync({ alter: true })
  .then(() => {
    console.log('All models were synchronized successfully.');
  })
  .catch((error) => {
    console.error('Unable to synchronize the models:', error);
  });
// Export models
<<<<<<< HEAD
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
  Rateseeker:Rateseeker,
  Audio:Audio
=======
module.exports = {
  Providers,
  Seekers,
  Skills,
  OpportunitiesHasSeekers,
  OpportunitiesHasSkills,
  SeekersHasSkills,
  Ratereview,
  Payment,
  PackagesHasProviders,
  Packages,
  Messages,
  Chat,
  Opportunities,
  Rateseeker,
  PackageHasFeatures,
  Features
>>>>>>> 328874534f957cdfce43f51ed0b974bf294f2a6e
};
