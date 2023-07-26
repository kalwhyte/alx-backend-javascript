import { uploadPhoto, createUser } from './utils.js';

export default async function handleProfileSignup() {
  try {
    const results = await Promise.all([uploadPhoto(), createUser()]);
    console.log(
      `${results[0].body} ${results[1].firstName} ${results[1].lastName}`,
    );
  } catch {
    return console.log('Signup system offline');
  }
}
