const tools=require("../tools/tools")

async function  executeTool(name,args) {
    if(!tools[name]){
        return "Invallid Tool";
    }
    if(!args=="String"){
        return "query must be a string"
    }

    return tools[name](args?.query);
   
}
module.exports=executeTool;