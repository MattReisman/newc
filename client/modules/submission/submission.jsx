Submission = React.createClass({
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
        // const momDate = "test';

        return (
            <li className={submissionClassName}>
                <button className='delete' onClick={this.deleteThisSubmission}>
                    &times;
                </button>
                <input type='checkbox' readOnly={true} checked={this.props.submission.checked} onClick={this.toggleChecked}/>
                <span className='text'>
                    {this.props.submission.text}
                </span>
                <span className='time-elapsed'>
                    {elapsedTime}
                </span>
                <span className='subDate'>
                    {formattedDate}
                </span>
            </li>
        );
    }
});
