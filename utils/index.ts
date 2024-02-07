const url = 'https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla';
const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '17a9cfd4d4msh6afbbc973cf827fp1e074bjsn672254bc7e1d',
    'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com',
  },
};

try {
  const response = await fetch(url, options);
  const result = await response.text();
  console.log(result);
} catch (error) {
  console.error(error);
}
