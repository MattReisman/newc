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

        return (
            <div className='jumbotron'>
                <h1>test out</h1>
                <h1>{this.viewCurrentRoute()}</h1>

                <h1>{this.data.submission.username}</h1>
                <h1>{this.data.submission.subject}</h1>
                <h1>{this.data.submission._id}</h1>
            </div>

        );
    },
});
