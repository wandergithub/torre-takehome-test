import PropTypes from 'prop-types';

const SkillDetails = (props) => {
  const { setSkill, skill, name } = props;
  console.log(skill);
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
          Recomendations:
          {' '}
          {skill.recomendations ? skill.recomendations : 0}
        </h5>
      </div>
      <div className="px-4 border-bottom border-secondary mt-5">
        <h5 className="heading-3 my-3 pb-4">
          {name}
          &apos;s related experiences:
        </h5>
      </div>
      <div className="px-4 mt-5">
        <h5 className="heading-3 my-3 pb-4">
          Other people with this skill:
        </h5>
      </div>
    </div>
  );
};

SkillDetails.propTypes = {
  setSkill: PropTypes.func.isRequired,
  skill: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.object])).isRequired,
  name: PropTypes.string,
};

SkillDetails.defaultProps = {
  name: 'default name',
};

export default SkillDetails;
