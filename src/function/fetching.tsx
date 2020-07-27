const fetching = (URL: string) => {
    return fetch(URL, {
        headers: {
            accept: '*/*',
        },

        body: null,
        method: 'GET',
    }).then(response => {
        return response.json()
    })
}

export default fetching
