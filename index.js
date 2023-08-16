const groupByName = (dataArr, attributeName) => {
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
