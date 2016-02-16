Header = React.createClass({
    render() {
        return (
            <div className='header-top'>
                <div className='header-top-left'>
                    <a href='/'>
                        <img src='logo_icon.png' className=''></img>
                    </a>
                </div>
                <div className='header-top-center'>
                    <a href='/'>
                      <h1>
                        <span className='hidden-xs'>New England Wildlife Center</span>
                        <span className='visible-xs'>NEWC</span>
                      </h1>
                    </a>
                </div>
                <div className='header-top-right text-right'>
                    <AccountsUIWrapper/>
                </div>
            </div>
        );
    }
});
