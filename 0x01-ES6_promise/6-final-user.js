import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, filename) {
  const signUpPromise = signUpUser(firstName, lastName);
  const uploadPhotoPromise = uploadPhoto(filename);
  return Promise.allSettled([signUpPromise, uploadPhotoPromise]).then(
    (results) => {
      const rejected = results.filter((result) => result.status === 'rejected');
      const fulfilled = results.filter(
        (result) => result.status === 'fulfilled',
      );
      return console.log(`${fulfilled[0].value.body} ${fulfilled[1].value}`);
    },
  );
}
