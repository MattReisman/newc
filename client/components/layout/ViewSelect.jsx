ViewSelect = React.createClass({
    currentRoute() {
      var current = FlowRouter.current();
      console.log(current);
    },
    render() {
        return (
            <div className='well view-select'>
                <div className='row'>
                    <div className='col-xs-4 col-view-select'>
                        <a href='list'>
                            <button className='btn btn-view-select'>
                                <i className="fa fa-list"></i>
                                <span>
                                    List</span>
                            </button>
                        </a>
                    </div>
                    <div className='col-xs-4 col-view-select'>
                        <a href='map'>
                            <button className='btn btn-view-select'>
                                <i className="fa fa-map-marker"></i>
                                <span>
                                    Map</span>
                            </button>
                        </a>
                    </div>
                    <div className='col-xs-4 col-view-select'>
                        <a href='trail'>
                            <button className='btn btn-view-select'>
                                <i className="fa fa-map-signs"></i>
                                <span>
                                    Trails</span>
                            </button>
                        </a>
                    </div>
                </div>
            </div>
        );
    },
});
