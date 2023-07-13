// https://www.youtube.com/watch?v=TYRJ_X9qMSE
const phoneNum = {
  'пожарная': [
    ['номер', '101']
  ],
  'полиция': [
    ['номер', '101']
  ],
  'скорая': [
    ['номер', '101']
  ]
}

document.querySelector('.content').innerHTML = `<table class="phone"></table>`
for(key in phoneNum) {
  let row = document.createElement('tr')
  row.innerHTML = `<td colspan="2">${key}</td>`
  document.querySelector(".phone").appendChild(row)
  for(let i=0; i<phoneNum[key].length; i++) {
    let row = document.createElement('tr')
    row.innerHTML = `
      <td>${phoneNum[key][i][0]}</td>
      <td>${phoneNum[key][i][1]}</td>
    `
    document.querySelector('.phone').appendChild(row)
  }
}