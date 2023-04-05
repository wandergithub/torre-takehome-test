import { PropTypes } from 'prop-types';

const Header = (props) => {
  const { fetchUserData, setUserName } = props;
  return (
    <>
      <input id="user-name" name="user-name" placeholder="username" onChange={(e) => setUserName(e.target.value)} />
      <button type="button" onClick={fetchUserData}>Search</button>
    </>
  );
};

Header.propTypes = {
  fetchUserData: PropTypes.func.isRequired,
  setUserName: PropTypes.func.isRequired,
};

export default Header;
