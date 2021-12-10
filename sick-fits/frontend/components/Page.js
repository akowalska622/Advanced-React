import { PropTypes } from 'prop-types';
import { Header } from './Header';

export const Page = ({ children }) => (
  <div>
    <Header />
    <h2>I am the page component</h2>
    {children}
  </div>
);

Page.propTypes = {
  children: PropTypes.oneOf([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};
