function handleResponseFromAPI(promise) {
  return promise
    .then((response) => {
      return {
        status: 200,
        body: 'success',
      };
    })
    .catch((error) => {
      return error();
    })
    .finally(() => {
      console.log('Got a response from the API');
    });
}

export default handleResponseFromAPI;
