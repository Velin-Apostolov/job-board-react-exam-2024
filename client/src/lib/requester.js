const baseUrl = 'http://localhost:3030/'

async function requester(method, url, data) {
    const options = {
        method,
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    };

    const response = await fetch(baseUrl + url, options);

    const result = await response.json();

    return result;
}

const get = requester.bind(null, 'GET');
const post = requester.bind(null, 'POST');
const put = requester.bind(null, 'PUT');
const del = requester.bind(null, 'DELETE');

export {
    get,
    post,
    put,
    del as delete
}