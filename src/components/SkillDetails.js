import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import axios from 'axios';

const SkillDetails = (props) => {
  const { setSkill, skill, user } = props;

  // Users that have the same skill
  const [users, setUsers] = useState(null);

  // Fetch users and set state to users that match the current skill
  useEffect(() => {
    async function fetchData() {
      const response = await axios.get('http://127.0.0.1:3000/users/');
      const list = await response.data;
      const userList = [];
      list.forEach((element) => {
        const arr = element.strengths;
        const obj = skill;
        const includesObject = arr.some(
          (item) => JSON.stringify(item) === JSON.stringify(obj),
        );
        if (includesObject) {
          userList.push(element);
        }
      });
      setUsers(userList);
    }
    fetchData();
  }, [skill]);

  return (
    <div className="detail-window rounded">
      <header className="shadow-lg d-flex align-items-center border-bottom border-success p-4">
        <button
          type="button"
          className="btn btn-danger me-4"
          onClick={() => setSkill(null)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-x-lg"
            viewBox="0 0 16 16"
          >
            <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
          </svg>
        </button>
        {skill.name}
      </header>
      <div className="px-4 border-bottom border-secondary mt-5">
        <h5 className="heading-3 my-3 text-capitalize">
          Proficiency:
          {' '}
          {skill.proficiency !== 'no-experience-interested'
            ? skill.proficiency
            : 'No experience but interested'}
        </h5>
        <h5 className="heading-3 my-3 text-capitalize pb-4">
          Recommendations:
          {' '}
          {skill.recommendations ? skill.recommendations : 0}
        </h5>
      </div>
      <div className="px-4 border-bottom border-secondary mt-5">
        <h5 className="heading-3 my-3 pb-4">
          {user.name}
          &apos;s related experiences:
        </h5>
        {user.experiences.map((experience) => (
          <div key={Math.random()}>
            <h4>{experience.name}</h4>
            <h5>{experience.organization}</h5>
            <h5>
              {experience.from_month}
              {' '}
              {experience.from_year}
            </h5>
          </div>
        ))}
      </div>
      <div className="px-4 mt-5">
        <h5 className="heading-3 my-3 pb-4">Other people with this skill:</h5>
        <div>
          {/* Display users with same skill that are not the current user */}
          {users && users.map((skillUser) => {
            if (skillUser.name !== user.name) {
              return (
                <div key={Math.random()}>{skillUser.name}</div>
              );
            }
            return null;
          })}
        </div>
      </div>
    </div>
  );
};

SkillDetails.propTypes = {
  setSkill: PropTypes.func.isRequired,
  skill: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.object])).isRequired,
  user: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.object])).isRequired,
};

export default SkillDetails;
