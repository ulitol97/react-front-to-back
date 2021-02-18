import { useContext } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import AlertContext from "../../context/alert/alertContext";
import AlertItem from "./AlertItem";

const Alerts = () => {
  const { alerts } = useContext(AlertContext);

  return (
    alerts.length > 0 && (
      <div className="alert-container">
        <TransitionGroup>
          {alerts.length &&
            alerts.map((alert) => (
              <CSSTransition key={alert.id} timeout={500} classNames="alert">
                <AlertItem alert={alert} />
              </CSSTransition>
            ))}
        </TransitionGroup>
      </div>
    )
  );
};

export default Alerts;
