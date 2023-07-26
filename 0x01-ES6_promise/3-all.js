import { uploadPhoto, createUser } from './utils.js';

export default function handleProfileSignup() {
  Promise.all([uploadPhoto(), createUser()])
    .then((results) => {
      const [PhotoResult, UserResult] = results;
      console.log(
        `${PhotoResult.body} ${UserResult.firstName} ${UserResult.lastName}`,
      );
    })
    .catch(() => console.log('Signup system offline'));
}
