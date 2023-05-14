export interface IMovie {
    release_date: string
    poster_path: string
    original_title: string
    id: number
}


export interface IDetail {
    backdrop_path: string
    original_title: string
    overview: string
    release_date: number
    vote_average: number
    id: number
}


export interface IActors {
    id: number
    original_name: string
    character: string
    profile_path: string
}


export interface ITrailers {
    id: number
    key: string
}


export interface IMore {
    id: number
    profile_path: string
    biography: string
    name: string
    birthday: number
}


export interface IDetailMore {
    id: number
    poster_path: string
    original_title: string
    release_date: number
}


export interface ISearch {
    id: number
    poster_path: string
    original_title: string
    release_date: number
}