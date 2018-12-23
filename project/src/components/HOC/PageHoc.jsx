import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';

import Index from '../templates/pages/Index';
import Services from '../templates/pages/Services';
import Service from '../templates/pages/Service';
import Cases from '../templates/pages/Cases';
import Case from '../templates/pages/Case';
import Blog from '../templates/pages/Blog';
import Article from '../templates/pages/Article';
import About from '../templates/pages/About';
import Contacts from '../templates/pages/Contacts';
import NotFound from '../templates/pages/NotFound';


class Page extends Component {
  constructor(props) {
    super();
    const page = this.createPage(props);

    this.state = { page };
  }

  componentWillReceiveProps(props) {
    const page = this.createPage(props);

    if (typeof (window) !== 'undefined') window.scrollTo(0, 0);

    return this.setState({ page });
  }

  configureHelmet() {
    const { page } = this.state;
    const { acf } = page;
    const params = {
      title: acf.pagetitle,
      meta: [
        { name: 'description', content: acf.metaDescription },
        { name: 'keywords"', content: acf.metaKeywords },
      ],
    };

    return <Helmet {...params} />;
  }

  createPage(props) {
    const { pages, match } = props;
    const { params } = match;
    const slug = params.slug ? params.slug : 'index';
    let page = {
      id: null,
      acf: {
        pagetitle: '',
        metaDescription: '',
        metaKeywords: '',
      },
    };

    pages.forEach(item => {
      if (item.acf.template === slug) {
        page = item;
      }
    });
    return page;
  }

  renderIndex(page) {
    const { acf } = page;
    const params = {
      subTitle: acf.subTitle,
      mainTitle: acf.mainTitle,
      mainLink: acf.mainLink,
      mainDescription: acf.mainDescription,
      casesSection: acf.casesSection,
      reviewsSection: acf.reviewsSection,
      clientsSection: acf.clientsSection,
      latestArticles: acf.latestArticles,
    };

    return <Index {...params} />;
  }

  renderServices(page) {
    const { acf } = page;
    const params = {
      subTitle: acf.subTitle,
      mainTitle: acf.mainTitle,
      mainDescription: acf.mainDescription,
      casesSection: acf.casesSection,
      reviewsSection: acf.reviewsSection,
      clientsSection: acf.clientsSection,
      latestArticles: acf.latestArticles,
    };
    return <Services {...params} />;
  }

  renderServices(page) {
    const { acf } = page;
    const params = {
      acf
    };
    return <Service {...params} />;
  }

  renderCases(page) {
    const { acf } = page;
    const params = {
      subTitle: acf.subTitle,
      mainTitle: acf.mainTitle,
      mainLink: acf.mainLink,
      mainDescription: acf.mainDescription,
      casesSection: acf.casesSection,
      reviewsSection: acf.reviewsSection,
      clientsSection: acf.clientsSection,
      latestArticles: acf.latestArticles,
    };

    return <Cases {...params} />;
  }

  renderBlog(page) {
    const { acf } = page;
    const params = {
      subTitle: acf.subTitle,
      mainTitle: acf.mainTitle,
      mainLink: acf.mainLink,
      mainDescription: acf.mainDescription,
      teamSection: acf.teamSection,
      massmediaSection: acf.massmediaSection,
    };

    return <Blog {...params} />;
  }

  renderAbout(page) {
    const { acf } = page;
    const params = {
      subTitle: acf.subTitle,
      mainTitle: acf.mainTitle,
      mainLink: acf.mainLink,
      mainDescription: acf.mainDescription,
      teamSection: acf.teamSection,
      massmediaSection: acf.massmediaSection,
    };

    return <About {...params} />;
  }

  renderContacts(page) {
    const { acf } = page;
    const params = {
      pagetitle: acf.pagetitle,
      phone: acf.phone,
      subTitle: acf.subTitle,
      mainTitle: acf.mainTitle,
      mainLink: acf.mainLink,
      mainDescription: acf.mainDescription,
      teamSection: acf.teamSection,
      massmediaSection: acf.massmediaSection,
    };

    return <Contacts {...params} />;
  }

  renderNotFound() {
    return <NotFound/>;
  }

  renderTemplate() {
    const { page } = this.state;
    const { template } = page.acf;

    switch (template) {
      case 'index':
        return this.renderIndex(page);
      case 'services':
        return this.renderServices(page);
      case 'service':
        return this.renderServices(page);
      case 'cases':
        return this.renderCases(page);
      case 'blog':
        return this.renderBlog(page);
      case 'about':
        return this.renderAbout(page);
      case 'contacts':
        return this.renderContacts(page);
      default:
        return this.renderNotFound(page);
    }
  }

  render() {
    return (
      <div>
        {this.configureHelmet()}
        {this.renderTemplate()}
      </div>
    );
  }
}

export default connect((state) => {
  return {
    pages: state.pages.items,
  };
})(Page);
