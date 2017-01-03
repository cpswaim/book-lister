import React from 'react';

import './Book.scss';

function Book({
    title,
    author,
    year_published: yearPublished
}) {
    return (
        <div className='book'>
            <div className='book-icon fa fa-lg fa-book' />
            <div className='book-body'>
                <div className='book-title'>{title}</div>
                <div className='book-byline'>by {author}</div>
                <div className='book-year'>Published: {yearPublished}</div>
            </div>
        </div>
    );
}

Book.propTypes = {
    title: React.PropTypes.string,
    author: React.PropTypes.string,
    year_published: React.PropTypes.string
};

export default Book;
