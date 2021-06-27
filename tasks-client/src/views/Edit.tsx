import React from "react";
import { useQuery } from "react-query";
import Loader from "../components/ui/Loader";
import TaskList from "../components/TaskList";
import { FetchTaskData, fetchTasks } from "../data/fetchTasks";
import { useAuth } from "../store/auth";

const Edit: React.FC = () => {
  const idToken = useAuth((state) => state.idToken);

  const { isLoading, isError, data, error } = useQuery<FetchTaskData, Error>(
    ["tasks", { page: 1, limit: 10, idToken }],
    (context) =>
      fetchTasks(context.queryKey[0] as string, {
        page: 1 as number,
        limit: 10 as number,
        idToken,
      })
  );
  const taskList = data?.tasks ? <TaskList tasks={data.tasks} /> : undefined;

  return (
    <>
      <h1 className="title is-3">Your Task List</h1>
      <div className="buttons is-centered">
        <button className="button is-info">Create Task</button>
      </div>

      {isLoading && <Loader radius={200} />}
      {isError && <p>{error?.message}</p>}
      {taskList}
    </>
  );
};

export default Edit;
