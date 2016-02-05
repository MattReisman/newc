App = React.createClass({
  mixins: [ReactMeteorData],

  getMeteorData() {
    return {
      submissions: Submissions.find({}, {sort: {createdAt: -1}}).fetch(),
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
    var text = React.findDOMNode(this.refs.textInput).value.trim();
    Submissions.insert({
      text: text,
      createdAt: new Date(),
    });

    // Clear form
    React.findDOMNode(this.refs.textInput).value = '';
  },

  render() {
    return (
      <div className="container">
        <header>
          <h1>Submissions</h1>
<form className='new-submission' onSubmit={this.handleSubmit} >
          <input
            type="text"
            ref="textInput"
            placeholder="Type to add new tasks" />
            </form>
        </header>

        <ul>
          {this.renderSubmissions()}
        </ul>
      </div>
// <News />
    );
  },
});
