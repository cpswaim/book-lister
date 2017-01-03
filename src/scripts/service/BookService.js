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
                return new Promise((resolve, reject) => resolve(response.json()));
            });
    }
}

export default BookService;
