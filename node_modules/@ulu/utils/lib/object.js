/**
 * @module object
 */

/**
 *   Checks object has required properties
 *   @param  {Array.<String>}  required Array of properties to check for
 *   @return {Function} Function for user to use to test, fn(object) returns boolean whether all properties are set
 *   @example 
*      const testProps = hasRequiredProps(["name", "date"]);
*      if (testProps(userConfiguration)) {
*        // Stuff
*      }
*/
export function hasRequiredProps(required) {
  return (obj) => {
    return required.every(prop => {
      return Object.prototype.hasOwnProperty.call(obj, prop);
    });
  };
}