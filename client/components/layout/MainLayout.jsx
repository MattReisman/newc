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
      <div>
        {this.props.header}

        {this.props.content}

        {this.props.footer}
      </div>
    )
  },
})
