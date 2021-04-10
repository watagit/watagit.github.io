import React, { useState } from 'react';

import * as Styled from './styles';

interface MainNavItem {
  title: string;
  slug: string;
}

const mainNavItems: MainNavItem[] = [
  {
    title: 'About Me',
    slug: '/'
  },
  {
    title: 'Resume',
    slug: '/resume/'
  },
  {
    title: 'Post',
    slug: '/post/'
  },
  // {
  //   title: 'Contact Me',
  //   slug: '/contact/'
  // }
];

const MainNav: React.FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Styled.MainNav open={open}>
        {mainNavItems.map((item, index) => {
          if (item.slug !== '/post/') {
            return (
              <Styled.MainNavItem
                key={`nav-item-${index}`}
                to={item.slug}
                activeClassName="active"
                whileTap={{ scale: 0.9 }}
              >
                {item.title}
              </Styled.MainNavItem>
            )
          } else {
            return (
              <Styled.MainNavItemPost>
                <a
                  href={"https://www.notion.so/456050092dee43fa8f7e8248e3c0f400?v=b5235ddc16d142af9ea447a02fd121b6"}
                  target={"_blank"}
                  rel={"noopener noreferrer"}
                  style={{ color: "#3c366b" }}
                >{item.title}</a>
              </Styled.MainNavItemPost>
            )
          }
        })}
      </Styled.MainNav>
      <Styled.ToogleMainNav open={open} onClick={() => setOpen(!open)}>
        <span />
        <span />
        <span />
      </Styled.ToogleMainNav>
    </>
  );
};

export default MainNav;
