import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Cards from '../../components/Cards';
import Tabs from '../../components/Tabs';
import SelectInput from '../../components/SelectInput';
import Header from '../../components/header';
import Footer from '../../components/footer';

import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import JobGuideCard from '../../components/JobGuideCard';
import { withGoogleSheets } from 'react-db-google-sheets';

//Images
import notFound from '../../assets/images/not-found.svg';

// Style
import './styles.scss';

const tabsData = ['All', 'Full Time', 'Internship', 'Freelance'];

const options = {
  margin: 30,
  nav: true,
  dots: false,
  autoplay: false,
  navText: [
    "<div class='nav-btn prev-slide'></div>",
    "<div class='nav-btn next-slide'></div>",
  ],
  smartSpeed: 1000,
  responsive: {
    0: {
      items: 1,
    },
    400: {
      items: 1,
    },
    600: {
      items: 2,
    },
    700: {
      items: 3,
    },
    1000: {
      items: 3,
    },
  },
};
const screenWidth = window.innerWidth;

const experience = [
  {
    id: 0,
    title: '1-2 Yrs',
  },
  {
    id: 1,
    title: '2-3 Yrs',
  },
  {
    id: 2,
    title: '3-4 Yrs',
  },
  {
    id: 3,
    title: '4-5 Yrs',
  },
  {
    id: 4,
    title: '5-6 Yrs',
  },
  {
    id: 5,
    title: '7+ Yrs',
  },
];

const location = [
  {
    id: 0,
    title: 'Delhi',
  },
  {
    id: 1,
    title: 'Bangalore',
  },
  {
    id: 2,
    title: 'Pune',
  },
  {
    id: 3,
    title: 'Ahmedabad',
  },
  {
    id: 4,
    title: 'Bangalore',
  },
  {
    id: 5,
    title: 'Hyderabad',
  },
  {
    id: 6,
    title: 'Gurgaon',
  },
  {
    id: 7,
    title: 'Mumbai',
  },
];

class TopStartUp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [],
      visibleAll: 9,
      visibleFullTime: 9,
      visibleInternship: 9,
      visibleFreelance: 9,
      error: false,
      tabIndex: 1,
      isMobile: false,
      listOpen: false,
      cityListOpen: false,
      selectedValue: '',
      selectedId: '',
      selectedCityValue: '',
      toggleFilters: false,
      isBgColoured: false,
      company: '',
      companyName: '',
    };

    this.loadMoreAll = this.loadMoreAll.bind(this);
    this.loadMoreFullTime = this.loadMoreFullTime.bind(this);
    this.loadMoreInternship = this.loadMoreInternship.bind(this);
    this.loadMoreFreelance = this.loadMoreFreelance.bind(this);
    this.increaseCount = this.increaseCount.bind(this);
    this.toggleList = this.toggleList.bind(this);
    this.toggleCityList = this.toggleCityList.bind(this);
    this.itemSelected = this.itemSelected.bind(this);
    this.citySelected = this.citySelected.bind(this);
    this.clearSelectedValue = this.clearSelectedValue.bind(this);
    this.clearSelectedCity = this.clearSelectedCity.bind(this);
  }

  componentDidMount() {
    this.checkViewportType();

    window.addEventListener('resize', this.resize.bind(this));
    setInterval(this.topSection, 5000);
    this.resize();
  }

  resize = () => {
    this.setState({ isMobile: window.innerWidth < 768 });
  };

  checkViewportType = () => {
    this.setState({
      isMobile: screenWidth > 768 ? false : true,
    });
  };

  changeTab = (val) => {
    this.setState({
      tabIndex: val,
    });
  };

  loadMoreAll() {
    this.setState((prev) => {
      return { visibleAll: prev.visibleAll + 9 };
    });
  }

  loadMoreFullTime() {
    this.setState((prev) => {
      return { visibleFullTime: prev.visibleFullTime + 9 };
    });
  }

  loadMoreInternship() {
    this.setState((prev) => {
      return { visibleInternship: prev.visibleInternship + 9 };
    });
  }

  loadMoreFreelance() {
    this.setState((prev) => {
      return { visibleFreelance: prev.visibleFreelance + 9 };
    });
  }

  increaseCount() {
    this.setState((prev) => {
      return { count: prev.count + 1 };
    });
  }

  toggleList = () => {
    this.setState((prevState) => ({
      listOpen: !prevState.listOpen,
      cityListOpen: false,
    }));
  };

  toggleCityList = () => {
    this.setState((prevState) => ({
      listOpen: false,
      cityListOpen: !prevState.cityListOpen,
    }));
  };

  itemSelected(index) {
    const temp = experience[index];
    this.setState({
      selectedValue: temp.title,
      selectedId: temp.id + 1,
    });

    this.toggleList();
  }

  citySelected(index) {
    const temp = location[index];
    this.setState({
      selectedCityValue: temp.title,
    });
    this.toggleCityList();
  }

  clearSelectedValue() {
    this.setState({
      selectedValue: '',
      selectedId: null,
    });
  }

  clearSelectedCity() {
    this.setState({
      selectedCityValue: '',
    });
  }
  render() {
    const { tabIndex, isMobile, selectedId, selectedCityValue } = this.state;

    const year = ' Yrs';

    return (
      <div className='top-startup-page-style' ref={this.myRef}>
        <Helmet>
          <meta
            charSet='utf-8'
            name='description'
            content='Match By Design Sundays'
          />
          <title>Top startups | Match By Design Sundays</title>
        </Helmet>
        <div className='top-startup-page-style'>
          <div class='header-banner-style'>
            <Header />
          </div>
        </div>

        <div className='job-guide-section'>
          <div className='job-guide-container'>
            <div className='background-container'>
              <div className='job-post-section'>
                <div className='cards-container'>
                  <div className='breadcrumbs-body'>
                    <Link to='/' className='breadcrumbs'>
                      Home/
                    </Link>
                    <p className='breadcrumbs'> Top Startups</p>
                  </div>
                  <div className='cards-top-section'>
                    <div className='text-box'>
                      <h2 className='section-title'>
                        Design jobs at top startups
                      </h2>
                      <p className='section-sub-title'>
                        Work with companies creating great impact for people in
                        India 🇮🇳
                      </p>
                    </div>
                  </div>
                  <div className='filters'>
                    <SelectInput
                      label='Experience'
                      title='Select experience in yrs.'
                      list={experience}
                      itemSelected={(index) => this.itemSelected(index)}
                      toggleList={() => this.toggleList()}
                      selectedValue={this.state.selectedValue}
                      listOpen={this.state.listOpen}
                      onClick={() => this.clearSelectedValue()}
                    />

                    <SelectInput
                      label='Location'
                      title='Select a Job Location'
                      list={location}
                      itemSelected={(index) => this.citySelected(index)}
                      toggleList={() => this.toggleCityList()}
                      selectedValue={this.state.selectedCityValue}
                      listOpen={this.state.cityListOpen}
                      onClick={() => this.clearSelectedCity()}
                    />

                    <Tabs
                      label='Job Type'
                      tabsData={tabsData}
                      tabIndex={tabIndex}
                      changeTab={this.changeTab}
                      className='filter-tab'
                    />
                  </div>
                  <div className='row'>
                    {tabIndex === 1 &&
                      this.props.db &&
                      this.props.db.Sheet1 &&
                      this.props.db.Sheet1.filter(
                        selectedId && !selectedCityValue
                          ? (data) =>
                              data.Experience ===
                                selectedId.toString() + `${year}` ||
                              data.Experience ===
                                (selectedId + 1).toString() + `${year}`
                          : !selectedId && selectedCityValue
                          ? (data) =>
                              data.Location === selectedCityValue.toString()
                          : selectedId && selectedCityValue
                          ? (data) =>
                              (data.Experience ===
                                selectedId.toString() + `${year}` ||
                                data.Experience ===
                                  (selectedId + 1).toString() + `${year}`) &&
                              data.Location === selectedCityValue.toString()
                          : (data) => data.Closed !== 'Yes'
                      ).map((data, index) => {
                        return (
                          this.props.db &&
                          this.props.db.Companies &&
                          this.props.db.Companies.filter(
                            (item) =>
                              item.Company === data.Company &&
                              item.Tag1 === 'Top Startup'
                          )
                            .slice(0, this.state.visibleAll)
                            .map((item) => {
                              return (
                                <div className='col-md-4' key={index}>
                                  <div className='cards'>
                                    <Cards
                                      companyImg={item.Logo}
                                      position={data.Position}
                                      company={item.Company}
                                      jobType={data.JobType}
                                      location={data.Location}
                                      experience={data.Experience}
                                      isRemote={data.Remote}
                                      href={data.Link}
                                      slug={data.Slug}
                                      tag1={item.Tag1}
                                      tag2={item.Tag2}
                                      tag3={item.Tag3}
                                      description={item.Description}
                                      website={item.Website}
                                      age={item.Age}
                                      color={item.Color}
                                    />
                                  </div>
                                </div>
                              );
                            })
                        );
                      })}
                  </div>
                  {tabIndex === 1 &&
                    this.props.db.Sheet1.filter(
                      selectedId && !selectedCityValue
                        ? (data) =>
                            data.Experience ===
                              selectedId.toString() + `${year}` ||
                            data.Experience ===
                              (selectedId + 1).toString() + `${year}`
                        : !selectedId && selectedCityValue
                        ? (data) =>
                            data.Location === selectedCityValue.toString()
                        : selectedId && selectedCityValue
                        ? (data) =>
                            (data.Experience ===
                              selectedId.toString() + `${year}` ||
                              data.Experience ===
                                (selectedId + 1).toString() + `${year}`) &&
                            data.Location === selectedCityValue.toString()
                        : (data) => data.Closed !== 'Yes'
                    ).length > 9 &&
                    this.props.db.Sheet1.filter(
                      (data) =>
                        this.props.db.Companies.filter(
                          (item) =>
                            item.Company === data.Company &&
                            item.Tag1 === 'Top Startup'
                        ).length
                    ).length > 9 &&
                    this.state.visibleAll < this.props.db.Sheet1.length && (
                      <div className='load-more-btn-container'>
                        <button
                          onClick={this.loadMoreAll}
                          type='button'
                          className='load-more'
                        >
                          Load more
                        </button>
                      </div>
                    )}

                  {tabIndex === 1 &&
                    this.props.db.Sheet1.filter(
                      (data) =>
                        this.props.db.Companies.filter((item) =>
                          selectedId && !selectedCityValue
                            ? (data.Experience ===
                                selectedId.toString() + `${year}` ||
                                data.Experience ===
                                  (selectedId + 1).toString() + `${year}`) &&
                              item.Company === data.Company &&
                              item.Tag1 === 'Top Startup'
                            : !selectedId && selectedCityValue
                            ? data.Location === selectedCityValue.toString() &&
                              item.Company === data.Company &&
                              item.Tag1 === 'Top Startup'
                            : selectedId && selectedCityValue
                            ? (data.Experience ===
                                selectedId.toString() + `${year}` ||
                                data.Experience ===
                                  (selectedId + 1).toString() + `${year}`) &&
                              data.Location === selectedCityValue.toString() &&
                              item.Company === data.Company &&
                              item.Tag1 === 'Top Startup'
                            : !selectedId && !selectedCityValue
                            ? item.Company === data.Company &&
                              item.Tag1 === 'Top Startup'
                            : (data) => data.Closed !== 'Yes'
                        ).length
                    ).length === 0 &&
                    this.state.visibleAll < this.props.db.Sheet1.length && (
                      <div class='null-type-container'>
                        <img
                          src={notFound}
                          alt='not-found'
                          className='null-image'
                        />
                        <p className='null-heading'>
                          Sorry! We couldn’t find anything here.
                        </p>
                        <p className='null-text'>
                          Check back in some time. It’s a good thing we update
                          the jobs twice a week. <br />
                          So, finger crossed 🤞.
                        </p>
                      </div>
                    )}

                  <div className='row'>
                    {tabIndex === 2 &&
                      this.props.db &&
                      this.props.db.Sheet1 &&
                      this.props.db.Sheet1.filter(
                        selectedId && !selectedCityValue
                          ? (data) =>
                              (data.Experience ===
                                selectedId.toString() + `${year}` ||
                                data.Experience ===
                                  (selectedId + 1).toString() + `${year}`) &&
                              (data.JobType === 'Full Time' ||
                                data.JobType ===
                                  'Full Time, Work from Home (Remote)')
                          : !selectedId && selectedCityValue
                          ? (data) =>
                              data.Location === selectedCityValue.toString() &&
                              (data.JobType === 'Full Time' ||
                                data.JobType ===
                                  'Full Time, Work from Home (Remote)')
                          : selectedId && selectedCityValue
                          ? (data) =>
                              (data.Experience ===
                                selectedId.toString() + `${year}` ||
                                data.Experience ===
                                  (selectedId + 1).toString() + `${year}`) &&
                              (data.JobType === 'Full Time' ||
                                data.JobType ===
                                  'Full Time, Work from Home (Remote)') &&
                              data.Location === selectedCityValue.toString()
                          : (data) =>
                              data.Remote !== 'Yes' &&
                              (data.JobType === 'Full Time' ||
                                data.JobType ===
                                  'Full Time, Work from Home (Remote)')
                      ).map((data, index) => {
                        return this.props.db.Companies.filter(
                          (item) =>
                            item.Company === data.Company &&
                            item.Tag1 === 'Top Startup'
                        )
                          .slice(0, this.state.visibleFullTime)
                          .map((item) => {
                            return (
                              <div className='col-md-4' key={index}>
                                <div className='cards'>
                                  <Cards
                                    companyImg={item.Logo}
                                    position={data.Position}
                                    company={item.Company}
                                    jobType={data.JobType}
                                    location={data.Location}
                                    experience={data.Experience}
                                    isRemote={data.Remote}
                                    href={data.Link}
                                    slug={data.Slug}
                                    tag1={item.Tag1}
                                    tag2={item.Tag2}
                                    tag3={item.Tag3}
                                    description={item.Description}
                                    website={item.Website}
                                    age={item.Age}
                                    color={item.Color}
                                  />
                                </div>
                              </div>
                            );
                          });
                      })}
                  </div>
                  {tabIndex === 2 &&
                    this.props.db.Sheet1.filter(
                      selectedId && !selectedCityValue
                        ? (data) =>
                            (data.Experience ===
                              selectedId.toString() + `${year}` ||
                              data.Experience ===
                                (selectedId + 1).toString() + `${year}`) &&
                            (data.JobType === 'Full Time' ||
                              data.JobType ===
                                'Full Time, Work from Home (Remote)')
                        : !selectedId && selectedCityValue
                        ? (data) =>
                            data.Location === selectedCityValue.toString() &&
                            (data.JobType === 'Full Time' ||
                              data.JobType ===
                                'Full Time, Work from Home (Remote)')
                        : selectedId && selectedCityValue
                        ? (data) =>
                            (data.Experience ===
                              selectedId.toString() + `${year}` ||
                              data.Experience ===
                                (selectedId + 1).toString() + `${year}`) &&
                            (data.JobType === 'Full Time' ||
                              data.JobType ===
                                'Full Time, Work from Home (Remote)') &&
                            data.Location === selectedCityValue.toString()
                        : (data) =>
                            data.Remote !== 'Yes' &&
                            (data.JobType === 'Full Time' ||
                              data.JobType ===
                                'Full Time, Work from Home (Remote)')
                    ).length > 9 &&
                    this.props.db.Sheet1.filter(
                      (data) =>
                        this.props.db.Companies.filter(
                          (item) =>
                            item.Company === data.Company &&
                            item.Tag1 === 'Top Startup'
                        ).length
                    ).length > 9 &&
                    this.state.visibleFullTime <
                      this.props.db.Sheet1.length && (
                      <div className='load-more-btn-container'>
                        <button
                          onClick={this.loadMoreFullTime}
                          type='button'
                          className='load-more'
                        >
                          Load more
                        </button>
                      </div>
                    )}
                  <div className='null-container'>
                    {tabIndex === 2 &&
                      this.props.db.Sheet1.filter(
                        (data) =>
                          this.props.db.Companies.filter((item) =>
                            selectedId && !selectedCityValue
                              ? (data.Experience ===
                                  selectedId.toString() + `${year}` ||
                                  data.Experience ===
                                    (selectedId + 1).toString() + `${year}`) &&
                                item.Company === data.Company &&
                                item.Tag1 === 'Top Startup' &&
                                (data.JobType === 'Full Time' ||
                                  data.JobType ===
                                    'Full Time, Work from Home (Remote)')
                              : !selectedId && selectedCityValue
                              ? data.Location ===
                                  selectedCityValue.toString() &&
                                item.Company === data.Company &&
                                item.Tag1 === 'Top Startup' &&
                                (data.JobType === 'Full Time' ||
                                  data.JobType ===
                                    'Full Time, Work from Home (Remote)')
                              : selectedId && selectedCityValue
                              ? (data.Experience ===
                                  selectedId.toString() + `${year}` ||
                                  data.Experience ===
                                    (selectedId + 1).toString() + `${year}`) &&
                                data.Location ===
                                  selectedCityValue.toString() &&
                                item.Company === data.Company &&
                                item.Tag1 === 'Top Startup' &&
                                (data.JobType === 'Full Time' ||
                                  data.JobType ===
                                    'Full Time, Work from Home (Remote)')
                              : !selectedId && !selectedCityValue
                              ? item.Company === data.Company &&
                                item.Tag1 === 'Top Startup'
                              : (data) =>
                                  data.Remote !== 'Yes' &&
                                  (data.JobType === 'Full Time' ||
                                    data.JobType ===
                                      'Full Time, Work from Home (Remote)')
                          ).length
                      ).length === 0 &&
                      this.state.visibleFreelance <
                        this.props.db.Sheet1.length && (
                        <div class='null-type-container'>
                          <img
                            src={notFound}
                            alt='not-found'
                            className='null-image'
                          />
                          <p className='null-heading'>
                            Sorry! We couldn’t find anything here.
                          </p>
                          <p className='null-text'>
                            Check back in some time. It’s a good thing we update
                            the jobs twice a week. <br />
                            So, finger crossed 🤞.
                          </p>
                        </div>
                      )}
                  </div>
                  <div className='row'>
                    {tabIndex === 3 &&
                      this.props.db &&
                      this.props.db.Sheet1 &&
                      this.props.db.Sheet1.filter(
                        selectedId && !selectedCityValue
                          ? (data) =>
                              (data.Experience ===
                                selectedId.toString() + `${year}` ||
                                data.Experience ===
                                  (selectedId + 1).toString() + `${year}`) &&
                              data.JobType === 'Internship'
                          : !selectedId && selectedCityValue
                          ? (data) =>
                              data.Location === selectedCityValue.toString() &&
                              data.JobType === 'Internship'
                          : selectedId && selectedCityValue
                          ? (data) =>
                              (data.Experience ===
                                selectedId.toString() + `${year}` ||
                                data.Experience ===
                                  (selectedId + 1).toString() + `${year}`) &&
                              data.JobType === 'Internship' &&
                              data.Location === selectedCityValue.toString()
                          : (data) =>
                              data.Remote !== 'Yes' &&
                              data.JobType === 'Internship'
                      )
                        .slice(0, this.state.visibleInternship)
                        .map((data, index) => {
                          return (
                            this.props.db &&
                            this.props.db.Companies &&
                            this.props.db.Companies.filter(
                              (item) =>
                                item.Company === data.Company &&
                                item.Tag1 === 'Top Startup'
                            ).map((item) => {
                              return (
                                <div className='col-md-4' key={index}>
                                  <div className='cards'>
                                    <Cards
                                      companyImg={item.Logo}
                                      position={data.Position}
                                      company={item.Company}
                                      jobType={data.JobType}
                                      location={data.Location}
                                      experience={data.Experience}
                                      isRemote={data.Remote}
                                      href={data.Link}
                                      slug={data.Slug}
                                      tag1={item.Tag1}
                                      tag2={item.Tag2}
                                      tag3={item.Tag3}
                                      description={item.Description}
                                      website={item.Website}
                                      age={item.Age}
                                      color={item.Color}
                                    />
                                  </div>
                                </div>
                              );
                            })
                          );
                        })}
                  </div>
                  {tabIndex === 3 &&
                    this.props.db.Sheet1.filter(
                      selectedId && !selectedCityValue
                        ? (data) =>
                            (data.Experience ===
                              selectedId.toString() + `${year}` ||
                              data.Experience ===
                                (selectedId + 1).toString() + `${year}`) &&
                            data.JobType === 'Internship'
                        : !selectedId && selectedCityValue
                        ? (data) =>
                            data.Location === selectedCityValue.toString() &&
                            data.JobType === 'Internship'
                        : selectedId && selectedCityValue
                        ? (data) =>
                            (data.Experience ===
                              selectedId.toString() + `${year}` ||
                              data.Experience ===
                                (selectedId + 1).toString() + `${year}`) &&
                            data.JobType === 'Internship' &&
                            data.Location === selectedCityValue.toString()
                        : (data) =>
                            data.Remote !== 'Yes' &&
                            data.JobType === 'Internship'
                    ).length > 9 &&
                    this.state.visibleInternship <
                      this.props.db.Sheet1.length && (
                      <div className='load-more-btn-container'>
                        <button
                          onClick={this.loadMoreInternship}
                          type='button'
                          className='load-more'
                        >
                          Load more
                        </button>
                      </div>
                    )}

                  <div className='null-container'>
                    {tabIndex === 3 &&
                      this.props.db.Sheet1.filter(
                        (data) =>
                          this.props.db.Companies.filter((item) =>
                            selectedId && !selectedCityValue
                              ? (data.Experience ===
                                  selectedId.toString() + `${year}` ||
                                  data.Experience ===
                                    (selectedId + 1).toString() + `${year}`) &&
                                item.Company === data.Company &&
                                item.Tag1 === 'Top Startup' &&
                                data.JobType === 'Internship'
                              : !selectedId && selectedCityValue
                              ? data.Location ===
                                  selectedCityValue.toString() &&
                                item.Company === data.Company &&
                                item.Tag1 === 'Top Startup' &&
                                data.JobType === 'Internship'
                              : selectedId && selectedCityValue
                              ? (data.Experience ===
                                  selectedId.toString() + `${year}` ||
                                  data.Experience ===
                                    (selectedId + 1).toString() + `${year}`) &&
                                data.Location ===
                                  selectedCityValue.toString() &&
                                item.Company === data.Company &&
                                item.Tag1 === 'Top Startup' &&
                                data.JobType === 'Internship'
                              : data.Remote !== 'Yes' &&
                                data.JobType === 'Internship' &&
                                item.Company === data.Company &&
                                item.Tag1 === 'Top Startup'
                          ).length
                      ).length === 0 &&
                      this.state.visibleInternship <
                        this.props.db.Sheet1.length && (
                        <div class='null-type-container'>
                          <img
                            src={notFound}
                            alt='not-found'
                            className='null-image'
                          />
                          <p className='null-heading'>
                            Sorry! We couldn’t find anything here.
                          </p>
                          <p className='null-text'>
                            Check back in some time. It’s a good thing we update
                            the jobs twice a week. <br />
                            So, finger crossed 🤞.
                          </p>
                        </div>
                      )}
                  </div>
                  <div className='row'>
                    {tabIndex === 4 &&
                      this.props.db &&
                      this.props.db.Sheet1 &&
                      this.props.db.Sheet1.filter(
                        selectedId && !selectedCityValue
                          ? (data) =>
                              (data.Experience ===
                                selectedId.toString() + `${year}` ||
                                data.Experience ===
                                  (selectedId + 1).toString() + `${year}`) &&
                              data.JobType === 'Freelance'
                          : !selectedId && selectedCityValue
                          ? (data) =>
                              data.Location === selectedCityValue.toString() &&
                              data.JobType === 'Freelance'
                          : selectedId && selectedCityValue
                          ? (data) =>
                              (data.Experience ===
                                selectedId.toString() + `${year}` ||
                                data.Experience ===
                                  (selectedId + 1).toString() + `${year}`) &&
                              data.JobType === 'Freelance' &&
                              data.Location === selectedCityValue.toString()
                          : (data) =>
                              data.Remote !== 'Yes' &&
                              data.JobType === 'Freelance'
                      )
                        .slice(0, this.state.visibleFreelance)
                        .map((data, index) => {
                          return (
                            this.props.db &&
                            this.props.db.Companies &&
                            this.props.db.Companies.filter(
                              (item) =>
                                item.Company === data.Company &&
                                item.Tag1 === 'Top Startup'
                            ).map((item) => {
                              return (
                                <div className='col-md-4' key={index}>
                                  <div className='cards'>
                                    <Cards
                                      companyImg={item.Logo}
                                      position={data.Position}
                                      company={item.Company}
                                      jobType={data.JobType}
                                      location={data.Location}
                                      experience={data.Experience}
                                      isRemote={data.Remote}
                                      href={data.Link}
                                      slug={data.Slug}
                                      tag1={item.Tag1}
                                      tag2={item.Tag2}
                                      tag3={item.Tag3}
                                      description={item.Description}
                                      website={item.Website}
                                      age={item.Age}
                                      color={item.Color}
                                    />
                                  </div>
                                </div>
                              );
                            })
                          );
                        })}
                  </div>
                  {tabIndex === 4 &&
                    this.props.db.Sheet1.filter(
                      (data) =>
                        this.props.db.Companies.filter((item) =>
                          selectedId && !selectedCityValue
                            ? (data.Experience ===
                                selectedId.toString() + `${year}` ||
                                data.Experience ===
                                  (selectedId + 1).toString() + `${year}`) &&
                              item.Company === data.Company &&
                              item.Tag1 === 'Top Startup' &&
                              data.JobType === 'Freelance'
                            : !selectedId && selectedCityValue
                            ? data.Location === selectedCityValue.toString() &&
                              item.Company === data.Company &&
                              item.Tag1 === 'Top Startup' &&
                              data.JobType === 'Freelance'
                            : selectedId && selectedCityValue
                            ? (data.Experience ===
                                selectedId.toString() + `${year}` ||
                                data.Experience ===
                                  (selectedId + 1).toString() + `${year}`) &&
                              data.Location === selectedCityValue.toString() &&
                              item.Company === data.Company &&
                              item.Tag1 === 'Top Startup' &&
                              data.JobType === 'Freelance'
                            : data.Remote !== 'Yes' &&
                              data.JobType === 'Freelance' &&
                              item.Company === data.Company &&
                              item.Tag1 === 'Top Startup'
                        ).length
                    ).length > 9 &&
                    this.state.visibleFreelance <
                      this.props.db.Sheet1.length && (
                      <div className='load-more-btn-container'>
                        <button
                          onClick={this.loadMoreFreelance}
                          type='button'
                          className='load-more'
                        >
                          Load more
                        </button>
                      </div>
                    )}
                  <div className='null-container'>
                    {tabIndex === 4 &&
                      this.props.db.Sheet1.filter(
                        selectedId && !selectedCityValue
                          ? (data) =>
                              (data.Experience ===
                                selectedId.toString() + `${year}` ||
                                data.Experience ===
                                  (selectedId + 1).toString() + `${year}`) &&
                              data.JobType === 'Freelance'
                          : !selectedId && selectedCityValue
                          ? (data) =>
                              data.Location === selectedCityValue.toString() &&
                              data.JobType === 'Freelance'
                          : selectedId && selectedCityValue
                          ? (data) =>
                              (data.Experience ===
                                selectedId.toString() + `${year}` ||
                                data.Experience ===
                                  (selectedId + 1).toString() + `${year}`) &&
                              data.JobType === 'Freelance' &&
                              data.Location === selectedCityValue.toString()
                          : (data) =>
                              data.Remote !== 'Yes' &&
                              data.JobType === 'Freelance'
                      ).length === 0 &&
                      this.state.visibleFreelance <
                        this.props.db.Sheet1.length && (
                        <div class='null-type-container'>
                          <img
                            src={notFound}
                            alt='not-found'
                            className='null-image'
                          />
                          <p className='null-heading'>
                            Sorry! We couldn’t find anything here.
                          </p>
                          <p className='null-text'>
                            Check back in some time. It’s a good thing we update
                            the jobs twice a week. <br />
                            So, finger crossed 🤞.
                          </p>
                        </div>
                      )}
                  </div>
                </div>
              </div>
            </div>

            <div className='job-guide-section'>
              <div className='job-guide-container'>
                <div className='text-box'>
                  <h5 className='section-title'>Guides</h5>
                  <p className='section-sub-title'>
                    A few resources to help you ace your next opportunity
                  </p>
                </div>

                <div className='row'>
                  {isMobile ? (
                    this.props.db &&
                    this.props.db.Guide &&
                    this.props.db.Guide.map((data, index) => {
                      return (
                        <div className='item' key={index}>
                          <div className='top-space'>
                            <JobGuideCard
                              title={data.Title}
                              articleType='Job Application'
                              readingTime={data.Time}
                              selectedArticleId={data.Slug}
                              cardImg={data.Image}
                            />
                          </div>
                        </div>
                      );
                    })
                  ) : (
                    <OwlCarousel className='owl-theme' {...options}>
                      {this.props.db &&
                        this.props.db.Guide &&
                        this.props.db.Guide.map((data, index) => {
                          return (
                            <div className='item' key={index}>
                              <div className='top-space'>
                                <JobGuideCard
                                  title={data.Title}
                                  selectedArticleId={data.Slug}
                                  cardImg={data.Image}
                                />
                              </div>
                            </div>
                          );
                        })}
                    </OwlCarousel>
                  )}
                </div>

                <p className='job-guide-para text-center top-space'>
                  Building an awesome knowledge base for designers.{' '}
                  <span className='coming-soon'>Coming Soon 😉</span>
                </p>

                <Footer />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withGoogleSheets(['Sheet1', 'Guide', 'Companies'])(TopStartUp);
