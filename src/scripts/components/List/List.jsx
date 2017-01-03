import React from 'react';

import './List.scss';

function List({
    page,
    lastPage,
    children,
    onNextPageClick,
    onPreviousPageClick
}) {
    let leftArrowClasses = 'left-arrow fa fa-arrow-circle-left';
    let rightArrowClasses = 'right-arrow fa fa-arrow-circle-right';

    if (page === 0) {
        leftArrowClasses = 'left-arrow fa';
    }
    if (lastPage) {
        rightArrowClasses = 'right-arrow fa';
    }

    return (
        <div className='list'>
            <div className='list-toolbar'>
                <div
                    className={leftArrowClasses}
                    onClick={onPreviousPageClick} />
                <div className='pagination-status'>
                    {'Page ' + (page + 1)}
                </div>
                <div
                    className={rightArrowClasses}
                    onClick={onNextPageClick} />
                <div className='clear' />
            </div>
            {children}
        </div>
    );
}

List.propTypes = {
    page: React.PropTypes.number,
    lastPage: React.PropTypes.bool,
    children: React.PropTypes.oneOfType([
        React.PropTypes.arrayOf(React.PropTypes.node),
        React.PropTypes.node
    ]),
    onNextPageClick: React.PropTypes.func,
    onPreviousPageClick: React.PropTypes.func
};

export default List;
