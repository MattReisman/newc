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
                        <span className='hidden-xs hidden-sm'>New England Wildlife Center</span>
                    </a>
                    </h1>
                </div>
                <div className='header-top-right text-right'>
                    <AccountsUIWrapper/>
                </div>
            </div>
        );
    }
});
