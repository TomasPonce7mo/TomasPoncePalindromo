function EsPalindromo(v) {
  let re = /[\W_]/g;
  let lrv = v.toLowerCase().replace(re, '');
  let rv = lrv.split('').reverse().join(''); 
  return rv == lrv;
}