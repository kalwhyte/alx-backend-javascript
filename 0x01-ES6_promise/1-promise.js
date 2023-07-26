export default function getFullResponseFromAPI() {
  return new Promise((resolve, reject) => {
    if (true) {
      resolve({
        status: 200,
        body: 'Success',
      });
    }
    if (false) {
      reject(new Error('The fake API is not working currently'));
    }
  });
}
