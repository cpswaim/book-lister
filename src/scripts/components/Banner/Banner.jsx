import React from 'react';

import './Banner.scss';

function Banner({
    onTitleClick,
    onRefreshClick
}) {
    return (
        <div className='banner navbar'>
            <div className='navbar-header'>
                <a className='navbar-brand active title'
                    onClick={onTitleClick}>
                    BookLister
                </a>
            </div>
            <a className='btn-refresh btn btn-raised btn-info'
                onClick={onRefreshClick}>
                <div>
                    <span className='fa fa-refresh' />
                    {' Reset'}
                </div>
            </a>
        </div>
    );
}

Banner.propTypes = {
    onTitleClick: React.PropTypes.func,
    onRefreshClick: React.PropTypes.func
};

export default Banner;
