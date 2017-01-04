class BookService {
    constructor() {
        this.host = 'http://development.readworks.org';
        this.routes = {
            getBooks: '/v2/books'
        };
    }
    getBooks(page, pageSize) {
        let route = this.routes.getBooks;
        let config = {
            method: 'GET',
            headers: new Headers(),
            mode: 'cors',
            cache: 'default'
        };
        let start = page * pageSize;

        return fetch(`${this.host}${route}?start=${start}&count=${pageSize}`, config)
            .then(function(response) {
                // Return JSON body of response
                return response.json().then((json) => {
                    let body = json;
                    if (!response.ok || response.status >= 400) {
                        body = Object.assign(body || {}, {
                            success: false
                        });
                    }
                    return Promise.resolve(body);
                });
                // return new Promise((resolve, reject) => resolve(body));
            }).catch(function(error) {
                console.error(error);
                return Promise.resolve({
                    success: false,
                    message: 'Network or permissions error'
                });
            });
    }
}

export default BookService;
