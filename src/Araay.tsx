import Circle from "./Circle";
import Form from "./Form";
import Th from "./Th";

// 1
interface ArrayLast {
  <T>(arr: T[]): void;
}

const arryItem: ArrayLast = (arr) => {
  let last = arr.pop();
  return last;
};
arryItem([1, 2, 3, 4, 5]);

// 2
interface Prepend {
  <T>(arr: T[], item: T): T;
}

const prepend: Prepend = (arr, item) => {
  arr.unshift(item);
  return arr[arr.length * 0];
};

// console.log(prepend([1, 2, 3], 0));

// 3
interface Mix {
  <T>(arr1: T[], arr2: T[]): T[];
}

const mix: Mix = (arr1, arr2) => {
  let arr = [...arr1, ...arr2];
  return arr;
};
// console.log(mix([1, 23, 26, 264], [2, 534, 5, 3, 6]));

// 4
interface FindInx {
  <T>(arr: T[], item: T): number | null;
}

const findindex: FindInx = (arr, item) => {
  const ahaha = arr.indexOf(item);
  if (ahaha === -1) {
    return null;
  }
  return ahaha;
};

// console.log(findindex([1, 2, 3, 4, 4, 5], 19));
// console.log(findindex([1, 2, 3, 4, 4, 5], 4));


// 5
interface Slice {
  <T>(arr:T[], startIndex:number, endIndex?:number):T[]
}

const slice:Slice = (arr, startIndex, endIndex ) => {
  const sliceAraay = arr.slice(startIndex, endIndex)
return sliceAraay
}

console.log(slice([1,23,4,23,423,4,23] , 1 ))

console.log(slice([12,3,5,5,2,3] ,3, 3))




function App() {
  return (
    <>
      <h1>App</h1>
    </>
  );
}

export default App;
