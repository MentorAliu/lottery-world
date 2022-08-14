import { useDispatch } from "react-redux";
import { closeModal } from "../../../features/modal/modalSlice";
import { Button } from "../form";
import "./Modal.css"

export const Modal = ({ propData, title }) => {
  const dispatch = useDispatch();
  return (
    <aside className="modal-container">
      <div className="modal">
        <h4>{propData} {title}</h4>
        <div className="btn-container">
          <Button type="button" onClick={() => dispatch(closeModal())} />
        </div>
      </div>
    </aside>
  );
};

