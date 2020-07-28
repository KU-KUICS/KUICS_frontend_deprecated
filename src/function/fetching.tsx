const fetching = (URL: string) => {
    return fetch(URL, {
        headers: {
            accept: '*/*',
        },
        body: null,
        method: 'GET',
    })
        .then(response => {
            const debugRes = response.clone()
            console.log(debugRes.json())

            return response.json()
        })
        .catch(err => {
            throw Error
        })
}

export default fetching
