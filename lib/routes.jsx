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

FlowRouter.route('/list', {
  name: 'List',
  action(params) {
    renderMainLayoutWith(<List />);
  },
});

FlowRouter.route('/map', {
  name: 'Map',
  action(params) {
    renderMainLayoutWith(<Map />);
  },
});

FlowRouter.route('/trail', {
  name: 'Trail',
  action(params) {
    renderMainLayoutWith(<Trail />);
  },
});


FlowRouter.route('/add', {
  name: 'SubmissionAdd',
  action(params) {
    renderMainLayoutWith(<SubmissionAdd />);
  },
});

FlowRouter.route('/submission/:_id', {
  name: 'SubmissionPost',
  action(params) {
    renderMainLayoutWith( <SubmissionPost _id={params._id} />);
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
