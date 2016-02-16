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
            <div className='jumbotron add-submission'>
                <h3>
                    <i className='fa fa-plus'></i>
                    Submission</h3>
                <hr/>
                <form className="new-submission form-horizontal" onSubmit={this.handleSubmit}>
                    <fieldset>
                        <div className="form-group">
                            <label htmlFor="subjectAdd" className="col-lg-2 control-label">
                                <i className="fa fa-plus-square"></i>
                                <span className='icon-descriptor'>
                                    Subject</span>
                            </label>
                            <div className="col-lg-10">
                                <input type="text" className="form-control" id="subjectAdd" placeholder="50 characters or less"/>
                            </div>
                        </div>

                        <div className='form-group'>
                            <label htmlFor="textArea" className="col-lg-2 control-label">
                                <i className="fa fa-file-text-o"></i>
                                <span className='icon-descriptor'>
                                    Content</span>
                            </label>
                            <div className="col-lg-10">
                                <textarea className="form-control" rows={3} id="textArea" placeholder="add Content" defaultValue={""}/>

                            </div>
                        </div>
                        <div className="form-group">
                            <label className='col-lg-2'>
                                <i className="fa fa-file-image-o"></i>
                                <span className='icon-descriptor'>
                                    Media</span>
                            </label>
                            <div className='col-lg-10'>
                                <div className="fileUpload btn btn-upload">
                                    <i className='fa fa-cloud-upload'>
                                        <span className='icon-descriptor'>upload</span>
                                    </i>
                                    <input type="file" className="uploads"/>
                                </div>
                            </div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="locationAdd" className="col-lg-2 control-label">
                                <i className="fa fa-map-marker"></i>
                                <span className='icon-descriptor'>
                                    Location</span>
                            </label>
                            <div className="col-lg-10">
                                <input type="text" className="form-control" id="locationAdd" placeholder="address or gps coordinates"/>
                            </div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="Trailselect" className="col-lg-3 control-label">
                                <i className="fa fa-map-o"></i>
                                <span className='icon-descriptor'>
                                    Add to Trailmap</span>
                            </label>
                            <div className="col-lg-9">
                                <select className="form-control" id="select">
                                    <option>-----</option>
                                    <option>NEWC Indoor Nature Trail</option>
                                    <option>NEWC Outdoor Nature Trail</option>
                                    <option>Great Esker Park</option>
                                    <option>Bare Cove Park</option>
                                </select>
                            </div>
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
    }
});