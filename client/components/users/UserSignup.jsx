UserSignup = React.createClass({
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-sm-6 col-md-4 col-md-offset-4">
                        <h1 className="text-center login-title">Sign in to continue</h1>
                        <div className="account-wall">
                            <form className="form-signup">
                                <input type="text" className="form-control" placeholder="email address" required autofocus/>
                                <input type="password" className="form-control" placeholder="password" required/>
                                <input type="password" className="form-control" placeholder="re-enter password" required/>

                              <label className="checkbox pull-left">
                                    <input type="checkbox" defaultValue="agree-to-terms"/>
                                    Agree to terms
                                </label>
                                <button className="btn btn-lg btn-primary btn-block" type="submit">
                                    Sign up</button>
                                <a href="#" className="pull-right new-account">Already have an account?
                                </a>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
});
