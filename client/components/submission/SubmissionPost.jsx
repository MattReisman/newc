SubmissionPost = React.createClass({
    mixins: [ReactMeteorData],
    getMeteorData() {
        var currentRoute = FlowRouter.getRouteName();
        const data = {};
        data.submission = Submissions.findOne({_id: this.props._id});
        return data;
    },
    viewCurrentRoute() {
        return FlowRouter.getRouteName();
    },

    render() {
        const rawDate = this.data.submission.createdAt;
        const formattedDate = moment(rawDate).format('MMMM Do YYYY');
        const elapsedTime = moment(rawDate)
            .startOf(rawDate)
            .fromNow();
        return (
            <div className='singleSubmission'>
                <br/>
                <div className='title-box row'>
                    <div className='col-xs-2'>
                        <a href='list'>
                            <i className='fa fa-arrow-circle-o-left'></i>
                        </a>
                    </div>
                    <div className='col-xs-10'>
                        <h1 className='title-font'>{this.data.submission.subject}</h1>
                    </div>
                </div>
                /* */
                <div className='subtitle-box row'>
                    <div className='col-xs-6 subtitle-box-section'>
                        <p className='data-title'>Author:
                        </p>
                        <h5 className='data-content'>{this.data.submission.username}</h5>

                    </div>
                    <div className='col-xs-6 subtitle-box-section'>
                        <p className='data-title'>Submitted:
                        </p>
                        <p className='data-content'>
                            {formattedDate}</p>

                    </div>
                </div>
                <div className='content-box jumbotron'>
                    <p className='data-title'>Content:</p>
                    <p className='data-content'>{this.data.submission.textContent}</p>

                </div>
                <div className='location-box row'>
                    <div className='col-xs-6 location-section'>
                        <p className='data-title'>Lattitude:
                        </p>
                        <p className='data-content'>{this.data.submission.locationLat}</p>
                    </div>
                    <div className='col-xs-6 location-section'>
                        <p className='data-title'>Logitude:
                        </p>
                        <p className='data-content'>{this.data.submission.locationLon}</p>
                    </div>
                    <div className='col-xs-12 location-map-view'>Map view</div>
                </div>
                <div className='trailmix-box'>
                    <div className='col-xs-6 trailmix-section'>
                        <p className='data-title'>Trail Selection:
                        </p>
                        <p className='data-content'>{this.data.submission.trailSelect}</p>
                    </div>
                    <div className='col-xs-6 trailmix-section'>
                        <p className='data-title'>Attachments:
                        </p>
                        <p className='data-content'>{this.data.submission.attachments}</p>
                    </div>
                </div>
            </div>
        );
    }
});
