import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import './app.scss';

import configureStore from './store';

import { BookListerContainer as BookLister } from 'views/BookLister';

const store = configureStore();

document.addEventListener('DOMContentLoaded', function(event) {
    ReactDOM.render(
        <Provider store={store}>
            <BookLister />
        </Provider>,
        document.getElementById('app')
    );
});
