import { connect } from 'react-redux';
import BookLister from './BookLister';

import {
    loadBookPage,
    resetApp,
    nextPage,
    previousPage
} from '../../actions';

const mapStateToProps = (state) => ({
    books: state.books,
    page: state.page,
    pageSize: state.pageSize,
    isLoading: state.isLoading,
    message: state.message,
    lastPage: state.lastPage
});

const mapDispatchToProps = (dispatch) => ({
    onLoad(pageSize) {
        dispatch(loadBookPage(0, pageSize));
    },
    onResetApp() {
        dispatch(resetApp());
    },
    onNextPageClick() {
        dispatch(nextPage());
    },
    onPreviousPageClick() {
        dispatch(previousPage());
    }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(BookLister);
