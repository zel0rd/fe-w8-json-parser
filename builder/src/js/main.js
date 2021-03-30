//-------------module import------------
import { pipe } from './util.js';
import tokenizer from './tokenizer.js';
import lexer from './lexer.js';
import parser from './parser.js';
import isValidate from './isValidate.js';

//--------------test cases--------------
const ex1 = '[1,2,[3,4,[5,[6]]]]';
const ex2 = '[1, [2,[3]],"hello world", "codesquadFE", null]';
const ex3 = '"1a3",[null,false,["11",[112233],{"easy" : ["hello", {"a":"a"}, "world"]},112],55, "99"],{"a":"str", "b":[912,[5656,33],{"key" : "innervalue", "newkeys": [1,2,3,4,5]}]}, true';

//json parser를 구동.
function JSONParser (str) {
    // console.log("시험용");
    // const result = pipe(tokenizer, lexer, parser)(str);
    // return result;
    // console.log(tokenizer(str));
    console.log(isValidate(str))
    console.log(tokenizer(str))
    lexer(tokenizer(str))
}

const runTestCases = (str) => {
    JSONParser(str);
    // console.dir(JSONParser(ex1), {depth: null});
    // console.dir(JSONParser(ex2), {depth: null});
    // console.dir(JSONParser(ex3), {depth: null});
}

export default runTestCases;