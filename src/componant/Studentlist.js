import { useState } from "react";
import Student from "./Student";
import Addlist from "./Addlist";
import uuid from "react-uuid";
import Formedit from "./Formedit";
import Footer from "./Footer";
const getList = (stuList, flag) => {
  if (flag == "fillAll") {
    return stuList;
  } else if (flag == "fillNoChecked") {
    return stuList.filter((item) => !item.isComplete);
  } else if (flag == "fillChecked") {
    return stuList.filter((item) => item.isComplete);
  } else {
    return stuList;
  }
};
export default function StudentList() {
  const [editId, setEditId] = useState("");
  const [list, setList] = useState([
    {
      id: 1,
      name: "Tran Van",
      isComplete: false,
    },
    {
      id: 2,
      name: "Tran Hoang",
      isComplete: false,
    },
    {
      id: 3,
      name: "Hoang Nghia",
      isComplete: true,
    },
  ]);
  console.log(list);
  const addlist = (textname) => {
    setList([...list, { id: uuid(), name: textname, isComplete: false }]);
  };
  const delelist = (id) => {
    const newlist = list.filter((stu) => stu.id !== id);
    setList(newlist);
  };
  const toggle_complete = (id) => {
    setList(
      list.map((value) =>
        value.id === id ? { ...value, isComplete: !value.isComplete } : value
      )
    );
  };
  const editList = (id, name) => {
    setList(
      list.map((value) =>
        value.id === id ? { ...value, name: name, isEdit: false } : value
      )
    );
    setEditId("");
  };
  const toggle_edit = (id) => {
    setEditId(id);
  };
  const [flag, setFlag] = useState("filterAll");
  const fillAll = () => {
    setFlag("fillAll");
  };
  const fillNoChecked = () => {
    setFlag("fillNoChecked");
  };
  const fillChecked = () => {
    setFlag("fillChecked");
  };
  const removeChecked = () =>{
    const newlist = list.filter((item)=>!item.isComplete);
    setList(newlist)
  }
  return (
    <div className="studentlist">
      <h1 className="tieude">List Student</h1>
      <Addlist addlist={addlist} />
      {getList(list, flag).map((value, index) => (
        <Student
          student={value}
          delelist={delelist}
          toggle_complete={toggle_complete}
          toggle_edit={toggle_edit}
          editId={editId}
          editList={editList}
        />
      ))}
      <Footer
        fillAll={fillAll}
        fillChecked={fillChecked}
        fillNoChecked={fillNoChecked}
        removeChecked={removeChecked}
      />
    </div>
  );
}
