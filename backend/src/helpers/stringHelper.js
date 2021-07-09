export const ucFirst = (str) => {
  if (typeof str !== 'string') {
    throw new Error('Parameter must be string!');
  }

  return `${str[0].toUpperCase()}${str.substring(1)}`;
};

export const titleCase = (str) => {
  if (typeof str !== 'string') {
    throw new Error('Parameter must be string!');
  }

  return str
    .toLowerCase()
    .split(' ')
    .map((word) => ucFirst(word))
    .join(' ');
};
