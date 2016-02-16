ListItem = React.createClass({
    propTypes: {
        submission: React.PropTypes.object.isRequired
    },
    toggleChecked() {
        Submissions.update(this.props.submission._id, {
            $set: {
                checked: !this.props.submission.checked
            }
        });
    },

    deleteThisSubmission() {
        Submissions.remove(this.props.submission._id);
    },

    render() {
        const submissionClassName = this.props.submission.checked
            ? 'checked'
            : '';
        const rawDate = this.props.submission.createdAt;
        const formattedDate = moment(rawDate).format('MMMM Do YYYY, h:mm');
        const elapsedTime = moment(rawDate)
            .startOf(rawDate)
            .fromNow();
        const path = FlowRouter.path('SubmissionPost', {_id: this.props.submission._id})

        return (
            <li className={submissionClassName}>
                <div className='row'>
                    <div className='col-xs-1'>
                        <input type='checkbox' readOnly={true} checked={this.props.submission.checked} onClick={this.toggleChecked}/>
                    </div>

                    <div className='col-xs-3'>
                        <a href={path} className='btn btn-primary btn-link-post'>
                            <span className='text'>
                                {this.props.submission.subject}
                            </span>
                        </a>
                    </div>
                    <div className='col-xs-2'>

                        <span className='text'>
                            {this.props.submission.username}
                        </span>
                    </div>
                    <div className='col-xs-5'>
                        <div>
                            <span className='time-elapsed'>
                                {elapsedTime}
                            </span>
                        </div>
                        <div>
                            <span className='subDate'>
                                {formattedDate}
                            </span>
                        </div>
                    </div>
                    <div className='col-xs-1'>
                        <button className='delete' onClick={this.deleteThisSubmission}>
                            <i className="fa fa-trash-o"></i>
                        </button>
                    </div>
                </div>

            </li>
        );
    },
});
