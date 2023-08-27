export interface HeaderType {
    id : string,
    title : string,
}
export interface SubType {
    id : string,
    sub : [
        {id?: string, manu?: string},        
        {id?: string, manu?: string},        
        {id?: string, manu?: string},        
        {id?: string, manu?: string},        
        {id?: string, manu?: string}
    ]
}

export interface bannerListType {
    id : string,
    title : string,
    src : string
}