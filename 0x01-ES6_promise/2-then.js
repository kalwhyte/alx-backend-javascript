function handleResponseFromAPI(promise) {
  return promise
    .then((response) => {
      return {
        status: 200,
        body: 'success',
      };
    })
    .catch((Error) => {
      console.log(new Error());
      return new Error();
    })
    .finally(() => {
      console.log('Got a response from the API');
    });
}

export default handleResponseFromAPI;
