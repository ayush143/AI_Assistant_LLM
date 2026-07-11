const tools=require("../tools/tools")

async function  executeTool(name,args) {
    if(!tools[name]){
        return "Invallid Tool";
    }
 return await tools[name](args);

    
}
module.exports=executeTool;