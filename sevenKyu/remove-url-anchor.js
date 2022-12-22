function removeUrlAnchor(url){
    // TODO: complete
    ///find index of #
    let ind = url.indexOf('#')
    //check if index>-1
    //slice the part of string before index of #
    return ind>-1 ? url.slice(0,ind) : url
  } 