App = React.createClass({
  mixins: [ReactMeteorData],

  getMeteorData() {
    return {
      submissions: Submissions.find({}).fetch(),
    };
  },

  renderSubmissions() {
    console.log('test it');
    return this.data.submissions.map((submission) => {
      return <Submission key={submission._id} submission={submission} />;
    });
  },

  handleSubmit(event) {
    event.preventDefault();
  },

  render() {
    console.log(this.props);
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
    );
  },
});
