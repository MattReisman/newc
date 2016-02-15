ViewSelect = React.createClass({
    render() {
        return (
            <div className='well view-select'>
                <h1>Select View</h1>
                <div className='row'>
                    <div className='col-xs-4 col-view-select'>
                        <button className='btn btn-view-select'>
                          <i className="fa fa-list"></i>
                          <span> List</span>
                        </button>
                    </div>
                    <div className='col-xs-4 col-view-select'>
                        <button className='btn btn-view-select'>
                          <i className="fa fa-map-marker"></i>
                            <span> Map</span>
                        </button>
                    </div>
                    <div className='col-xs-4 col-view-select'>
                          <button className='btn btn-view-select'>
                            <i className="fa fa-map-signs"></i>
                            <span> Trails</span>
                          </button>
                    </div>
                </div>
            </div>
        );
    }
});
