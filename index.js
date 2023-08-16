const containsOnlyObjects = (arr, name) => {
  for (let i = 0; i < arr.length; i++) {
    if (
      typeof arr[i] !== "object" ||
      arr[i] === null ||
      Array.isArray(arr[i])
    ) {
      return false; // If any non-object element found, return false
    } else if (Object.keys(arr[i]).length === 0) {
      return false; // If any empty object element found, return false
    }
    // else if (!arr[i].hasOwnProperty(name)) {
    //   return false; // If any object does not exist attribute name, return false
    // }
  }

  return true; // All elements are objects
};

const groupByName = (dataArr, attributeName) => {
  // Check whether 'dataArr' is an array or not.
  if (!Array.isArray(dataArr)) return "Array is required.";

  // if 'dataArr' is an empty array return as it.
  if (dataArr.length === 0) return [];

  // check object requirements
  if (!containsOnlyObjects(dataArr, attributeName))
    return "Non-object element and/or empty objects found inside the array.";

  // check attributeName is string or not
  if (typeof attributeName !== "string") {
    return "Name should be a string.";
  }

  const groups = dataArr.reduce((groups, item) => {
    const name = item[attributeName];
    if (!groups[name]) {
      groups[name] = [];
    }
    groups[name].push(item);
    return groups;
  }, {});

  const groupedData = Object.keys(groups).map((name) => {
    return {
      name,
      data: groups[name],
    };
  });

  return groupedData;
};

module.exports = groupByName;
