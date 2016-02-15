MainLayout  = React.createClass({
  propTypes: {},
  mixins: [

  ],

  getInitialState() {
    return {
    };
  },

  getMeteorData() {

  },

  render () {
    return (
      <div className='app-body'>
        {this.props.header}
        <div className="container app-main">
            {this.props.content}
        </div>
        {this.props.footer}
      </div>
    )
  },
})
