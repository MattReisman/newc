// App = React.createClass({
//     mixins: [ReactMeteorData],
//     getInitialState() {
//         return {hideCompleted: false, showCompleted: false};
//     },
//
//     getMeteorData() {
//         let query = {};
//
//         if (this.state.hideCompleted) {
//             query = {
//                 checked: {
//                     $ne: true
//                 }
//             };
//         }
//         if (this.state.showCompleted) {
//             query = {
//                 checked: true
//             };
//         }
//         return {
//             submissions: Submissions
//                 .find(query, {
//                 sort: {
//                     createdAt: -1
//                 }
//             })
//                 .fetch()
//         };
//     },
//     renderSubmissions() {
//         return this
//             .data
//             .submissions
//             .map((submission) => {
//                 return <Submission key={submission._id} submission={submission}/>;
//             });
//     },
//     handleSubmit(event) {
//         event.preventDefault();
//
//         // Pull text from field
//
//         var text = React
//             .findDOMNode(this.refs.textInput)
//             .value
//             .trim();
//         Submissions.insert({text: text, createdAt: new Date()});
//
//         // Clear form
//
//         React
//             .findDOMNode(this.refs.textInput)
//             .value = "";
//     },
//     toggleHideCompleted() {
//         this.setState({
//             hideCompleted: !this.state.hideCompleted
//         });
//     },
//     toggleShowCompleted() {
//         this.setState({
//             showCompleted: !this.state.showCompleted
//         });
//     },
//     render() {
//         return (
//             <div className="container">
//                 <header className='app-header'>
//                     <h1>Submissions</h1>
//                     <div className='row'>
//                         <div className="one-half column">
//                             <label className="hide-completed">
//                                 <input type="checkbox" readOnly={true} checked={this.state.hideCompleted} onClick={this.toggleHideCompleted}/>
//                                 Hide Completed Activities
//                             </label>
//                         </div>
//                         <div className="one-half column">
//                             <label className="show-completed">
//                                 <input type="checkbox" readOnly={true} checked={this.state.showCompleted} onClick={this.toggleShowCompleted}/>
//                                 Show Only Completed Activities
//                             </label>
//                         </div>
//                     </div>
//
//                 </header>
//                 <ul>
//                     {this.renderSubmissions()}
//                 </ul>
//                 <form className="new-submission" onSubmit={this.handleSubmit}>
//                     <input type="text" ref="textInput" placeholder="Type to add new tasks"/>
//                 </form>
//
//             </div>
//         );
//     }
// });
