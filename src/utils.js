//#region > Functions
/**
 * Extracts all parameters of a given query string.
 *
 * @function
 * @returns {values} Params selected from a query
 */
function toParams(query) {
  const q = query.replace(/^\?/, "");

  return q.split("&").reduce((values, param) => {
    const [key, value] = param.split("=");

    values[key] = value;

    return values;
  }, {});
}

/**
 * Generates a query string out of given parameters.
 *
 * @function
 * @returns {query} A query for requests
 */
function toQuery(params, delimiter = "&") {
  const keys = Object.keys(params);

  return keys.reduce((str, key, index) => {
    let query = `${str}${key}=${params[key]}`;

    if (index < keys.length - 1) {
      query += delimiter;
    }

    return query;
  }, "");
}

/**
 * Generates a random GUID.
 *
 * @function
 * @returns {string} A random GUID
 */
function guidGenerator() {
  let d = new Date().getTime();

  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (c) => {
    let r = (d + Math.random() * 16) % 16 | 0;

    d = Math.floor(d / 16);

    return (c === "x" ? r : (r & 0x3) | 0x8).toString(16);
  });
}
//#endregion

//#region > Exports
//> Default Functions
export { toParams, toQuery, guidGenerator };
//#endregion

/**
 * SPDX-License-Identifier: (EUPL-1.2)
 * Copyright © 2019-2020 Simon Prast
 */
