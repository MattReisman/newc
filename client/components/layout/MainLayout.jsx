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

        {this.props.content}
        
        {this.props.footer}
      </div>
    )
  },
})
