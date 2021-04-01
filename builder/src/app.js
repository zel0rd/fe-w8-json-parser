import tokenizer from './js/tokenizer.js';
import lexer from './js/lexer.js';
import parser from './js/parser.js';
import _ from './js/util.js'
import { analyzer } from  './js/analyzer';
import _ from './js/util.js';

const submitBtn = _.$(".submit");
const result = {
    tokenizer: _.$(".tokenizer_viewer"),
    lexer: _.$(".lexer_viewer"),
    parser: _.$(".parser_viewer")
}

submitBtn.addEventListener("click", () => {
    let inputStr = _.$("#input-data").value;
    analyzer(inputStr)
    if(isValidate(inputStr)){
        result.tokenizer.textContent = JSON.stringify(tokenizer(inputStr));
        result.lexer.textContent = JSON.stringify(lexer(tokenizer(inputStr)));
        result.parser.textContent = JSON.stringify(parser(lexer(tokenizer(inputStr))), null, "   ");
    } else {
        result.tokenizer.textContent = "Invalid Input";
        result.lexer.textContent = "Invalid Input";
        result.parser.textContent = "Invalid Input";
    }
})