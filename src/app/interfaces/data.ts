export interface clientStrings{
    s:string,
    r: RegExp
}

export interface GeoApi{
    name: string
    local_names: object,
    lat: number,
    long: number,
    country: string,
}