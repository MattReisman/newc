Header = React.createClass({
    render() {
        return (
            <div className='header-top'>
                <div className='header-top-left'>
                    <img src='logo_icon.png' className=''></img>
                </div>
                <div className='header-top-center'>
                    <h1>New England Wildlife Center</h1>
                </div>
                <div className='header-top-right'>
                    <div className="dropdown">
                        <button id="dLabel" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i className="fa fa-bars" classID='header-menu-icon'></i>
                        </button>
                        <ul className="dropdown-menu" aria-labelledby="dLabel">
                            <li>Home</li>
                          <li>Logout</li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
});
