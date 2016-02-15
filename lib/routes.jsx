// FlowRouter.route('/', {
//   name: 'Home',
//   action(params) {
//     renderMainLayoutWith(<Home />);
//   },
// });

FlowRouter.route('/', {
  name: 'App',
  action(params) {
    renderMainLayoutWith(<App />);
  },
});

FlowRouter.route('/login', {
  name: 'Login',
  action(params) {
    renderMainLayoutWith(<UserLogin />);
  },
});

FlowRouter.route('/signup', {
  name: 'Signup',
  action(params) {
    renderMainLayoutWith(<UserSignup />);
  },
});

function renderMainLayoutWith(component) {
  ReactLayout.render(MainLayout, {
    header: <Header />,
    content: component,
    footer: <Footer />,
  });
}
