import PropTypes from "prop-types";
import React, { useEffect } from "react";
import { connect } from "react-redux"; // Bridges component with redux
import { getTechs } from "../../actions/techActions";
import TechItem from "./TechItem";

const TechListModal = ({ tech: { techs, loading }, getTechs }) => {
  useEffect(() => {
    getTechs();
    // eslint-disable-next-line
  }, []);

  return (
    <div id="list-tech-modal" className="modal">
      <div className="modal-content">
        <h4>Technician list</h4>
        {!loading && techs !== null && techs.length === 0 ? (
          <p>No technicians to show</p>
        ) : (
          <ul className="collection">
            {!loading &&
              techs !== null &&
              techs.map((tech) => (
                <li key={tech.id} className="collection-item">
                  <TechItem tech={tech} />
                </li>
              ))}
          </ul>
        )}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  tech: state.tech,
});

TechListModal.propTypes = {
  tech: PropTypes.object.isRequired,
  getTechs: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, { getTechs })(TechListModal);
