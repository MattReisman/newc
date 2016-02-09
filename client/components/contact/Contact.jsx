Contact = React.createClass({
    render() {
        return (
            <div className='app-main'>
                <div className='container'>
                    <form>
                        <div className="row">
                            <div className="six columns">
                                <label htmlFor="exampleEmailInput">Your email</label>
                                <input className="u-full-width" type="email" placeholder="test@mailbox.com" id="exampleEmailInput"/>
                            </div>
                            <div className="six columns">
                                <label htmlFor="exampleRecipientInput">Reason for contacting</label>
                                <select className="u-full-width" id="exampleRecipientInput">
                                    <option value="Option 1">Questions</option>
                                    <option value="Option 2">Admiration</option>
                                    <option value="Option 3">Can I get your number?</option>
                                </select>
                            </div>
                        </div>
                        <label htmlFor="exampleMessage">Message</label>
                        <textarea className="u-full-width" placeholder="Hi Dave …" id="exampleMessage" defaultValue={""}/>
                        <label className="example-send-yourself-copy">
                            <input type="checkbox"/>
                            <span className="label-body">Send a copy to yourself</span>
                        </label>
                        <input className="button-primary" type="submit" defaultValue="Submit"/>
                    </form>
                </div>
            </div>
        );
    }
});
