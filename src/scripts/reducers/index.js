import {
    LOAD_BOOK_PAGE,
    RECEIVE_BOOKS,
    RESET_APP,
    NEXT_PAGE,
    PREVIOUS_PAGE
} from '../actions';

const initialState = {
    isLoading: false,
    message: '',
    books: {
        0: []
    },
    page: 0,
    pageSize: 5,
    lastPage: false
};

// Main Reducer, set state as initial if no other provided.
export default function(state = initialState, action) {
    let books = state.books;
    let isLoading = state.isLoading;
    let message = state.message;
    let page = state.page;
    let pageSize = state.pageSize;
    let lastPage = state.lastPage;

    switch (action.type) {
    case LOAD_BOOK_PAGE:
        isLoading = true;
        break;
    case RECEIVE_BOOKS:
        isLoading = false;
        lastPage = false;
        if (Array.isArray(action.books)) {
            books[action.page] = action.books;
        } else {
            books = {
                0: []
            };
            message = 'We have encountered an error. Use the button below to reset the application.';
            page = 0;
        }
        break;
    case RESET_APP:
        books = {
            0: []
        };
        page = 0;
        pageSize = 5;
        message = '';
        isLoading = true;
        lastPage = false;
        break;
    case NEXT_PAGE:
        if (!lastPage) {
            page = page + 1;
        }
        break;
    case PREVIOUS_PAGE:
        page = page - 1;
        lastPage = false;
        break;
    }

    if (books[page + 1] && books[page + 1].length === 0) {
        lastPage = true;
    }

    return {
        isLoading,
        message,
        books,
        page,
        pageSize,
        lastPage
    };
};
