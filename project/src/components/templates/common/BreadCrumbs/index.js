import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';

const breadcurmbs = [
  {
    title: 'Все',
    href: '/all',
    active: 'false',
  },
  {
    title: 'Блоги',
    href: '/blogs',
    active: 'false',
  },
  {
    title: 'PR',
    href: '/pr',
    active: 'false',
  },
  {
    title: 'Сайты',
    href: '/sites',
    active: 'false',
  },
  {
    title: 'Руководства',
    href: '/ruc',
    active: 'false',
  },
  {
    title: 'Соцсети',
    href: '/social',
    active: 'false',
  },
  {
    title: 'Редакции на аутсорсе',
    href: '/red',
    active: 'false',
  },
];


class BreadCrumbs extends Component {
  state = {
    arr: breadcurmbs,
  };

  componentWillMount() {
    this.forceUpdate();
  }

  handleClick = item => e => {
    e.preventDefault()
    const breadcrumbs = this.state.arr.concat();
    let index = 0;
    for (let i = 0; i < breadcrumbs.length; i += 1) {
      breadcrumbs[i].active = false;
      if (breadcrumbs[i].title === item.title) {
        index = i;
      }
    }
    const newItem = breadcrumbs.splice(index, 1);
    const lastArr = breadcrumbs.splice(index);
    newItem[0].active = true;
    const arr = [...breadcrumbs, ...newItem, ...lastArr];
    this.setState({ arr });
  }

  render() {
    const { className, type, placeholder } = this.props;
    const customClass = className === undefined ? '' : className;
    return (
      <nav className="breadcrumbs">
        {
          this.state.arr.map((item, index) => {
            const activeClassName = item.active === true ? 'breadcrumbs__link--active' : '';
            return (
              <li className="breadcrumbs__item">
                <Link onClick={this.handleClick(item)} to={`/cases${item.href}`} className={`breadcrumbs__link ${activeClassName}`}>{item.title}</Link>
              </li>
            );
          })
        }
      </nav>
    );
  }
}

export default BreadCrumbs;
