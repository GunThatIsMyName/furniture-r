export const categoryFormat=(lists,category)=>{
    let list =lists.map(item=>item[category]);
    if(category==="colors"){
        list = list.flat()
    }
    return ["All",...new Set(list)]
}
