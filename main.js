var string = document.querySelector('.t').innerHTML;

const solution = (string, num) => {
  if (string.length < num) {
    return -1;
  }
  var reg = new RegExp(`(?=[^ ]).{1,${num}}(?![^ \.])`, 'g');
  var cuttedArr = string.replace(/[\t\v\n\s]+/g, ' ').match(reg);

  return { arrTotalParts: cuttedArr.length, arr: cuttedArr };
  console.log(str3);
};

console.log(solution(string, 500));
