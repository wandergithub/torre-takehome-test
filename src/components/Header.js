import { PropTypes } from 'prop-types';

const Header = (props) => {
  const { fetchUserData, setUserName, userName } = props;
  return (
    <div className="d-flex align-items-center justify-content-center pt-3 mb-5 pb-3 border-bottom border-success shadow-lg">
      <div className="d-flex justify-content-center">
        <input type="text" id="user-name" name="user-name" value={userName} placeholder="username" className="form-control border-success" onChange={(e) => setUserName(e.target.value)} />
        <button type="button" onClick={fetchUserData} className="mx-1 btn btn-success">Search</button>
      </div>
    </div>
  );
};

Header.propTypes = {
  fetchUserData: PropTypes.func.isRequired,
  setUserName: PropTypes.func.isRequired,
  userName: PropTypes.string.isRequired,
};

export default Header;
