const express = require("express")
const app = express()

app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );

const { faker } = require('@faker-js/faker');

const randomEmail = faker.internet.email(); 
const randomPhoneNumber = faker.phone.phoneNumber(); 
const randomFirstName = faker.name.findName();
const randomLastName = faker.name.lastName();
const randomId = faker.random.numeric(5);


class User {
    constructor () {
        this.password = faker.internet.password();
        this.email = randomEmail;
        this.phoneNumber = randomPhoneNumber;
        this.lastName = randomLastName;
        this.firstName = randomFirstName;
        this._id = randomId;
    }
}


class Company {
    constructor () {
        this._id = randomId;
        this.name = faker.company.companyName();
        this.address = {
            street: faker.address.streetAddress(),
            city: faker.address.cityName(),
            state: faker.address.state(),
            zipCode: faker.address.zipCode(),
            country: faker.address.country()
        }
    }
}


// get (read)
app.get("/api/user/new", (req, res) => {
    let newUser = new User();
    res.json({"New User": newUser})
})

app.get("/api/company/new", (req, res) => {
    let newCompany = new Company();
    res.json({"New Company": newCompany})
})

app.get("/api/user/company/new", (req, res) => {
    let newUser = new User();
    let newCompany = new Company();
    res.json({"New User": newUser, "New Compnay": newCompany})
})


app.listen(8000, () => console.log(`Listening to port : 8000`))