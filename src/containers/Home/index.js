import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import Cards from '../../components/Cards';
import Tabs from '../../components/Tabs';
import SelectInput from '../../components/SelectInput';
import Header from '../../components/header';
import Footer from '../../components/footer';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import CitiesCard from '../../components/CitiesCard';
import JobGuideCard from '../../components/JobGuideCard';
import { withGoogleSheets } from 'react-db-google-sheets';
import PropTypes from 'prop-types';

//Images
import notFound from '../../assets/images/not-found.svg';
import headerImg from '../../assets/images/Header-img.svg';
import bangalore from '../../assets/images/Bangalore.svg';
import delhi from '../../assets/images/Delhi.svg';
import mumbai from '../../assets/images/Mumbai.svg';
import hyderabad from '../../assets/images/Hyderabad.svg';

// Style
import './styles.scss';

const tabsData = ['All', 'Full Time', 'Internship', 'Freelance'];
const cities = [
  {
    background: delhi,
    city: 'Delhi-NCR',
    cityNumber: 3,
  },

  {
    background: hyderabad,
    city: 'Hyderabad',
    cityNumber: 1,
  },

  {
    background: mumbai,
    city: 'Mumbai',
    cityNumber: 1,
  },

  {
    background: bangalore,
    city: 'Bangalore',
    cityNumber: 1,
  },
];

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
];

class Home extends Component {
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

  shuffle = (array) => {
    if (this.shuffle.done) return;

    var currentIndex = array.length,
      temporaryValue,
      randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    this.shuffle.done = true;

    return array;
  };

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

    this.shuffle(this.props.db.Sheet1);

    return (
      <div className='home-page-style' ref={this.myRef}>
        <Helmet>
          <meta
            charSet='utf-8'
            name='description'
            content='Match By Design Sundays'
          />
          <title>Match By Design Sundays</title>
        </Helmet>
        <div className='all-page-style'>
          <div className='top-section'>
            <div className='header-banner-style'>
              <Header />
              <div className='row'>
                <div className='col-md-7 header-text-container'>
                  <div className='text-box'>
                    <h1 className='heading'>
                      Your destination for handpicked Design Jobs
                    </h1>

                    <p className='para'>
                      Subscribe to get weekly job updates and guides.
                    </p>
                  </div>

                  <form
                    action='https://gmail.us2.list-manage.com/subscribe/post?u=bf4ceef24090facb1db2bfd80&amp;id=d85073e06f'
                    method='post'
                    id='mc-embedded-subscribe-form'
                    name='mc-embedded-subscribe-form'
                    className='validate'
                    target='_blank'
                  >
                    <div className='register-box' id='mc_embed_signup'>
                      <input
                        type='email'
                        placeholder='Your email address please'
                        name='EMAIL'
                        className='register-input'
                        id='mce-EMAIL'
                      />

                      <button
                        className='register-btn'
                        type='submit'
                        value='Subscribe'
                        name='subscribe'
                        id='mc-embedded-subscribe'
                      >
                        Subscribe Now
                        <br />
                        <span className='btn-span-text'>
                          and join 800+ Designers
                        </span>
                      </button>
                    </div>
                  </form>
                </div>
                <div className='col-md-5 header-image-container'>
                  <img
                    src={headerImg}
                    alt='header-image'
                    className='header-image'
                  />
                </div>
              </div>
            </div>
          </div>

          <div className='job-specific-cities-section'>
            <div className='cards-container'>
              <div className='cards-top-section'>
                <div className='text-box'>
                  <h2 className='post-heading'>Jobs by Location</h2>
                </div>
              </div>

              <div className='row'>
                {cities.map((data, index) => {
                  return (
                    <div className='col-md-3' key={data}>
                      <div className='cities-cards'>
                        <CitiesCard
                          background={data.background}
                          city={data.city}
                          // availableJobs={
                          //   data.city !== 'Delhi Ncr' &&
                          //   this.props.db.Sheet1.filter(
                          //     (item) => item.Location === data.city
                          //   ).length
                          // }
                          availableJobs={
                            data.cityNumber >= 2
                              ? data.city === 'Delhi-NCR' &&
                                this.props.db.Sheet1.filter(
                                  (item) => item.Location === 'Gurgaon'
                                ).length +
                                  this.props.db.Sheet1.filter(
                                    (item) => item.Location === 'Delhi'
                                  ).length +
                                  this.props.db.Sheet1.filter(
                                    (item) => item.Location === 'Noida'
                                  ).length
                              : this.props.db.Sheet1.filter(
                                  (item) => item.Location === data.city
                                ).length
                          }
                          href={`/city/${data.city}`}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          <div className='background-container'>
            <div className='job-post-section'>
              <div className='cards-container'>
                <div className='cards-top-section'>
                  <div className='text-box'>
                    <h2 className='post-heading'>All Jobs</h2>
                    <p className='post-info-para'>
                      <span className='highlighted-text'>
                        {this.props.db.Sheet1.length}+ Design Jobs
                      </span>{' '}
                      are available, apply now.
                    </p>

                    <p className='post-info-para'>
                      Last updated on{' '}
                      <span className='highlighted-text'>
                        {
                          this.props.db.Sheet1.map(
                            (data, index) => data.Timestamp
                          )
                            .sort()
                            .reverse()[1]
                        }
                      </span>
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
                    selectedValue={this.state.selectedValue}
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
                    selectedValue={this.state.selectedCityValue}
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
                              selectedId.toString() + ' ' + 'Yrs' ||
                            data.Experience ===
                              (selectedId + 1).toString() + ' ' + 'Yrs'
                        : !selectedId && selectedCityValue
                        ? (data) =>
                            data.Location === selectedCityValue.toString()
                        : selectedId && selectedCityValue
                        ? (data) =>
                            (data.Experience ===
                              selectedId.toString() + ' ' + 'Yrs' ||
                              data.Experience ===
                                (selectedId + 1).toString() + ' ' + 'Yrs') &&
                            data.Location === selectedCityValue.toString()
                        : (data) => data.Remote !== 'Yes'
                    )
                      .slice(0, this.state.visibleAll)
                      .map((data, index) => {
                        return (
                          <div className='col-md-4' key={index}>
                            <div className='cards'>
                              <Cards
                                companyImg={data.Logo}
                                position={data.Position}
                                company={data.Company}
                                jobType={data.JobType}
                                location={data.Location}
                                experience={data.Experience}
                                isRemote={data.Remote}
                                href={data.Link}
                                slug={data.Slug}
                              />
                            </div>
                          </div>
                        );
                      })}
                </div>

                {tabIndex === 1 &&
                  this.props.db.Sheet1.filter(
                    selectedId && !selectedCityValue
                      ? (data) =>
                          data.Experience ===
                            selectedId.toString() + ' ' + 'Yrs' ||
                          data.Experience ===
                            (selectedId + 1).toString() + ' ' + 'Yrs'
                      : !selectedId && selectedCityValue
                      ? (data) => data.Location === selectedCityValue.toString()
                      : selectedId && selectedCityValue
                      ? (data) =>
                          (data.Experience ===
                            selectedId.toString() + ' ' + 'Yrs' ||
                            data.Experience ===
                              (selectedId + 1).toString() + ' ' + 'Yrs') &&
                          data.Location === selectedCityValue.toString()
                      : (data) => data.Remote !== 'Yes'
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

                <div className='null-container'>
                  {tabIndex === 1 &&
                    this.props.db.Sheet1.filter(
                      selectedId && !selectedCityValue
                        ? (data) =>
                            data.Experience ===
                              selectedId.toString() + ' ' + 'Yrs' ||
                            data.Experience ===
                              (selectedId + 1).toString() + ' ' + 'Yrs'
                        : !selectedId && selectedCityValue
                        ? (data) =>
                            data.Location === selectedCityValue.toString()
                        : selectedId && selectedCityValue
                        ? (data) =>
                            (data.Experience ===
                              selectedId.toString() + ' ' + 'Yrs' ||
                              data.Experience ===
                                (selectedId + 1).toString() + ' ' + 'Yrs') &&
                            data.Location === selectedCityValue.toString()
                        : (data) => data.Remote !== 'Yes'
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
                  {tabIndex === 2 &&
                    this.props.db &&
                    this.props.db.Sheet1 &&
                    this.props.db.Sheet1.filter(
                      selectedId && !selectedCityValue
                        ? (data) =>
                            (data.Experience ===
                              selectedId.toString() + ' ' + 'Yrs' ||
                              data.Experience ===
                                (selectedId + 1).toString() + ' ' + 'Yrs') &&
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
                              selectedId.toString() + ' ' + 'Yrs' ||
                              data.Experience ===
                                (selectedId + 1).toString() + ' ' + 'Yrs') &&
                            (data.JobType === 'Full Time' ||
                              data.JobType ===
                                'Full Time, Work from Home (Remote)') &&
                            data.Location === selectedCityValue.toString()
                        : (data) =>
                            data.Remote !== 'Yes' &&
                            (data.JobType === 'Full Time' ||
                              data.JobType ===
                                'Full Time, Work from Home (Remote)')
                    )

                      .slice(0, this.state.visibleFullTime)
                      .map((data, index) => {
                        return (
                          <div className='col-md-4' key={index}>
                            <div className='cards'>
                              <Cards
                                companyImg={data.Logo}
                                position={data.Position}
                                company={data.Company}
                                jobType={data.JobType}
                                location={data.Location}
                                experience={data.Experience}
                                href={data.Link}
                              />
                            </div>
                          </div>
                        );
                      })}
                </div>

                {tabIndex === 2 &&
                  this.props.db.Sheet1.filter(
                    selectedId && !selectedCityValue
                      ? (data) =>
                          (data.Experience ===
                            selectedId.toString() + ' ' + 'Yrs' ||
                            data.Experience ===
                              (selectedId + 1).toString() + ' ' + 'Yrs') &&
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
                            selectedId.toString() + ' ' + 'Yrs' ||
                            data.Experience ===
                              (selectedId + 1).toString() + ' ' + 'Yrs') &&
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
                  this.state.visibleFullTime < this.props.db.Sheet1.length && (
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
                      selectedId && !selectedCityValue
                        ? (data) =>
                            (data.Experience ===
                              selectedId.toString() + ' ' + 'Yrs' ||
                              data.Experience ===
                                (selectedId + 1).toString() + ' ' + 'Yrs') &&
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
                              selectedId.toString() + ' ' + 'Yrs' ||
                              data.Experience ===
                                (selectedId + 1).toString() + ' ' + 'Yrs') &&
                            (data.JobType === 'Full Time' ||
                              data.JobType ===
                                'Full Time, Work from Home (Remote)') &&
                            data.Location === selectedCityValue.toString()
                        : (data) =>
                            data.Remote !== 'Yes' &&
                            (data.JobType === 'Full Time' ||
                              data.JobType ===
                                'Full Time, Work from Home (Remote)')
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
                              selectedId.toString() + ' ' + 'Yrs' ||
                              data.Experience ===
                                (selectedId + 1).toString() + ' ' + 'Yrs') &&
                            data.JobType === 'Internship'
                        : !selectedId && selectedCityValue
                        ? (data) =>
                            data.Location === selectedCityValue.toString() &&
                            data.JobType === 'Internship'
                        : selectedId && selectedCityValue
                        ? (data) =>
                            (data.Experience ===
                              selectedId.toString() + ' ' + 'Yrs' ||
                              data.Experience ===
                                (selectedId + 1).toString() + ' ' + 'Yrs') &&
                            data.JobType === 'Internship' &&
                            data.Location === selectedCityValue.toString()
                        : (data) =>
                            data.Remote !== 'Yes' &&
                            data.JobType === 'Internship'
                    )
                      .slice(0, this.state.visibleInternship)
                      .map((data, index) => {
                        return (
                          <div className='col-md-4' key={index}>
                            <div className='cards'>
                              <Cards
                                companyImg={data.Logo}
                                position={data.Position}
                                company={data.Company}
                                jobType={data.JobType}
                                location={data.Location}
                                experience={data.Experience}
                                href={data.Link}
                              />
                            </div>
                          </div>
                        );
                      })}
                </div>

                {tabIndex === 3 &&
                  this.props.db.Sheet1.filter(
                    selectedId && !selectedCityValue
                      ? (data) =>
                          (data.Experience ===
                            selectedId.toString() + ' ' + 'Yrs' ||
                            data.Experience ===
                              (selectedId + 1).toString() + ' ' + 'Yrs') &&
                          data.JobType === 'Internship'
                      : !selectedId && selectedCityValue
                      ? (data) =>
                          data.Location === selectedCityValue.toString() &&
                          data.JobType === 'Internship'
                      : selectedId && selectedCityValue
                      ? (data) =>
                          (data.Experience ===
                            selectedId.toString() + ' ' + 'Yrs' ||
                            data.Experience ===
                              (selectedId + 1).toString() + ' ' + 'Yrs') &&
                          data.JobType === 'Internship' &&
                          data.Location === selectedCityValue.toString()
                      : (data) =>
                          data.Remote !== 'Yes' && data.JobType === 'Internship'
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
                      selectedId && !selectedCityValue
                        ? (data) =>
                            (data.Experience ===
                              selectedId.toString() + ' ' + 'Yrs' ||
                              data.Experience ===
                                (selectedId + 1).toString() + ' ' + 'Yrs') &&
                            data.JobType === 'Internship'
                        : !selectedId && selectedCityValue
                        ? (data) =>
                            data.Location === selectedCityValue.toString() &&
                            data.JobType === 'Internship'
                        : selectedId && selectedCityValue
                        ? (data) =>
                            (data.Experience ===
                              selectedId.toString() + ' ' + 'Yrs' ||
                              data.Experience ===
                                (selectedId + 1).toString() + ' ' + 'Yrs') &&
                            data.JobType === 'Internship' &&
                            data.Location === selectedCityValue.toString()
                        : (data) =>
                            data.Remote !== 'Yes' &&
                            data.JobType === 'Internship'
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
                  {tabIndex === 4 &&
                    this.props.db &&
                    this.props.db.Sheet1 &&
                    this.props.db.Sheet1.filter(
                      selectedId && !selectedCityValue
                        ? (data) =>
                            (data.Experience ===
                              selectedId.toString() + ' ' + 'Yrs' ||
                              data.Experience ===
                                (selectedId + 1).toString() + ' ' + 'Yrs') &&
                            data.JobType === 'Freelance'
                        : !selectedId && selectedCityValue
                        ? (data) =>
                            data.Location === selectedCityValue.toString() &&
                            data.JobType === 'Freelance'
                        : selectedId && selectedCityValue
                        ? (data) =>
                            (data.Experience ===
                              selectedId.toString() + ' ' + 'Yrs' ||
                              data.Experience ===
                                (selectedId + 1).toString() + ' ' + 'Yrs') &&
                            data.JobType === 'Freelance' &&
                            data.Location === selectedCityValue.toString()
                        : (data) =>
                            data.Remote !== 'Yes' &&
                            data.JobType === 'Freelance'
                    )
                      .slice(0, this.state.visibleFreelance)
                      .map((data, index) => {
                        return (
                          <div className='col-md-4' key={index}>
                            <div className='cards'>
                              <Cards
                                companyImg={data.Logo}
                                position={data.Position}
                                company={data.Company}
                                jobType={data.JobType}
                                location={data.Location}
                                experience={data.Experience}
                                href={data.Link}
                              />
                            </div>
                          </div>
                        );
                      })}
                </div>

                {tabIndex === 4 &&
                  this.props.db.Sheet1.filter(
                    selectedId && !selectedCityValue
                      ? (data) =>
                          (data.Experience ===
                            selectedId.toString() + ' ' + 'Yrs' ||
                            data.Experience ===
                              (selectedId + 1).toString() + ' ' + 'Yrs') &&
                          data.JobType === 'Freelance'
                      : !selectedId && selectedCityValue
                      ? (data) =>
                          data.Location === selectedCityValue.toString() &&
                          data.JobType === 'Freelance'
                      : selectedId && selectedCityValue
                      ? (data) =>
                          (data.Experience ===
                            selectedId.toString() + ' ' + 'Yrs' ||
                            data.Experience ===
                              (selectedId + 1).toString() + ' ' + 'Yrs') &&
                          data.JobType === 'Freelance' &&
                          data.Location === selectedCityValue.toString()
                      : (data) =>
                          data.Remote !== 'Yes' && data.JobType === 'Freelance'
                  ).length > 9 &&
                  this.state.visibleFreelance < this.props.db.Sheet1.length && (
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
                              selectedId.toString() + ' ' + 'Yrs' ||
                              data.Experience ===
                                (selectedId + 1).toString() + ' ' + 'Yrs') &&
                            data.JobType === 'Freelance'
                        : !selectedId && selectedCityValue
                        ? (data) =>
                            data.Location === selectedCityValue.toString() &&
                            data.JobType === 'Freelance'
                        : selectedId && selectedCityValue
                        ? (data) =>
                            (data.Experience ===
                              selectedId.toString() + ' ' + 'Yrs' ||
                              data.Experience ===
                                (selectedId + 1).toString() + ' ' + 'Yrs') &&
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
                <h5 className='post-heading'>Guide</h5>
                <p className='post-info-para'>
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
    );
  }
}

Home.propTypes = {
  db: PropTypes.shape({
    Sheet1: PropTypes.arrayOf(PropTypes.object),
  }),
};

export default withGoogleSheets(['Sheet1', 'Guide'])(Home);
