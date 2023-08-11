import {baseUrl} from './base_url';

export const bookmarksLoader = async () => {
    // make a call to backend index route
    const response = await fetch(`${baseUrl}/bookmarks`)
    // convert the response in a js object
    const bookmarks = await response.json()
    // return the people
    return bookmarks
}

export const bookmarkLoader = async ({params}) => {
    // get the id param from the params object
    const id = params.id
    // make a call to backend show route
    const response = await fetch(`${baseUrl}/bookmarks/${id}`)
    // convert the response into a js object
    const bookmark = await response.json()
    // return the person
    return bookmark
}
