Footer = React.createClass({
    // This mixin makes the getMeteorData method work
    mixins: [ReactMeteorData],

    // Loads items from the Tasks collection and puts them on this.data.tasks
    getMeteorData() {
        let query = {};

        return {
            currentUser: Meteor.user()
        };
    },
    render() {
        return (
<div className='footer'>
{ this.data.currentUser ?

                        <div className='row'>
                            <div className='col-xs-3 col-view-select'>
                                <a href='list'>
                                    <button className='btn btn-view-select'>
                                        <i className="fa fa-list"></i>
                                        <span className='hidden-ultrasmall'>
                                            List</span>
                                    </button>
                                </a>
                            </div>
                            <div className='col-xs-3 col-view-select'>
                                <a href='map'>
                                    <button className='btn btn-view-select'>
                                        <i className="fa fa-map-marker"></i>
                                        <span className='hidden-ultrasmall'>
                                            Map</span>
                                    </button>
                                </a>
                            </div>
                            <div className='col-xs-3 col-view-select'>
                                <a href='trail'>
                                    <button className='btn btn-view-select'>
                                        <i className="fa fa-map-signs"></i>
                                        <span className='hidden-ultrasmall'>
                                            Trails</span>
                                    </button>
                                </a>
                            </div>
                            <div className='col-xs-3 col-view-select'>
                                <a href='add'>
                                    <button className='btn btn-danger'>
                                        <i className='fa fa-plus'></i>
                                        <span className='hidden-ultrasmall'>
                                            Entry</span>
                                    </button>
                                </a>
                            </div>
                        </div>
                :
                        <div className='row'>
                            <div className='col-xs-4 col-view-select'>
                                <a href='list'>
                                    <button className='btn btn-view-select'>
                                        <i className="fa fa-list"></i>
                                        <span className='hidden-ultrasmall'>
                                            List</span>
                                    </button>
                                </a>
                            </div>

                            <div className='col-xs-4 col-view-select'>
                                <a href='map'>
                                    <button className='btn btn-view-select'>
                                        <i className="fa fa-map-marker"></i>
                                        <span className='hidden-ultrasmall'>
                                            Map</span>
                                    </button>
                                </a>
                            </div>
                            <div className='col-xs-4 col-view-select'>
                                <a href='trail'>
                                    <button className='btn btn-view-select'>
                                        <i className="fa fa-map-signs"></i>
                                        <span className='hidden-ultrasmall'>
                                            Trails</span>
                                    </button>
                                </a>
                            </div>
                        </div>
        }
                    </div>


);
    }
});
