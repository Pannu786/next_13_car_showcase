const axios = require('axios');

const options = {
  method: 'GET',
  url: 'https://cars-by-api-ninjas.p.rapidapi.com/v1/cars',
  params: { model: 'corolla' },
  headers: {
    'X-RapidAPI-Key': '17a9cfd4d4msh6afbbc973cf827fp1e074bjsn672254bc7e1d',
    'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com',
  },
};

try {
  const response = await axios.request(options);
  console.log(response.data);
} catch (error) {
  console.error(error);
}
