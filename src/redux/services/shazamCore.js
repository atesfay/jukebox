const options = {
    method: 'GET',
    headers: {

    }
  };
  
  fetch('https://shazam-core7.p.rapidapi.com/charts/get-top-songs-in-world', options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));