Submission = React.createClass({
  propTypes: {
    submission: React.PropTypes.object.isRequired
  },
  render() {
    return (
      <li>{this.props.submission.text}</li>
    );
  }
});
