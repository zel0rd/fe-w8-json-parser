import isValidate from './js/isValidate.js';
import runTestCases from './js/main.js';
import tokenizer from './js/tokenizer.js';
import lexer from './js/lexer.js';
import parser from './js/parser.js';
import _ from './js/util.js'

const ex1 = '[123,[2,3),4, "abd", "aadcd"]';
const ex4 = "[123,[2,3],4, 'abd', 'aadcd']" ;
const ex2 = '[1, [1,[2,[3]]],"hello world", "codesquadFE", null, true, false]';
const ex3 = '["1a3",[null,false,["11",[112233],{"easy" : ["hello", {"a":"a"}, "world"]},112],55, "99"],{"a":"str", "b":[912,[5656,33],{"key" : "innervalue", "newkeys": [1,2,3,4,5]}]}, true]';

const submitBtn = _.$(".submit");
const outputStr = _.$(".output");
// let inputStr = _.$("#story").value;

const result = {
    tokenizer: _.$(".tokenizer_viewer"),
    lexer: _.$(".lexer_viewer"),
    parser: _.$(".parser_viewer")
}

submitBtn.addEventListener("click", () => {
    let inputStr = _.$("#input-data").value;
    if(isValidate(inputStr)){
        result.tokenizer.textContent = JSON.stringify(tokenizer(inputStr));
        result.lexer.textContent = JSON.stringify(lexer(tokenizer(inputStr)));
        result.parser.textContent = JSON.stringify(parser(lexer(tokenizer(inputStr))), null, " ");
        // outputStr.textContent = JSON.stringify(runTestCases(inputStr));
    } else {
        result.tokenizer.textContent = "Invalid Input";
        result.lexer.textContent = "Invalid Input";
        result.parser.textContent = "Invalid Input";
    }
})