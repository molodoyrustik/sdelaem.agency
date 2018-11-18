import React from 'react';
import CustomLink from '../../common/CustomLink';

const elements = [
  {
    name: 'Гарольд Гарольдович',
    position: 'должность, компания',
    src: '/images/content/ava.jpg',
    review: '«Сделаем» — команда маркетологов, редакторов, стратегов и аналитиков. Пишем тексты, проектируем сайты, делаем контент-маркетинг и проводим PR-кампании. Отвечаем за результат и работаем по заранее»',
  },
  {
    name: 'Гарольд Гарольдович',
    position: 'должность, компания',
    src: '/images/content/ava.jpg',
    review: '«Сделаем» — команда маркетологов, редакторов, стратегов и аналитиков. Пишем тексты, проектируем сайты, делаем контент-маркетинг и проводим PR-кампании. Отвечаем за результат и работаем по заранее»',
  },
  {
    name: 'Гарольд Гарольдович',
    position: 'должность, компания',
    src: '/images/content/ava.jpg',
    review: '«Сделаем» — команда маркетологов, редакторов, стратегов и аналитиков. Пишем тексты, проектируем сайты, делаем контент-маркетинг и проводим PR-кампании. Отвечаем за результат и работаем по заранее»',
  },
  {
    name: 'Гарольд Гарольдович',
    position: 'должность, компания',
    src: '/images/content/ava.jpg',
    review: '«Сделаем» — команда маркетологов, редакторов, стратегов и аналитиков. Пишем тексты, проектируем сайты, делаем контент-маркетинг и проводим PR-кампании. Отвечаем за результат и работаем по заранее»',
  },
];

const items = [
  {
    imgSrc: '/images/content/blog/blog1.jpg',
    title: '300 тем для статей в блог по маркетингу',
    desc: 'В прошлый раз мы подготовили статью, где составили список из 205 универсальных тем для любого блога. На этот раз сабж более конкретный — маркетинг. Мы осмотрели на свои нычки и черновики и поняли, что накопили очень много тем для статей в блог по маркетингу.',
    date: '20.09.2018',
  },
  {
    imgSrc: '/images/content/blog/blog1.jpg',
    title: '300 тем для статей в блог по маркетингу',
    desc: 'В прошлый раз мы подготовили статью, где составили список из 205 универсальных тем для любого блога. На этот раз сабж более конкретный — маркетинг. Мы осмотрели на свои нычки и черновики и поняли, что накопили очень много тем для статей в блог по маркетингу.',
    date: '20.09.2018',
  },
  {
    imgSrc: '/images/content/blog/blog1.jpg',
    title: 'Как заказать текст для сайта: 33 совета заказчику, которому дороги нервы',
    desc: 'Эттеншн, периодически 18+. Купить текст = купить любой другой товар.',
    date: '20.09.2018',
  },
  {
    imgSrc: '/images/content/blog/blog1.jpg',
    title: '300 тем для статей в блог по маркетингу',
    desc: 'В прошлый раз мы подготовили статью, где составили список из 205 универсальных тем для любого блога. На этот раз сабж более конкретный — маркетинг. Мы осмотрели на свои нычки и черновики и поняли, что накопили очень много тем для статей в блог по маркетингу.',
    date: '20.09.2018',
  },
  {
    imgSrc: '/images/content/blog/blog1.jpg',
    title: 'Как заказать текст для сайта: 33 совета заказчику, которому дороги нервы',
    desc: 'Эттеншн, периодически 18+. Купить текст = купить любой другой товар.',
    date: '20.09.2018',
  },
  {
    imgSrc: '/images/content/blog/blog1.jpg',
    title: 'Как заказать текст для сайта: 33 совета заказчику, которому дороги нервы',
    desc: 'Эттеншн, периодически 18+. Купить текст = купить любой другой товар.',
    date: '20.09.2018',
  },
  {
    imgSrc: '/images/content/blog/blog1.jpg',
    title: '300 тем для статей в блог по маркетингу',
    desc: 'В прошлый раз мы подготовили статью, где составили список из 205 универсальных тем для любого блога. На этот раз сабж более конкретный — маркетинг. Мы осмотрели на свои нычки и черновики и поняли, что накопили очень много тем для статей в блог по маркетингу.',
    date: '20.09.2018',
  },
];

const listItemsRender = (items) => {
  return (
    items.map((item, index) => {
      return (
        <li className="blog-section__item">
          <img src={item.imgSrc} alt="" className="blog-section__item-img"/>
          <div className="blog-section__item-title">{item.title}</div>
          <div className="blog-section__item-desc">{item.desc}</div>
          <div className="blog-section__item-date">{item.date}</div>
        </li>
      );
    })
  );
};

const ServiceBody = (props) => {
  return (
    <div className="service__body">
      <div className="service__main-img">
        <div className="service__img-wrap">
          <img src="/images/content/case/portfolio.jpg" alt="" className="service__img"/>
        </div>
        <div className="service__main-title">
          Редакция на аутсорсе
        </div>
      </div>
      <div className="service__desc">Ведем блог Академии Лидогенерации с начала 2017 года. За это время выпустили больше 60 статей, повысили SEO-трафик на сайт в 3 раза. С июля 2018 ведем соцсети: ВКонтакте, Фейсбук, Инстаграм и Телеграм. В первую же неделю работы получили Огонь Прометея во Вконтакте и через месяц — еще один. За 2 месяца повысили органический охват постов в 7 раз, вовлеченность в 4 раза, количество переходов из соцсетей на сайт — в 3 раза. Продолжаем работать с Академией и дальше.</div>
      <div className="service__subtitle">Что мы сделали</div>
      <div className="service__cases">
        <ul className="service__case-list">
          <li className="service__case-item">
            <a href="#" className="service__case-link">
              <div className="service__case-img-wrap">
                <img src="/images/content/cases/case-img-big.jpg" alt="" className="service__case-img"/>
              </div>
              <div className="service__case-title">Сайт рекрутингового агентства Intella</div>
              <div className="service__case-desc">Тексты для сайта, кейсы, редизайн, локализация</div>
            </a>
          </li>
          <li className="service__case-item">
            <a href="#" className="service__case-link">
              <div className="service__case-img-wrap">
                <img src="/images/content/cases/case-img-big.jpg" alt="" className="service__case-img"/>
              </div>
              <div className="service__case-title">Сайт рекрутингового агентства Intella</div>
              <div className="service__case-desc">Тексты для сайта, кейсы, редизайн, локализация</div>
            </a>
          </li>
          <li className="service__case-item">
            <a href="#" className="service__case-link">
              <div className="service__case-img-wrap">
                <img src="/images/content/cases/case-img-big.jpg" alt="" className="service__case-img"/>
              </div>
              <div className="service__case-title">Сайт рекрутингового агентства Intella</div>
              <div className="service__case-desc">Тексты для сайта, кейсы, редизайн, локализация</div>
            </a>
          </li>
        </ul>
      </div>
      <div className="service-edge">
        <div className="service-edge__title">Заголовок, связанный с преимуществом</div>
        <ul className="service-edge__list">
          <li className="service-edge__item">
            <div className="service-edge__item-img-wrap">
              <img src="" alt="" className="service-edge__item-img"/>
            </div>
            <div className="service-edge__item-title">Какое-то преимущество</div>
            <div className="service-edge__item-desc">Каким должен быть стиль общения, чтобы завоевать аудиторию среди представителей поколения Z — рассказывает Алексей Рожков. 60 000 просмотров на VC.</div>
          </li>
          <li className="service-edge__item">
            <div className="service-edge__item-img-wrap">
              <img src="" alt="" className="service-edge__item-img"/>
            </div>
            <div className="service-edge__item-title">Какое-то преимущество</div>
            <div className="service-edge__item-desc">Каким должен быть стиль общения, чтобы завоевать аудиторию среди представителей поколения Z — рассказывает Алексей Рожков. 60 000 просмотров на VC.</div>
          </li>
          <li className="service-edge__item">
            <div className="service-edge__item-img-wrap">
              <img src="" alt="" className="service-edge__item-img"/>
            </div>
            <div className="service-edge__item-title">Какое-то преимущество</div>
            <div className="service-edge__item-desc">Каким должен быть стиль общения, чтобы завоевать аудиторию среди представителей поколения Z — рассказывает Алексей Рожков. 60 000 просмотров на VC.</div>
          </li>
        </ul>
      </div>
      <div className="service__reviews">
        <div className="reviews-section__title">Отзывы о нас</div>
        <ul className="reviews-section__list">
          {
            elements.map((item, index) => {
              const { src, name, position, review } = item;
              return (
                <li key={index} className="reviews-section__item">
                  <div className="reviews-section__item-img-wrap">
                    <img src={src} alt="" className="reviews-section__item-img"/>
                  </div>
                  <div className="reviews-section__user-wrap">
                    <div className="reviews-section__item-name">{name}</div>
                    <div className="reviews-section__item-position">/{position}</div>
                    <div className="reviews-section__item-review">{review}</div>
                  </div>
                </li>
              );
            })
          }
        </ul>
      </div>
      <div className="service__articles">
        <div className="service__articles-title">Статьи</div>
        <div className="blog-section__wrapper-list">
          <ul className="blog-section__list">
            { listItemsRender(items) }
          </ul>
        </div>
        <div className="blog-section__link">
          <CustomLink text='Больше' href='#' />
        </div>
      </div>
    </div>
  );
};

export default ServiceBody;

