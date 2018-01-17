import * as React from 'react';
import { Redirect } from 'react-router';

import App from './App';
import Home from './app/home/Home';
import Home1 from './app/home/home-1/Home1';
import Home1Tab1 from './app/home/home-1/tab-1/Tab1';
import Home1Tab1Zero from './app/home/home-1/tab-1/details/Zero';
import Home1Tab1Details from './app/home/home-1/tab-1/details/Details';
import Home1Tab2 from './app/home/home-1/tab-2/Tab2';
import Home1Tab3 from './app/home/home-1/tab-3/Tab3';
import Home2 from './app/home/home-2/Home2';
import Home3 from './app/home/home-3/Home3';
import About from './app/about/About';
import About1 from './app/about/about-1/About1';
import About2 from './app/about/about-2/About2';
import About3 from './app/about/about-3/About3';
import Contact from './app/contact/Contact';
import Contact1 from './app/contact/contact-1/Contact1';
import Contact2 from './app/contact/contact-2/Contact2';
import Contact3 from './app/contact/contact-3/Contact3';
import Events from './app/events/Events';
import Events1 from './app/events/events-1/Events1';
import Events2 from './app/events/events-2/Events2';
import Events3 from './app/events/events-3/Events3';
import Products from './app/products/Products';
import Products1 from './app/products/products-1/Products1';
import Products2 from './app/products/products-2/Products2';
import Products3 from './app/products/products-3/Products3';

// export default routerConfig;
const routes = [
  {
    component: App,
    routes: [
      {
        path: '/home',
        component: Home,
        routes: [
          {
            path: '/home/home1',
            component: Home1,
            routes: [
              {
                path: '/home/home1/tab1',
                component: Home1Tab1,
                routes: [
                  {
                    path: '/home/home1/tab1/zero',
                    component: Home1Tab1Zero,
                  },
                  {
                    path: '/home/home1/tab1/details/:id',
                    component: Home1Tab1Details,
                  },
                  {
                    path: '/home/home1/tab1',
                    component: props => <Redirect to="/home/home1/tab1/zero" />,
                  },
                ],
              },
              {
                path: '/home/home1/tab2',
                component: Home1Tab2,
              },
              {
                path: '/home/home1/tab3',
                component: Home1Tab3,
              },
              {
                path: '/home/home1',
                component: props => <Redirect to="/home/home1/tab1" />,
              },
            ],
          },
          {
            path: '/home/home2',
            component: Home2,
          },
          {
            path: '/home/home3',
            component: Home3,
          },
          {
            path: '/home',
            component: props => <Redirect to="/home/home1" />,
          },
        ],
      },
      {
        path: '/about',
        component: About,
        routes: [
          {
            path: '/about/about1',
            component: About1,
          },
          {
            path: '/about/about2',
            component: About2,
          },
          {
            path: '/about/about3',
            component: About3,
          },
          {
            path: '/about',
            component: props => <Redirect to="/about/about1" />,
          },
        ],
      },
      {
        path: '/contact',
        component: Contact,
        routes: [
          {
            path: '/contact/contact1',
            component: Contact1,
          },
          {
            path: '/contact/contact2',
            component: Contact2,
          },
          {
            path: '/contact/contact3',
            component: Contact3,
          },
          {
            path: '/contact',
            component: props => <Redirect to="/contact/contact1" />,
          },
        ],
      },
      {
        path: '/events',
        component: Events,
        routes: [
          {
            path: '/events/events1',
            component: Events1,
          },
          {
            path: '/events/events2',
            component: Events2,
          },
          {
            path: '/events/events3',
            component: Events3,
          },
          {
            path: '/events',
            component: props => <Redirect to="/events/events1" />,
          },
        ],
      },
      {
        path: '/products',
        component: Products,
        routes: [
          {
            path: '/products/products1',
            component: Products1,
          },
          {
            path: '/products/products2',
            component: Products2,
          },
          {
            path: '/products/products3',
            component: Products3,
          },
          {
            path: '/products',
            component: props => <Redirect to="/products/products1" />,
          },
        ],
      },
      {
        path: '/',
        component: props => <Redirect to="/home" />,
      },
    ],
  },
];
export default routes;
