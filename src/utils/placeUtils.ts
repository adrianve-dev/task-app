import { Place } from "../Types/place";

export const placeToString = (place: Place): string => {
    if(place === 'home') return '🏡 Home'
    else if(place === 'work') return '💼 Work'
    else return `📍 ${place.custom.slice(0,1).toUpperCase()}${place.custom.slice(1).toLowerCase()}`
}