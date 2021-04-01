import _ from './util.js';
import tokenizer from './tokenizer.js';
import lexer from './lexer.js';
import parser from './parser.js';
import isValidate from './isValidate.js';
import { analyzer } from  './analyzer.js';

let dataObj = {};
const analyzerBtn = _.$(".analyzer");

const processData = (str) => {
    analyzerBtn.addEventListener("click", () => analyzer(str));
    analyzerBtn.disabled = false;
    dataObj["tokenArr"] = JSON.stringify(tokenizer(str));
    dataObj["lexicalTokenArr"] = JSON.stringify(_.pipe(tokenizer, lexer)(str));
    dataObj["parsedData"] = JSON.stringify(_.pipe(tokenizer, lexer, parser)(str), null, "   ");
    return dataObj;
}

const showErrorMsg = () => {
    analyzerBtn.disabled = true;
    const keys = ["tokenArr", "lexicalTokenArr", "parsedData"];
    keys.forEach(key => dataObj[key] = "Invalid Input");
    return dataObj;
}

const runJSONParser = (str) => isValidate(str) ? processData(str) : showErrorMsg();

export default runJSONParser;
