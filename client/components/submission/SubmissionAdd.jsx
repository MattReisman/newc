SubmissionAdd = React.createClass({
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

        var subject = ReactDOM
            .findDOMNode(this.refs.subjectInput)
            .value
            .trim();
        var textContent = ReactDOM
            .findDOMNode(this.refs.textcontentInput)
            .value
            .trim();
        var locationLat = ReactDOM
            .findDOMNode(this.refs.locationLatInput)
            .value
            .trim();
        var locationLon = ReactDOM
            .findDOMNode(this.refs.locationLonInput)
            .value
            .trim();
        Submissions.insert({
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
                .username,
        });

        // Clear form

        ReactDOM
            .findDOMNode(this.refs.subjectInput)
            .value = "";
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
                                <input type="text" ref="subjectInput" className="form-control" id="subjectAdd" placeholder="50 characters or less"/>
                            </div>
                        </div>

                        <div className='form-group'>
                            <label htmlFor="textArea" className="col-lg-2 control-label">
                                <i className="fa fa-file-text-o"></i>
                                <span className='icon-descriptor'>
                                    Content</span>
                            </label>
                            <div className="col-lg-10">
                                <textarea className="form-control" ref="textcontentInput" rows={3} id="textArea" placeholder="add Content" defaultValue={""}/>

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
                            <label className="col-lg-2 control-label">
                                <i className="fa fa-map-marker"></i>
                                <span className='icon-descriptor'>
                                    Location</span>
                            </label>
                            <div className="col-lg-5">
                                <input type="text" className="form-control" ref='locationLatInput' id="locationAdd" placeholder="address or gps coordinates"/>
                            </div>
                            <div className="col-lg-5">
                                <input type="text" className="form-control" ref='locationLonInput' id="locationAdd" placeholder="address or gps coordinates"/>
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
    },
});
