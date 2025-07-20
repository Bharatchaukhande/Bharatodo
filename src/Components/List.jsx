import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addtodo, edittodo, cleartodo } from "../Slices/TodoSLice";
import { removetodo } from "../Slices/TodoSLice";
import { MdDelete } from "react-icons/md";
import { MdEdit } from "react-icons/md";
import { FaRegSave } from "react-icons/fa";

const List = () => {
  const [list, setList] = useState("");
  const [editingIndex, setEditingIndex] = useState(null);
  const [editedValue, setEditedValue] = useState("");

  const todo = useSelector((store) => store.todo.lists);

  const dispatch = useDispatch();

  const handleChange = (e) => {
    setList(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (list !== "") {
      dispatch(addtodo(list));
      setList("");
    }
  };

  const handleEditClick = (value, index) => {
    setEditingIndex(index);
    setEditedValue(value);
  };
  const handleSave = (index) => {
    if (editedValue.trim()) {
      dispatch(edittodo({ index, newValue: editedValue }));
      setEditingIndex(null);
    }
  };
  return (
    <>
      <div style={{ height: "100vh", width: "100%" }}>
        <div
          style={{
            height: "100px",
            width: "100%",
            display: "flex",
            justifyContent: "center",
            margin: "10px",
          }}
        >
          <div
            style={{
              height: "100px",
              width: "60vw",
              boxShadow: "1px 4px 10px rgba(0, 0, 0, 0.56)",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            className="main-container"
          >
            <form
              onSubmit={handleSubmit}
              style={{
                height: "fit-content",
                width: "100%",
                display: "flex",
                justifyContent: "center",
                gap: "10px",
              }}
              action=""
            >
              <input
                style={{
                  width: "40vw",
                  height: "30px",
                  borderRadius: "10px",
                  fontSize: "20px",
                  padding: "4px",
                  border: "1px solid black",
                  outline: "none",
                }}
                type="text"
                placeholder="enter your todo"
                name="todo"
                value={list}
                onChange={(e) => handleChange(e)}
                className="input"
              />
              <input
                type="submit"
                value="Add Todo"
                style={{
                  borderRadius: "10px",
                  color: "white",
                  border: "none",
                  padding: "9px 18px",
                  height: "40px",
                  fontSize: "20px",
                  boxShadow: "0px 4px 20px rgba(0,0,0,0.2)",
                }}
                className="btn"
              />
              {todo.length !== 0 ? (
                <button
                  onClick={() => dispatch(cleartodo())}
                  style={{
                    borderRadius: "10px",
                    color: "white",
                    border: "none",
                    padding: "9px 18px",
                    height: "40px",
                    fontSize: "20px",
                    boxShadow: "0px 4px 20px rgba(0,0,0,0.2)",
                  }}
                  className="btn"
                >
                  Clear All
                </button>
              ) : null}
            </form>
          </div>
        </div>

        <div
          style={{
            listStyle: "none",
            width: "fit-content",
            margin: "auto",
            paddingTop: "17px",
          }}
        >
          {todo.map((value, index) => (
            <div
              key={index}
              style={{
                height: "50px",
                width: "fit-content",
                display: "flex",
                alignItems: "center",
                boxShadow: "1px 4px 5px rgba(0, 0, 0, 0.19)",
                margin: "10px",
              }}
            >
              <span className="no" style={{ fontSize: "25px", padding: "0px 10px" }}>
                {index + 1}.
              </span>{" "}
              {editingIndex === index ? (
                <input
                  value={editedValue}
                  onChange={(e) => setEditedValue(e.target.value)}
                  style={{
                    fontSize: "20px",
                    padding: "4px",
                    width: "40vw",
                    borderRadius: "5px",
                    border: "1px solid gray",
                  }}
                  className="no"
                />
              ) : (
                <li
                  style={{
                    margin: "10px",
                    fontSize: "25px",
                    color: "black",
                    width: "45vw",
                  }}
                  className="no"
                >
                  {value}
                </li>
              )}
              {/* Edit or Save Icon */}
              {editingIndex === index ? (
                <FaRegSave
                  onClick={() => handleSave(index)}
                  style={{
                    width: "25px",
                    height: "30px",
                    color: "black",
                    cursor: "pointer",
                    margin: "0px 8px",
                    borderRadius: "5px",
                    padding: "4px",
                  }}
                  className="icons"
                />
              ) : (
                <MdEdit
                  onClick={() => handleEditClick(value, index)}
                  style={{
                    width: "25px",
                    height: "30px",
                    cursor: "pointer",
                    margin: "0px 8px",
                  }}
                  className="edit icons"
                />
              )}
              <MdDelete
                onClick={() => dispatch(removetodo(index))}
                style={{ width: "30px", height: "30px", margin: "0px 10px" }}
                className="delete icons"
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default List;
