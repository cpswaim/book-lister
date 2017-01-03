import BookService from '../service/BookService';
const bookService = new BookService();

// Action constants
export const LOAD_BOOK_PAGE = 'LOAD_BOOK_PAGE';
export const RECEIVE_BOOKS = 'RECEIVE_BOOKS';
export const RESET_APP = 'RESET_APP';
export const NEXT_PAGE = 'NEXT_PAGE';
export const PREVIOUS_PAGE = 'PREVIOUS_PAGE';

export function loadBookPage(page, pageSize) {
    return (dispatch, getState) => {
        const { books } = getState();
        let bookRequests = [];
        let bookRequestPages = [];

        // Check for page in the cache
        // to ensure we can move to the next page.
        // This should rarely fire, only on initial load
        // or if a previous call has failed.
        if (!books[page] || !books[page].length > 0) {
            bookRequests.push(bookService.getBooks(page, pageSize));
            bookRequestPages.push(page);
        }

        // Check for next page in the cache
        // and fetch it if necessary
        if (!books[page + 1]) {
            bookRequests.push(bookService.getBooks(page + 1, pageSize));
            bookRequestPages.push(page + 1);
        }

        // If any pages are being requested, show the load mask
        if (bookRequests.length > 0) {
            dispatch({
                type: LOAD_BOOK_PAGE,
                page
            });
        };

        return Promise.all(bookRequests).then(values => {
            // Apply responses to app state
            bookRequestPages.forEach((requestPage, idx) => {
                dispatch(receiveBooks(values[idx], requestPage));
            });
            return Promise.resolve();
        });
    };
}

export function receiveBooks(books, page) {
    return {
        type: RECEIVE_BOOKS,
        books,
        page
    };
}

export function resetApp() {
    return (dispatch, getState) => {
        const { pageSize } = getState();
        dispatch({
            type: RESET_APP
        });
        dispatch(loadBookPage(0, pageSize));
    };
}

export function nextPage() {
    return (dispatch, getState) => {
        const { page, pageSize } = getState();
        dispatch(loadBookPage(page + 1, pageSize)).then(() => {
            dispatch({
                type: NEXT_PAGE
            });
        });
    };
}

export function previousPage() {
    return dispatch => {
        dispatch({
            type: PREVIOUS_PAGE
        });
    };
}
