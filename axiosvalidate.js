const axios = require('axios');
const routes = require('./index.js');






const validateLinks = (route) => {
  return new Promise((resolve, reject) => {
    const promisearrayLinks = routes.getLinksMd(route);
    // console.log("loquetraearraylinks", promisearrayLinks);
   
    const promises = promisearrayLinks.then((arrayLinks) => {
      const arrLinksPromises = arrayLinks.map((element) => 
        axios.get(element.href)
          .then((res) => {
            if (res.status >= 200 && res.status < 400) {
              return {
                ...element,
                status: res.status,
                statusText: res.statusText,
              };
            }
            return {
              ...element,                     
              status: res.status,
              statusText: 'FAIL',
            };
          })
          .catch((error) => {
            return {
              ...element,
              status: 'ERROR',
              statusText: 'FAIL',
            };
          })
      );
      return Promise.all(arrLinksPromises);
    });

    promises
      .then((results) => {
        resolve(results);
      })
      .catch((error) => {
        reject(error);
      });
  });
};





//*********************************************************************** */

// const validateLinks = (route) => {
//     return new Promise((resolve, reject) => {
//       const promisearrayLinks = routes.getLinksMd(route);
//       console.log("loquetraearraylinks", promisearrayLinks)
     
//       const promises = promisearrayLinks.then((arrayLinks)=> {
      
//         const arrLinksPromises = arrayLinks.map((element) => axios.get(element.href)
//         .then((res) => {
//           if (res.status >= 200 && res.status < 400) {
//             return {
//               ...element,
//               status: res.status,
//               statusText: res.statusText,
//             };
//           }
//           return {
//             ...element,                     
//             status: res.status,
//             statusText: 'FAIL',
//           };
//         })
//         .catch((error) => {
//           return {
//             ...element,
//             status: 'ERROR',
//             statusText: 'FAIL',
//           };
//         })
//       );

// return arrLinksPromises;


//       }) 

// console.log ("constante",promises);
// resolve (promises);


  
      // Promise.all(arrLinksPromises)
      //   .then((results) => {
      //     resolve(results);
      //   })
      //   .catch((error) => {
      //     reject(error);
        // });
  //   });
  // };

//*********************************************** */


// const validateLinks = (route) => {
//   const arrayLinks = routes.getLinksMd(route);
//   if (!arrayLinks || arrayLinks.length === 0) {
//     return [];
//   }
//   console.log("imprimiendoarraysdelinks",arrayLinks)
//   const arrLinksPromises = arrayLinks.map((element) => axios.get(element.href)
//     .then((res) => {
//         console.log("llegoaqui", (res));
//         if (res.status >= 200 && res.status < 400) {
//         return {
//           ...element,
//           status: res.status,
//           statusText: res.statusText,
//         };
//       }
//       return {
//         ...element,                     
//         status: res.status,
//         statusText: 'FAIL',
//       };
//     })
//     .catch((error) => {
//         console.log(error);
//       return {
//         ...element,
//       status: 'ERROR',
//       statusText: 'FAIL',
//     };
//     })
//     );

//   return Promise.all(arrLinksPromises);
  
// };





module.exports = {
  validateLinks,
};