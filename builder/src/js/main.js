import { pipe } from './util.js';
import tokenizer from './tokenizer.js';
import lexer from './lexer.js';
import parser from './parser.js';
import isValidate from './isValidate.js';

//----------json parser를 구동------------
const JSONParser = str => pipe(tokenizer, lexer, parser)(str);
const runTestCases = str => JSONParser(str);

export default runTestCases;