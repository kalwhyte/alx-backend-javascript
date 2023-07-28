function handleResponseFromAPI(promise) {
  return promise
    .then((response) => {
      console.log('Got a response from the API'); // Log the success message
      return {
        status: 200,
        body: 'success',
      };
    })
    .catch((error) => {
      console.log('Got a response from the API'); // Log the error message
      return new Error();
    });
}

export default handleResponseFromAPI;
