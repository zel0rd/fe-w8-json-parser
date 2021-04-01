import tokenizer from './tokenizer.js';
import lexer from './lexer.js';
import parser from './parser.js';

let arrDepthDom = document.querySelector(".arrDepth")
let stringCountDom = document.querySelector(".stringCount")
let numCountDom = document.querySelector(".numCount")

let MAXDEPTH;
let strTypeCount;
let numTypeCount;
const analyzer = (str) => {
    MAXDEPTH = 0;
    strTypeCount = 0;
    numTypeCount = 0;
    const parserResult = parser(lexer(tokenizer(str)), null, "   ");
    
    getDepth(parserResult, 0)
    console.log("MAXDEPTH : ", MAXDEPTH)

    countStrType(parserResult)
    console.log("countStrType : ", strTypeCount)
    
    countNumType(parserResult)
    console.log("countNumType : ", numTypeCount)

    arrDepthDom.innerText = `배열 중첩 수준 : ${MAXDEPTH} 단계`
    stringCountDom.innerText = `문자열 타입 갯수 : ${strTypeCount}개`
    numCountDom.innerText = `숫자 타입 갯수 : ${numTypeCount}개`

    ObjPrint(parserResult)
}

function getDepth(JSON, depth){
    if(JSON.child){
        depth += 1;
        for(let obj in JSON.child){
            getDepth(JSON.child[obj], depth)
        }
    } 
    if(depth > MAXDEPTH){
        MAXDEPTH = depth;
    }
}

function countStrType(JSON){
    if(JSON.child){
        for(let obj in JSON.child){
            countStrType(JSON.child[obj])
        }
    } else {
        if(JSON.type === "string"){
            strTypeCount += 1;
        }
    }
}

function countNumType(JSON){
    if(JSON.child){
        for(let obj in JSON.child){
            countNumType(JSON.child[obj])
        }
    } else {
        if(JSON.type === "number"){
            numTypeCount += 1;
        }
    }
}

function ObjPrint(JSON){
    if(JSON.child){
        for(let obj in JSON.child){
            ObjPrint(JSON.child[obj])
        }
    } else {
        console.log(JSON)
    }
}

export { analyzer }