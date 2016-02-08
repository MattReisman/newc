Header = React.createClass({
    render() {
        return (
            <div className='u-full-width header-top'>
                <div className='header-top-left'>
                    <img src='logo_icon.png' className=''></img>
                </div>
                <div className='header-top-center'>
                    <h1>New England Wildlife Center</h1>
                </div>
                <div className='header-top-right'>
                <i className="fa fa-bars" classID='header-menu-icon'></i>
                </div>
            </div>
        );
    }
});
