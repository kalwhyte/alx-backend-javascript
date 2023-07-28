import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default async function handleProfileSignup(
  firstName,
  lastName,
  fileName,
) {
  const userPromise = signUpUser(firstName, lastName);
  const photoPromise = uploadPhoto(fileName);

  try {
    const [userResponse, photoResponse] = await Promise.allSettled([
      userPromise,
      photoPromise,
    ]);

    const queue = [
      {
        status: userResult.status,
        value:
          userResult.status === 'fulfilled'
            ? userResult.value
            : userResult.reason,
      },
      {
        status: photoResult.status,
        value:
          photoResult.status === 'fulfilled'
            ? photoResult.value
            : photoResult.reason,
      },
    ];

    return queue;
  } catch (error) {
    console.log('Signup system offline');
    return [];
  }
}
