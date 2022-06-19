import { Sequelize } from 'sequelize';
import { UserModel } from '../model/user';

const MockerUsers = [
    { login: "1 login", password: '123', age: '15', isDeleted: false },
    { login: "2 login", password: '123', age: '20', isDeleted: false },
    { login: "3 login", password: '123', age: '30', isDeleted: false },
    { login: "4 login", password: '123', age: '40', isDeleted: false },
    { login: "5 login", password: '123', age: '50', isDeleted: false },
];

export const client = new Sequelize('postgres://qcpdktak:5g0SwFad_kJJL_Ba9amDaWJHF51lOy7Q@queenie.db.elephantsql.com/qcpdktak', {
    define: {
        freezeTableName: true
    }
})

export const connectDb = async () => {
    try {
        await client.authenticate();
        console.log('Connection has been established successfully.');
        await client.sync({ force: true });
        console.log('Db is sync successfully')
        await UserModel.bulkCreate(MockerUsers)
        console.log('Db saved mocked data successfully')

    } catch (error) {
        console.error('Unable to connect to the database:', error);
        throw new Error('Unable connect to server')
    }
}