/*
* Написать функцию sostavChisla(massivChisel: number[], chislo: number), 
  которая бы находила все возможные комбинации чисел из massivChisel, 
  сумма которых равна chislo. При этом:
  1) massivChisel содержит, только уникальные положительные числа (> 0)
  2) в комбинации не должно быть повторений чисел
  3) все комбинации должны быть уникальными
*/
/**  
  @param {Array<Number>} massivChisel
  @param {Number} chislo
  @return {Array<Array<Number>>} Массив множеств, сумма которых равна chislo
*/
function sostavChisla(massivChisel, chislo){
  let result = [];

  function subSetSums(numbers, target, tmp){
    let sum;
    let n;
    let remain;

    tmp = tmp || [];
    sum = tmp.reduce( (a, b) => a + b, 0);

    if (sum == target){
        result.push(tmp);
    }

    for (let i = 0; i < numbers.length; i++){
      n = numbers[i];
      remain = numbers.slice(i + 1);
      subSetSums(remain, target, tmp.concat([n]));
    }

    return result
  }

  return subSetSums(massivChisel, chislo);
}

