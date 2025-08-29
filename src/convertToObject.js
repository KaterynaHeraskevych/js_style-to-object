'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const splitted = sourceString.split(';'); // we made array with line strings
  const whithoutSpace = splitted.map((line) => {
    return line.trim();
  });
  const filtered = whithoutSpace.filter((item) => item.length > 0);

  const newLine = filtered.map((item) => item.split(':'));

  const result = newLine.reduce((acc, [key, value]) => {
    acc[key.trim()] = value.trim();

    return acc;
  }, {});

  return result;
}

module.exports = convertToObject;
