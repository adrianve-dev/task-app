import { Place } from "../Types/place";

export const placeToString = (place: Place): string => {
    if(place === 'home') return '🏡 Home'
    else if(place === 'work') return '💼 Work'
    else return `📍 ${place.custom}`
}