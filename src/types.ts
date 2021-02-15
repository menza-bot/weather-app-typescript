export interface SetDataType {
        name: string | undefined,
        mainTemp: number | null,
        describtion: string,
        iconId: number
}

export interface WeatherResponseData {
    weather: [
        {
            id: number,
            main: string,
            describtion: string
        }
    ],
    main: {
        temp: number
    }
    name: string
}

export interface UseFormType  {
    city: string
}





