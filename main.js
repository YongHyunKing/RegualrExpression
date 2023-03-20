const str = `
010-1234-5678
hellow@naver.com
https://www.naver.com
The quick brown fox jumps over the lazy dog.
abbcccddd
the
`;

const regexp = /fox/gi;
// console.log(str.replace(regexp, "Hi"));

// console.log(str.match(/m$/gm));

// console.log(str.match(/\w/g));

// console.log(str.match(/\bT\w{1,}\b/g));

console.log(str.match(/(?<=@).{1,}/g));
