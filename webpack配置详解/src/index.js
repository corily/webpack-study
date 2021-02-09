import add from '$js/add';
// import mul from './mul'

import '$css/common.css';

console.log('index.js~~~');

console.log('add: ', add(10, 10));
// console.log('mul: ', mul(10, 10))

import(/* webpackChunkName: 'mul' */'./js/mul')
  .then(({ default: mul }) => {
    console.log('mul::', mul(10, 10));
  });
