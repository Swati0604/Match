import React, { useEffect } from 'react';
import ReactGA from 'react-ga';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Changelogs from './containers/Changelogs';
import Home from './containers/Home';
import JobGuide from './containers/JobGuide';
import ScrollToTop from './components/ScrollToTop.js';
import CitiesJobs from './containers/CitiesJobs';
import PrivacyPolicy from './containers/PrivacyPolicy';
import EmailModule from './containers/EmailModule';
import AssignmentList from './containers/TakeHomeChallange';
import Assignments from './containers/AssignmentDetail';
import Guides from './containers/Guides';
import CuratedBookshelf from './containers/CuratedBookshelf';
import Mentor from './containers/BookMentors';
import BooksLearn from './containers/LearnMoreBooks';
import TopBooks from './containers/TopBooks';

function AppRouter() {
  useEffect(() => {
    ReactGA.initialize('G-77RRHE6EF1');
    // To Report Page View
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  return ( 
    <Router>
      <ScrollToTop />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/guides/:id' component={JobGuide} />
        <Route exact path='/changelog' component={Changelogs} />
        <Route exact path='/city/:id' component={CitiesJobs} />
        <Route exact path='/privacy-policy' component={PrivacyPolicy} />
        <Route exact path='/jobs/:id' component={EmailModule} />

        <Route exact path='/take-home-challange' component={AssignmentList} />
        <Route exact path='/guides' component={Guides} />
        <Route exact path='/company/:id' component={Assignments} />
        <Route exact path='/bookshelf' component={CuratedBookshelf} />
        <Route exact path='/mentor/:id' component={Mentor} />
        <Route exact path='/books/:id' component={BooksLearn} />
        <Route exact path='/topbooks' component={TopBooks} />
        {/* Personal Information */}
      </Switch>
    </Router>
  );
}

export default AppRouter;
