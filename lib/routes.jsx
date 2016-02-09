FlowRouter.route('/', {
  name: 'Home',
  action(params) {
    renderMainLayoutWith(<Home />);
  },
});

FlowRouter.route('/login', {
  name: 'Login',
  action(params) {
    renderMainLayoutWith(<UserLogin />);
  },
});

function renderMainLayoutWith(component) {
  ReactLayout.render(MainLayout, {
    header: <Header />,
    content: component,
    footer: <Footer />,
  });
}
