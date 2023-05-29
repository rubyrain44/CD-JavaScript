const express = require('express');
const app = express();
const PORT = 8000;
const { faker } = require('@faker-js/faker');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const createUser = () => {
    const newUser = {
        password: faker.internet.password(),
        email: faker.internet.email(),
        phoneNumber: faker.phone.phoneNumber(),
        lastName: faker.name.lastName(),
        firstName: faker.name.firstName(),
        _id: faker.datatype.uuid(),
    };
    return newUser;
}

const createCompany = () => {
    const newCompany = {
        _id: faker.datatype.uuid(),
        name: faker.company.name(),
        address: {
            street: faker.address.street(),
            city: faker.address.cityName(),
            state: faker.address.state(),
            zipeCode: faker.address.zipCode(),
            country: faker.address.country()
        }
    };
    return newCompany;
}

// const newUser = createUser();
// console.log(newUser);

// const newCompany = createCompany();
// console.log(newCompany);

app.get('/api/users/new', (req,res) => {
    const newUser = createUser();
    res.json( newUser )
})

app.get('/api/companies/new', (req,res) => {
    const newCompany = createCompany();
    res.json( newCompany )
})

app.get('/api/user/company', (req,res) => {
    const newUser = createUser();
    const newCompany = createCompany();
    res.json( { newUser, newCompany } );
})

app.listen(PORT, () => console.log(`listening on port ${PORT}`));