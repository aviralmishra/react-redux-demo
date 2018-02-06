const faker = require('faker/locale/en_AU');
const path = require('path');
const fs = require('fs');

const count = 30;

try {
  let rows = [];

  for (let i = 0; i <= count; i++) {
    const row = {
      title: faker.lorem.words(),
      author: faker.name.findName(),
      author_image: faker.image.avatar(),
      release_date: faker.date.recent(),
      image: faker.image.random.nature(),
      price: faker.commerce.price(),
      short_description: faker.lorem.sentence(),
      long_description: faker.lorem.paragraph()
    };
    rows.push(row);
  }

  const sampleData = Object.assign({}, {rows});
  const sampleDataPath = path.join(__dirname);
  const sampleDataFilePath = path.join(sampleDataPath, 'data.json');

  fs.writeFile(sampleDataFilePath, JSON.stringify(sampleData), err => {
    if (err) 
      throw err;
    console.info('Sample data has been created in ', sampleDataFilePath);
    process.exit(0);
  });

} catch (error) {
  throw error;
}
