
import User from '../models/user';

const seedUsers = [
  {
    name: 'John Doe',
    email: 'john.doe@example.com',
    age: 30,
  },
  {
    name: 'Jane Smith',
    email: 'jane.smith@example.com',
    age: 25,
  },
  {
    name: 'Peter Jones',
    email: 'peter.jones@example.com',
    age: 42,
  },
  {
    name: 'Alice Wonderland',
    email: 'alice.wonderland@example.com',
    age: 20,
  },
  {
    name: 'Bob Builder',
    email: 'bob.builder@example.com',
    age: 19,
  },
  {
    name: 'Charlie Chaplin',
    email: 'charlie.chaplin@example.com',
    age: 55,
  },
];

const seedDB = async () => {
  try {
    const userCount = await User.countDocuments();
    if (userCount > 0) {
      console.log('Database already seeded');
      return;
    }
    await User.insertMany(seedUsers);
    console.log('Users seeded');
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
};

export default seedDB;
