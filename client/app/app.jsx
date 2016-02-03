// App component - represents the whole app
App = React.createClass({
  getSubmissions() {
    return [
      { _id: 1, text: "This is submission 1" },
      { _id: 2, text: "This is submission 2" },
      { _id: 3, text: "This is submission 3" }
    ];
  },

  renderSubmissions() {
    return this.getSubmissions().map((submission) => {
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
