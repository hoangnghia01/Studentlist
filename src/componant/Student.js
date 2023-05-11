import { AiOutlineDeleteRow, AiOutlineEdit } from "react-icons/ai";
import Formedit from "./Formedit";
export default function Student(props) {
  const { student, delelist, toggle_complete, editId, editList } = props;
  const isEdit = editId === student.id;
  return (
    <div className="student">
      {isEdit ? (
        <Formedit value={student} editList={editList} />
      ) : (
        <>
          <input
            type="checkbox"
            checked={student.isComplete ? true : false}
            onChange={() => toggle_complete(student.id)}
          />
          <span
            className={`${student.isComplete ? "complete" : ""}`}
            onDoubleClick={() => props.toggle_edit(props.student.id)}
          >
            {props.student.name}
          </span>
          <AiOutlineEdit
            className="edit"
            onClick={() => props.toggle_edit(props.student.id)}
          />
          <AiOutlineDeleteRow
            onClick={() => props.delelist(props.student.id)}
          />
        </>
      )}
    </div>
  );
}
