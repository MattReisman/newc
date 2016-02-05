App = React.createClass({
    mixins: [ReactMeteorData],
    getInitialState() {
        return {
            hideCompleted: false
        };
    },

    getMeteorData() {
        let query = {};

        if (this.state.hideCompleted) {
            query = {checked: {$ne: true}};
        }
        return {
            submissions: Submissions.find(query, {
                sort: {
                    createdAt: -1
                }
            }).fetch()
        };
    },
    renderSubmissions() {
        return this.data.submissions.map((submission) => {
                return <Submission key={submission._id} submission={submission} />;
            });
    },
    handleSubmit(event) {
        event.preventDefault();

        // Pull text from field

        var text = React
            .findDOMNode(this.refs.textInput)
            .value
            .trim();
        Submissions.insert({text: text, createdAt: new Date()});

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
    render() {
        return (
            <div className="container">
                <header>
                    <h1>Submissions</h1>
                    <label className="hide-completed">
                        <input type="checkbox" readOnly={true} checked={this.state.hideCompleted} onClick={this.toggleHideCompleted}/>
                        Hide Completed Activities
                    </label>
                    <form className="new-submission" onSubmit={this.handleSubmit}>
                        <input type="text" ref="textInput" placeholder="Type to add new tasks"/>
                    </form>
                </header>
                <ul>
                    {this.renderSubmissions()}
                </ul>
            </div>
        );
    }
});
