import './style.css';
// import { of } from 'rxjs';
// import { tap, map, mergeMap, toArray } from 'rxjs/operators';

import { of, map, Observable, tap, mergeMap, toArray, interval } from 'rxjs';

of('Nikhil')
  .pipe(map((name) => `Hello, ${name}!`))
  .subscribe(console.log);

map((x: number) => x * x)(of(1, 2, 3, 4, 5)).subscribe((v) =>
  console.log(`Output is: ${v}`)
);

/**
 * Test
 */
var observable = Observable.create((observer: any) => {
  observer.next('Hello World!');
  observer.next('Welcome to JavaTpoint!');
  observer.complete();
  observer.next('Bye');
});

observable.subscribe(
  (x: any) => logItem(x),
  (error: any) => logItem('Error: ' + error),
  () => logItem('This is the first Example')
);

function logItem(val: any) {
  var node = document.createElement('li');
  var textnode = document.createTextNode(val);
  node.appendChild(textnode);
  document.getElementById('list').appendChild(node);
}
// Open the console in the bottom right to see results.

/**
 * Test 2
 */

const ids = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const transformTo = (id: number) =>
  of(id).pipe(
    map((data) => data * 10),
    tap({
      complete: () => console.log(`Inner value ${id}`),
    })
  );
of(ids)
  .pipe(
    mergeMap((ids) => ids),
    mergeMap((id) => transformTo(id)),
    tap({
      error: (error) => console.log(`Error with ${ids}: ` + error),
    }),
    toArray()
  )
  .subscribe((e) => console.log(e));

console.log('===========================================');
/**
 * Test 3
 */
of('Lorem', 'Ipsum', 'Vice')
  .pipe(
    tap((item) => {
      console.log('Before ' + item);
    }),
    map((item) => item.length),
    tap((item) => {
      console.log(item);
      console.log('Before ' + item);
    }),
    map((item) => {
      if (item == 4) {
        throw Error;
      }
      return item;
    }),
    tap(
      (item) => {
        console.log('After ' + item);
      },
      (err) => {
        console.log('Error: ' + err);
      },
      () => {
        console.log('Complete');
      }
    )
  )
  .subscribe((item) => console.log(item));

console.log('=============================');
/**
 * Test 4
 */

const r$ = of(4);
const x$ = of('X');
// interval(1000)
//   .pipe(mergeMap((v) => iif(() => v % 4 === 0, r$, x$)))
//   .subscribe(console.log);
