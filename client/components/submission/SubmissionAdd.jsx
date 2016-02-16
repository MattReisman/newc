AddSubmission = React.createClass({
    mixins: [ReactMeteorData],
    getMeteorData() {
        let query = {};

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
            subject: subject,
            content: content,
            location: location,
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
            <div className='jumbotron add-submission'>
              <h1><i className='fa fa-plus'></i>
              Submission</h1>
            <hr />
                <form className="new-submission form-horizontal" onSubmit={this.handleSubmit}>
                    <fieldset>
                        <div className="form-group">
                            <label htmlFor="subjectAdd" className="col-lg-2 control-label">Subject</label>
                            <div className="col-lg-10">
                                <input type="text" className="form-control" id="subjectAdd" placeholder="Email"/>
                            </div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="contentAdd">Password</label>
                            <input type="text-field" className="form-control" id="contentAdd" placeholder="Add Content"/>
                        </div>
                        <div className='form-group'>
                            <label htmlFor="textArea" className="col-lg-2 control-label">Content</label>
                            <div className="col-lg-10">
                                <textarea className="form-control" rows={3} id="textArea" defaultValue={""}/>
                                <span className="help-block">Add details here.</span>
                            </div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputFile">File input</label>
                            <input type="file" id="exampleInputFile"/>
                            <p className="help-block">Example block-level help text here.</p>
                        </div>
                        <div className="checkbox">
                            <label>
                                <input type="checkbox"/>
                                Check me out
                            </label>
                        </div>
                        <div className="form-group">
                            <div className="col-lg-10 col-lg-offset-2">
                                <button type="reset" className="btn btn-default">Cancel</button>
                                <button type="submit" className="btn btn-primary">Submit</button>
                            </div>
                        </div>
                    </fieldset>
                </form>
            </div>
        );
    },
});
