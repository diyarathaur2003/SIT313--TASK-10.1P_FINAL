import { faker } from "@faker-js/faker"

const stafflist =[{
    key:0,
    image: faker.image.urlPicsumPhotos(),
    name: faker.location.country(),
    position: faker.person.jobTitle(),
    author: faker.person.firstName(),
    ratings: faker.helpers.rangeToNumber({min: 1, max: 5})


},
{
    key:1,
    image: faker.image.urlPicsumPhotos(),
    name: faker.location.country(),
    position :faker.person.jobTitle(),
    author: faker.person.firstName(),
    ratings: faker.helpers.rangeToNumber({min: 1, max: 5})
},
{
    key:2,
    image: faker.image.urlPicsumPhotos(),
    name: faker.location.country(),
    position :faker.person.jobTitle(),
    author: faker.person.firstName(),
    ratings: faker.helpers.rangeToNumber({min: 1, max: 5})

},
{
    key:3,
    image: faker.image.urlPicsumPhotos(),
    name: faker.location.country(),
    position :faker.person.jobTitle(),
    author: faker.person.firstName(),
    ratings: faker.helpers.rangeToNumber({min: 1, max: 5})

},

{
    key:4,
    image: faker.image.urlPicsumPhotos(),
    name: faker.location.country(),
    position :faker.person.jobTitle(),
    author: faker.person.firstName(),
    ratings: faker.helpers.rangeToNumber({min: 1, max: 5})
    

},
{
    key:5,
    image: faker.image.urlPicsumPhotos(),
    name: faker.location.country(),
    position :faker.person.jobTitle(),
    author: faker.person.firstName(),
    ratings: faker.helpers.rangeToNumber({min: 1, max: 5})

},
{
    key:6,
    image: faker.image.urlPicsumPhotos(),
    name: faker.location.country(),
    position :faker.person.jobTitle(),
    author: faker.person.firstName(),
    ratings: faker.helpers.rangeToNumber({min: 1, max: 5})

},


]
export default stafflist