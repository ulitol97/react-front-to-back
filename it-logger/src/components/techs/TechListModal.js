import React, { useEffect, useState } from "react";
import TechItem from "./TechItem";

const TechListModal = () => {
  const [techs, setTechs] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getTechs();
    // eslint-disable-next-line
  }, []);

  async function getTechs() {
    setLoading(true);
    const response = await fetch("/techs");
    const data = await response.json();

    setTechs(data);
    setLoading(false);
  }

  return (
    <div id="list-tech-modal" className="modal">
      <div className="modal-content">
        <h4>Technician list</h4>
        <ul className="collection">
          {!loading &&
            techs.map((tech) => (
              <li key={tech.id} className="collection-item">
                <TechItem tech={tech} />
              </li>
            ))}
        </ul>
      </div>
      {/* <div className="modal-footer">
        <a
          href="#!"
          onClick={onSubmit}
          className="modal-close waves-effect waves-light blue btn"
        >
          Add technician
        </a>
      </div> */}
    </div>
  );
};

export default TechListModal;
