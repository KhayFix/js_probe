const requestURL = ['https://jsonplaceholder.typicode.com/users','https://jsonplaceholder.typicode.com/photos', 'https://jsonplaceholder.typicode.com/photos']


async function getResponse(url) {
  const [ift, psi, prod] = await Promise.all([
    fetch(url[0]),
    fetch(url[1]),
    fetch(url[url.length - 1]),
  ]);

    const ift1 = await ift.json();
    const psi1 = await psi.json();
    const prod1 = await prod.json();
    return [ift1, psi1, prod1];
  
}

getResponse(requestURL).then(([ift, psi, prod]) => {
  console.log(ift);     // список фильмов
  console.log(psi); // список категорий
  console.log(prod);
}).catch(error => {
  // один из запросов завершился с ошибкой
});

