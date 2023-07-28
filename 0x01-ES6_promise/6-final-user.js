import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default async function handleProfileSignup(
  firstName,
  lastName,
  fileName,
) {
  try {
    const [userResponse, photoResponse] = await Promise.allSettled([
      signUpUser(firstName, lastName),
      uploadPhoto(fileName),
    ]);

    return [
      {
        status: userResponse.status,
        value:
          userResponse.status === 'fulfilled'
            ? userResponse.value
            : userResponse.reason,
      },
      {
        status: photoResponse.status,
        value:
          photoResponse.status === 'fulfilled'
            ? photoResponse.value
            : photoResponse.reason,
      },
    ];
  } catch (err) {
    console.log('Error in handleProfileSignup:', err);
    return [];
  }
}
