dataURItoBlob = function (dataURI) {
  var i;
  var binary = atob(dataURI.split(',')[1]);
  var array = [];
  for (i = 0; i < binary.length; i++) {
    array.push(binary.charCodeAt(i));
  }
  return new Uint8Array(array);
}
