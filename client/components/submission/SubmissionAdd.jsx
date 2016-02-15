SubmissionAdd = React.createClass({
    mixins: [ReactMeteorData],
    getInitialState() {
        return {hideCompleted: false, showCompleted: false,};
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
    renderSubmissions() {
        return this
            .data
            .submissions
            .map((submission) => {
                return <Submission key={submission._id} submission={submission}/>;
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
            text: text,
            createdAt: new Date(),
            owner: Meteor.userId(),
            username: Meteor
                .user()
                .username,
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
            <div>
                <form className="new-submission" onSubmit={this.handleSubmit}>
                    <input type="text" ref="textInput" placeholder="Type to add new tasks"/>
                </form>
            </div>
        );
    },
});
