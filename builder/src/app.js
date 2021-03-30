import runTestCases from './js/main.js';
const ex1 = '[123,[2,3),4, "abd", "aadcd"]';
const ex4 = "[123,[2,3],4, 'abd', 'aadcd']" ;
const ex2 = '[1, [2,[3]],"hello world", "codesquadFE", null]';
const ex3 = '["1a3",[null,false,["11",[112233],{"easy" : ["hello", {"a":"a"}, "world"]},112],55, "99"],{"a":"str", "b":[912,[5656,33],{"key" : "innervalue", "newkeys": [1,2,3,4,5]}]}, true]';

console.log(runTestCases(ex1));