import { faker } from '@faker-js/faker';

export const createFakePost = () => ({
  _id: faker.datatype.uuid(),
  author: faker.name.fullName(),
  date: faker.date.past().toString(),
  avatar: faker.image.avatar(),
  image: faker.image.abstract(),
  slug: faker.lorem.slug(),
  abbreviation: faker.lorem.sentences(4),
  title: faker.lorem.sentence(),
  tags: faker.helpers.uniqueArray(faker.random.word, 5),
});
