import React from 'react';

import './LoadMask.scss';

function LoadMask({
    isLoading,
    message,
    onRefreshClick
}) {
    let className = 'loadmask modal fade in';
    if (message) {
        className += ' message';
    }
    if (!message && !isLoading) {
        className += ' hide';
    }
    return (
        <div className={className}>
            <div className='modal-dialog modal-sm'>
                <div className='modal-content text-center'>
                    <div className='modal-header'>
                        <h4 className='modal-title'>
                            {message || 'Loading Books...'}
                        </h4>
                    </div>
                    <div className='modal-body'>
                        <div className='loading-image'>
                            <div className='spinner'>
                                <div className='bounce1' />
                                <div className='bounce2' />
                                <div className='bounce3' />
                            </div>
                        </div>
                        <a className='btn-refresh btn btn-raised btn-info fa fa-refresh'
                            onClick={onRefreshClick}>
                            <div className='ripple-container' />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

LoadMask.propTypes = {
    isLoading: React.PropTypes.bool,
    message: React.PropTypes.string,
    onRefreshClick: React.PropTypes.func
};

export default LoadMask;
