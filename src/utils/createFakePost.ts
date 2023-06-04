import { faker } from '@faker-js/faker';

export const createFakePost = () => ({
  _id: faker.datatype.uuid(),
  author: faker.name.fullName(),
  date: faker.date.past(),
  avatar: faker.image.avatar(),
  image: faker.image.abstract(),
  slug: faker.lorem.slug(),
  abbreviation: faker.lorem.paragraph(3),
  title: faker.lorem.sentence(),
  tags: faker.helpers.uniqueArray(faker.random.word, 5),
});

export type IArticle = ReturnType<typeof createFakePost>;
