List = React.createClass({
    mixins: [ReactMeteorData],
    getInitialState() {
        return {hideCompleted: false, showCompleted: false};
    },
    getMeteorData() {
        let query = {};

        if (this.state.hideCompleted) {
            query = {
                checked: {
                    $ne: true
                }
            };
        }
        if (this.state.showCompleted) {
            query = {
                checked: true
            };
        }
        return {
            submissions: Submissions
                .find(query, {
                sort: {
                    createdAt: -1
                }
            })
                .fetch()
        };
    },
    viewCurrentRoute() {
        return FlowRouter.getRouteName();
    },
    renderSubmissions() {
        return this
            .data
            .submissions
            .map((submission) => {
                return <ListItem key={submission._id} submission={submission}/>;
            });
    },
    handleSubmit(event) {
        event.preventDefault();

        // Pull text from field

        var text = React
            .findDOMNode(this.refs.textInput)
            .value
            .trim();
        Submissions.insert({
            subId: _id,
            subject: subject,
            textContent: textContent,
            locationLat: locationLat,
            locationLon: locationLon,
            attachments: 'textContent',
            trailSelect: 'trailSelect',
            createdAt: new Date(),
            owner: Meteor.userId(),
            username: Meteor
                .user()
                .username
        });

        // Clear form

        React
            .findDOMNode(this.refs.textInput)
            .value = "";
    },
    toggleHideCompleted() {
        this.setState({
            hideCompleted: !this.state.hideCompleted
        });
    },
    toggleShowCompleted() {
        this.setState({
            showCompleted: !this.state.showCompleted
        });
    },
    render() {
        return (
            <ul>
                {this.viewCurrentRoute()}
                {this.renderSubmissions()}
            </ul>
        );
    }
});
