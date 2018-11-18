import React from 'react';
import ServicesItem from './ServicesItem';

const items = [
  {
    title: 'Контент-маркетинг',
    desc: 'Запускаем блоги и рассылки или ведем существующие. Составляем стратегию продвижения и редполитику, находим авторов, выпускаем контент и привлекаем читателей. Делаем так, чтобы блог решал задачи бизнеса, а не высасывал из него деньги.',
    srcImg: '/images/content/services/01.svg',
  },
  {
    title: 'Редакция на аутсорсе',
    desc: 'Работаем как удаленная редакция вашей компании. Готовим контент в любых количествах: пишем статьи и новости, добавляем новые страницы на сайты, делаем презентации, ведем рассылки и соцсети.',
    srcImg: '/images/content/services/02.svg',
  },
  {
    title: 'Редакция на аутсорсе',
    desc: 'Работаем как удаленная редакция вашей компании. Готовим контент в любых количествах: пишем статьи и новости, добавляем новые страницы на сайты, делаем презентации, ведем рассылки и соцсети.',
    srcImg: '/images/content/services/03.svg',
  },
  {
    title: 'Редакция на аутсорсе',
    desc: 'Работаем как удаленная редакция вашей компании. Готовим контент в любых количествах: пишем статьи и новости, добавляем новые страницы на сайты, делаем презентации, ведем рассылки и соцсети.',
    srcImg: '/images/content/services/04.svg',
  },
  {
    title: 'Редакция на аутсорсе',
    desc: 'Работаем как удаленная редакция вашей компании. Готовим контент в любых количествах: пишем статьи и новости, добавляем новые страницы на сайты, делаем презентации, ведем рассылки и соцсети.',
    srcImg: '/images/content/services/05.svg',
  },
];

const arr = [[], [], []];

const length = items.length;
let j = 0;
for (let i = 0; i < length; i++) {
  if (j === 3) j = 0;
  arr[j].push(items[i]);
  j += 1;
}

const ServicesList = (props) => {
  return (
    <ul className="services__list">
      {
        arr.map((items, i) => {
          return (
            <div key={i} className="services__first-column">
              {
                items.map((item, index) => {
                  return (
                    <ServicesItem
                      key={index}
                      title={item.title}
                      desc={item.desc}
                      srcImg={item.srcImg}
                    />
                  );
                })
              }
            </div>
          )
        })
      }
    </ul>
  );
};

export default ServicesList;
