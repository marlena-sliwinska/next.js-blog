import { Fragment } from 'react';
import { pages } from 'utils/pages';
import { NavLink } from 'components/NavLink';

const Links = () => (
  <Fragment>
    {Object.entries(pages).map(([key, { name, url }]) => (
      <NavLink key={key} href={url}>
        {name}
      </NavLink>
    ))}
  </Fragment>
);

export default Links;
