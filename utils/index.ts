
export async function fetchCars() {
  const headers = {
    'X-RapidAPI-Key': '17a9cfd4d4msh6afbbc973cf827fp1e074bjsn672254bc7e1d',
    'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com',
  };

  const response = await fetch(
    'https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla',
    { headers: headers, }
  );

  const result = await response.json();

  return result;
}
