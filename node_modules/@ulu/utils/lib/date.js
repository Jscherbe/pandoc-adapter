/**
 * @module date
 */


/**
 * Converts date to abbreviated month date ie "Mar 7, 2018"
 * @param {String|Date} str Date or date string (passed through date constructor)
 * @return {String} Pretty date string
 */
export function prettyDate(str) {
  const date = new Date(str);
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  return `${ months[date.getMonth()] } ${ date.getDate() }, ${ date.getFullYear() }`;
}