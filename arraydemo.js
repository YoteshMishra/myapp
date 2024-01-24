// from a length
const int8 = new Int8Array(2);
int8[0] = 42;
console.log(int8[0]);
console.log(int8.length);
console.log(int8.BYTES_PER_ELEMENT);

// from an array
const x = new Int8Array([21, 31]);
console.log(x[1]);

// from another TypedArray
const y = new Int8Array(x);
console.log(y[0]);

// from an ArrayBuffer
const buffer = new ArrayBuffer(8);
const z = new Int8Array(buffer, 1, 4);
console.log(z.byteOffset);

// from an iterable
const iterable = (function* (){
    yield* [1, 2, 3];
})();
const int8FromIterable = new Int8Array(iterable);
console.log(int8FromIterable);
