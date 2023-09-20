import { useNavigate, useParams } from "react-router-dom";
import useFetch from "../useFetch/useFetch";
import Tasks from "./AddTask/AddTask";
import deleteSign from "./../../assets/delete-sign.png";
import DisplayData from "../DisplayData/DisplayData";

const ListTasks = () => {
  const navigate = useNavigate();

  const handleClickDelete = (id) => {
    console.log(id);
    fetch("http://localhost:8000/tasks/" + id, {
      method: "DELETE",
    }).then(() => {
      console.log("task deleted");
      navigate(0);
    });
  };

  const { id } = useParams();
  const { data: tasks } = useFetch(`http://localhost:8000/lists/${id}/tasks`);

  return (
    <div>
      <Tasks />
      <div className="list">
        {tasks?.map((task) => (
          <DisplayData
            key={task.id}
            data={task}
            handleClikNavigate={() => navigate(`/lists/${id}/tasks`)}
            handleClickDelete={() => handleClickDelete(task.id)}
            sign={deleteSign}
          />
        ))}
      </div>
    </div>
  );
};

export default ListTasks;
