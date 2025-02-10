import db from '../config/connection.js';
import { User, Thought } from '../models/index.js';
import newDB from './newDB.js';
import { getRandomName, getRandomAssignments } from './data.js';

try {
  await db();
  await newDB();

  // Create empty array to hold the students
  const users = [];

  // Loop 20 times -- add students to the students array
  // for (let i = 0; i < 20; i++) {
  //   // Get some random assignment objects using a helper function that we imported from ./data
  //   const assignments = getRandomAssignments(20);

  //   const fullName = getRandomName();
  //   const first = fullName.split(' ')[0];
  //   const last = fullName.split(' ')[1];
  //   const github = `${first}${Math.floor(Math.random() * (99 - 18 + 1) + 18)}`;

  //   students.push({
  //     first,
  //     last,
  //     github,
  //     assignments,
  //   });
  // }

  //  username: string;
  //     email: string;
  //     thoughts?: ObjectId[];
  //     friends: ObjectId[];
  // Add students to the collection and await the results
  const Data = await User.create(users);

  // Add courses to the collection and await the results
  await Data.create({
    username: 'UCLA',
    email: 'abc@gmail.com',
    thoughts:xxx,
    friends:,
  });

  // Log out the seed data to indicate what should appear in the database
  console.table(users);
  console.info('Seeding complete! 🌱');
  process.exit(0);
} catch (error) {
  console.error('Error seeding database:', error);
  process.exit(1);
}

