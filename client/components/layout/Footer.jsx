Footer = React.createClass({
    render() {
        return (
            <div className='footer'>
                <div className='row'>
                    <div className='col-xs-3 col-view-select'>
                        <a href='list'>
                            <button className='btn btn-view-select'>
                                <i className="fa fa-list"></i>
                                <span className='hidden-ultrasmall'> List</span>
                            </button>
                        </a>
                    </div>
                    <div className='col-xs-3 col-view-select'>
                        <a href='map'>
                            <button className='btn btn-view-select'>
                                <i className="fa fa-map-marker"></i>
                                <span className='hidden-ultrasmall'> Map</span>
                            </button>
                        </a>
                    </div>
                    <div className='col-xs-3 col-view-select'>
                        <a href='trail'>
                            <button className='btn btn-view-select'>
                                <i className="fa fa-map-signs"></i>
                                <span className='hidden-ultrasmall'> Trails</span>
                            </button>
                        </a>
                    </div>

                    <div className='col-xs-3 col-view-select'>
                        <button className='btn btn-danger'>
                            <i className='fa fa-plus'></i>
                            <span className='hidden-ultrasmall'> Entry</span>
                        </button>
                    </div>
                </div>

            </div>
        );
    }
});
