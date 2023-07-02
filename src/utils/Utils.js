export const paginate=(arr,page,size)=>{
    let startIndex= page*size
    let lastIndex= startIndex+size
    return arr.slice(startIndex,lastIndex)
}


export const searching=(arr,searchBy,keyword)=>{
    return arr.filter( item => item[searchBy].toLowerCase().includes(keyword.toLowerCase()))
}

export const sortProduct=(arr,sortBy,sortType,sortOrder)=>{
    if(sortType==="string")
    return stringSort(arr,sortBy,sortOrder)
    if(sortType==="number")
    return numberSort(arr,sortBy,sortOrder)
    
}
const stringSort=(arr,sortBy,sortOrder)=>{
    return arr.sort((item1,item2)=>{
        item1=item1[sortBy].toLowerCase()
        item2=item2[sortBy].toLowerCase()
        if(item1<item2) return sortOrder==="asc" ? -1 : 1;
        if(item1>item2) return sortOrder==="asc" ? 1: -1;
        return 0

    })
}
const numberSort=(arr,sortBy,sortOrder)=>{
    return arr.sort((item1,item2)=>{
        item1= parseInt(item1[sortBy])
        item2=parseInt(item2[sortBy])
        return  sortOrder==="asc" ? item1-item2 :item2-item1;
    })
}
export const filterByModel = (arr, mod) => {
    return arr.filter(item => mod === "All" ? item : item["Model"] === mod)
  }