UserLogin = React.createClass({
    render: function() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-sm-6 col-md-4 col-md-offset-4">
                        <h1 className="text-center login-title">Sign in to continue</h1>
                        <div className="account-wall">

                            <img className="profile-img" src="https://lh5.googleusercontent.com/-b0-k99FZlyE/AAAAAAAAAAI/AAAAAAAAAAA/eu7opA4byxI/photo.jpg?sz=120" alt/>
                            <form className="form-signin">
                                <input type="text" className="form-control" placeholder="Email222" required autofocus/>
                                <input type="password" className="form-control" placeholder="Password" required/>
                                <button className="btn btn-lg btn-primary btn-block" type="submit">
                                    Sign in</button>
                                <label className="checkbox pull-left">
                                    <input type="checkbox" defaultValue="remember-me"/>
                                    Remember me
                                </label>
                                <a href="#" className="pull-right need-help">Need help?
                                </a><span className="clearfix"/>
                            </form>
                        </div>
                        <a href="#" className="text-center new-account">Create an account
                        </a>
                    </div>
                </div>
            </div>
        );
    }
});
