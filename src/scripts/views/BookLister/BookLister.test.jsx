// BookLister.test.js
import React from 'react';
import BookLister from './BookLister.jsx';
import renderer from 'react-test-renderer';

test('BookLister is rendered', () => {
    let initialState = {
        isLoading: false,
        message: '',
        books: {
            0:[]
        },
        page: 0,
        pageSize: 5,
        lastPage: false,
        onLoad: () => true
    };
    let extraBooks = {
        0: [
            {
                'title':'Cracking the Coding Interview',
                'author':'Gayle Laakmann McDowell',
                'year_published':'2015'
            },
            {
                'title':'HTML and CSS: Design and Build Websites',
                'author':'Jon Duckett',
                'year_published':'2011'
            },
            {
                'title':'Raspberry Pi 3: Beginner to Pro – Step by Step Guide',
                'author':'Timothy Short',
                'year_published':'2016'
            },
            {
                'title':'SQL: The Ultimate Guide From Beginner To Expert - Learn And Master SQL In No Time!',
                'author':'Peter Adams',
                'year_published':'2016'
            },
            {
                'title':'The LEGO MINDSTORMS EV3 Discovery Book (Full Color): A Beginner\'s Guide to Building and Programming Robots',
                'author':'Laurens Valk',
                'year_published':'2014'
            }
        ]
    };
    const component = renderer.create(
        <BookLister {...initialState} />
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();

    initialState.books = extraBooks;
    const componentWithBooks = renderer.create(
        <BookLister {...initialState} />
    );
    tree = componentWithBooks.toJSON();
    expect(tree).toMatchSnapshot();
});
