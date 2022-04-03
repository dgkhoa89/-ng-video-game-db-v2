export interface Game {
    id: string;
    background_image: string;
    name: string;
    release: string;
    metacritic_url: string;
    website: string;
    description: string;
    metacritic: number;
    genres: Array<Genre>;
    parent_platforms: Array<Platform>;
    publishers: Array<Publisher>;
    ratings: Array<Rating>;
    screenshots: Array<Screenshot>;
    trailers: Array<Trailer>

}


export interface APIResponse<T> {
    results: Array<T>;
}

interface Genre {
    name: string;
}

interface Platform {
    platform: {
        name: string;
        slug: string;
    }
}


interface Publisher {
    name: string;
}


interface Rating {
    id: number;
    count: number;
    title: string;
}


interface Screenshot {
    image: string;
}

interface Trailer {
    data: {
        max: string;
    }
}




























