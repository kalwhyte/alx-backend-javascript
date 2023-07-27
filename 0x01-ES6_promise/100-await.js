import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  try {
    const photo = await uploadPhoto('guillaume.jpg');
    const user = await createUser('Guillaume', 'Salva');
    return { photo, user };
  } catch (err) {
    return { photo: null, user: null };
  }
}
