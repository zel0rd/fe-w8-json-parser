import _ from './js/util.js'
import runJSONParser from './js/main.js';

const submitBtn = _.$(".submit");
const result = {
    tokenizer: _.$(".tokenizer_viewer"),
    lexer: _.$(".lexer_viewer"),
    parser: _.$(".parser_viewer")
}

submitBtn.addEventListener("click", () => {
    const inputStr = _.$("#input-data").value;
    const { tokenArr, lexicalTokenArr, parsedData } = runJSONParser(inputStr);
    result.tokenizer.textContent = tokenArr;
    result.lexer.textContent = lexicalTokenArr;
    result.parser.textContent = parsedData;
})