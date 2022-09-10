import './style.css';

import { of, map, Observable } from 'rxjs';

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
