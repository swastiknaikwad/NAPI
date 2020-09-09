const arrayOfUrls = [];

// ************** DYNAMIC METHODE **********************//

  function searchAndProcess(object, value, replacevalue = 'cdn.bookmyshow.com') {
    
    const transformString = data => data.replace( value, replacevalue);
    for (var x in object) {
      if (object.hasOwnProperty(x)) {
        if (typeof object[x] == 'object') {
          searchAndProcess(object[x], value, replacevalue);
        }
        if (Array.isArray(object[x])) {
          for(i in object[x]) {
            searchAndProcess(object[x][i], value, replacevalue);
          }
        }
        if (typeof object[x] !== 'object') {
          if(object[x].includes(value)) {            
              if (arrayOfUrls.indexOf(object[x]) === -1)    {                
                object[x] = transformString(object[x]); 
                arrayOfUrls.push(object[x]);
              }                              
          }
        }
      }
    }
    return { result: object, arrayOfUrls };
}
// ************** END **********************//
  
  module.exports = { searchAndProcess }