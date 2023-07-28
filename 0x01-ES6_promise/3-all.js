import { uploadPhoto, createUser } from './utils';

export default async function handleProfileSignup() {
  try {
    const results = await Promise.all([
      uploadPhoto('guillaume.jpg'),
      createUser('Guillaume', 'Salva'),
    ]);
    console.log(
      `${results[0].body} ${results[1].firstName} ${results[1].lastName}`,
    );
    return null;
  } catch (err) {
    return console.log('Signup system offline');
    return null;
  }
}
