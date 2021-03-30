import tokenizer from "./tokenizer";

//의미를 분석. value랑 type을 분류해서 객체형태로 저장해줌.
const lexer = (tokenizerArr) => {
    let result = [];
    let type = ""
    tokenizerArr.map(function(token){
        let obj = {};
        if(token[0] === "[" && type === "") type="array";
        if(!isNaN(token) && type === "") type="number";
        if(token[0] === "{"  && type === "") type="object";
        if(token === "null") type="null"
        if(token === "true" || token ==="false") type="bool"
        if(token[0] === '"' || token[0] === "'" ){ type="string"}
        obj["type"] = type;
        obj["value"] =token;
        result.push(obj)
    })
    return result;
}


export default lexer;