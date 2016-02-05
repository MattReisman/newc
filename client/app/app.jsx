// App component - represents the whole app
App = React.createClass({
    // This mixin makes the getMeteorData method work
  mixins: [ReactMeteorData],

  getMeteorData() {
    return{
      submissions: Submissions.find({}).fetch()
    }
  },

  renderSubmissions() {
    return this.data.submissions.map((submission) => {
      return <Submission key={submission._id} submission={submission} />;
    });
  },

  render() {
    return (
      <div className="container">
        <header>
          <h1>Submissions</h1>
        </header>

        <ul>
          {this.renderSubmissions()}
        </ul>
      </div>
    );
  }
});
