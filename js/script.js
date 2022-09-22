const nameList = document.querySelector('.names');
const photoList = document.querySelector('.photos');
const btn1 = document.querySelector('#btn1');
const btn2 = document.querySelector('#btn2');


// ====================================================================================================================================

/**
 * 
 * ANA SEHIFE LISTIN ILK ACILANDA
 * 
 */

fetch('https://rickandmortyapi.com/api/character')
  .then((res)=>res.json())
  .then((data)=>{
       let list = "";
       let photo = "";
       

       if (data) {
            
            for (let x = 0; x < 10; x++) {
                
                list += `<p>${x+1}) ${data.results[x].name} </p>`

                photo += `<img src="${data.results[x].image}">`
            }

       }
      nameList.innerHTML = list;
      photoList.innerHTML = photo;
  })

//  =================================================================================================================================




// ==================================================================================================================================

/**
 * 
 * IKINCI SEHIFE 2-CI BUTONLA 
 * 
 */



  btn2.onclick = ()=>{

      fetch('https://rickandmortyapi.com/api/character')
        .then((res)=>res.json())
        .then((data)=>{

              let list2 = "";
              let photo2 = "";

              if (data) {

                    for (let x = 10; x < 20; x++) {
                        list2 += `<p>${x+1}) ${data.results[x].name} </p>`

                        photo2 += `<img src="${data.results[x].image}">`
                    }
              }
              nameList.innerHTML = list2;
              photoList.innerHTML = photo2;
        })

  }

// ===================================================================================================================================





// ===================================================================================================================================

/**
 * 
 * BIRINCI BUTONLA BIRINCI SEHIFEYE YONLENDIRMEK
 * 
 */



  btn1.onclick = ()=>{

       fetch('https://rickandmortyapi.com/api/character')
         .then((res)=>res.json())
         .then((data)=>{

            let list1 = "";
            let photo1 = "";

            if (data) {

                  for (let x = 0; x < 10; x++) {
                      list1 += `<p>${x+1}) ${data.results[x].name} </p>`

                      photo1 += `<img src="${data.results[x].image}">`
                  }

            }

            nameList.innerHTML = list1;
            photoList.innerHTML = photo1;

        })

  }

// ====================================================================================================================================













// var countStart = 0;
// var countEnd = 50;

// const counrtyList = () => {
//   fetch("https://restcountries.com/v3.1/all")
//     .then((data) => data.json())
//     .then((comingApi) => {
//       let li = "";
//       for (let x = countStart; x < countEnd; x++) {
//         li += `<li><span>${x + 1}-</span>${comingApi[x].name.common}</li>`;
//       }
//       document.querySelector("ul").innerHTML = li;
//     });
// };

// const counter = () => {
//   countStart += 50;
//   countEnd += 50;
// };

// for (let x = 0; x < 5; x++) {
//   document.querySelectorAll("button")[x].onclick = () => {
//     counter();
//     counrtyList();
//   };
// }
// counrtyList();