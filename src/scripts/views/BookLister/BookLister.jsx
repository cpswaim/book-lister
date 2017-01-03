import React, { Component } from 'react';

import LoadMask from 'components/LoadMask';
import Banner from 'components/Banner';
import List from 'components/List';
import Book from 'components/Book';

class BookLister extends Component {
    componentDidMount() {
        // Load initial pages
        this.props.onLoad(this.props.pageSize);
    }
    render() {
        let {
            books,
            page,
            isLoading,
            message,
            lastPage,
            onResetApp,
            onNextPageClick,
            onPreviousPageClick
        } = this.props;
        let currentBooks = books[page];

        return (
            <div className='application container'>
                <LoadMask
                    isLoading={isLoading}
                    message={message}
                    onRefreshClick={onResetApp} />
                <Banner
                    onTitleClick={() => window.location.reload()}
                    onRefreshClick={onResetApp}
                />
                <List
                    page={page}
                    lastPage={lastPage}
                    onNextPageClick={onNextPageClick}
                    onPreviousPageClick={onPreviousPageClick} >
                    {currentBooks.map((book) =>
                        <Book
                            key={'' + book.title + book.author + book.year_published}
                            {...book} />
                    )}
                </List>
            </div>
        );
    }
}

BookLister.propTypes = {
    books: React.PropTypes.object,
    page: React.PropTypes.number,
    lastPage: React.PropTypes.bool,
    pageSize: React.PropTypes.number,
    isLoading: React.PropTypes.bool,
    message: React.PropTypes.string,
    onLoad: React.PropTypes.func,
    onLoadBookPage: React.PropTypes.func,
    onResetApp: React.PropTypes.func,
    onNextPageClick: React.PropTypes.func,
    onPreviousPageClick: React.PropTypes.func
};

export default BookLister;
