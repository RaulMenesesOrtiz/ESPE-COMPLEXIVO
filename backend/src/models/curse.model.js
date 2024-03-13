import Sequelize from 'sequelize';

// Conectar a la base de datos
const sequelize = new Sequelize('colegio_espe_complex', 'root', 'Raul20156', {
    host: 'localhost',
    dialect: 'mysql'
});

// Verificar la conexión a la base de datos
sequelize.authenticate()
  .then(() => {
    console.log('Conexión exitosa a la base de datos');
  })
  .catch((error) => {
    console.error('Error al conectar a la base de datos:', error);
  });

// Definir el modelo de los cursos
const Curso = sequelize.define('curso', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre: {
        type: Sequelize.STRING,
        allowNull: false
    },
    descripcion: {
        type: Sequelize.TEXT,
        allowNull: true
    },
    fechaDiseno: {
        type: Sequelize.DATE,
        allowNull: false
    },
    profesores: {
        type: Sequelize.STRING,
        allowNull: false,
        get() {
            const profesoresValue = this.getDataValue('profesores');
            if (profesoresValue) {
                return profesoresValue.split(';');
            } else {
                return [];
            }
        },
    }
}, {
    timestamps: true,
    versionKey: false,
    tableName: 'cursos'
});

// Sincronizar el modelo con la base de datos
sequelize.sync()
    .then(() => {
        console.log('Modelo de cursos sincronizado con la base de datos');
    })
    .catch((error) => {
        console.error('Error al sincronizar el modelo de cursos:', error);
    });

export default Curso;
