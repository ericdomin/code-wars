/*Complete the function/method so that it returns the url with anything after the anchor (#) removed.

Examples
"www.codewars.com#about" --> "www.codewars.com"
"www.codewars.com?page=1" -->"www.codewars.com?page=1"*/
function removeUrlAnchor(url){
    // TODO: complete
    ///find index of #
    let ind = url.indexOf('#')
    //check if index>-1
    //slice the part of string before index of #
    return ind>-1 ? url.slice(0,ind) : url
  } 