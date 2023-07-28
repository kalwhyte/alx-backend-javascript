function handleResponseFromAPI(promise) {
  promise
    .then((response) => {
      return {
        status: 200,
        body: 'success',
      };
    })
    .catch(() => {
      return new Error('The fake API is not working currently');
    })
    .finally(() => {
      console.log('Got a response from the API');
    });
}
