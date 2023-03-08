import { format } from "date-fns";

export function TodoRow({ todo, refreshData }) {
  const deleteTodo = (todoItem) => {
    fetch("api/remove-item", {
      method: "POST",
      body: JSON.stringify(todoItem),
    }).then(() => {
      refreshData();
    });
  };

  return (
    <tr>
      <td className="whitespace-nowrap px-4 py-2 text-slate-700">
        {todo.description}
      </td>
      <td className="whitespace-nowrap px-4 py-2 text-slate-700">
        <PriorityPill priority={todo.priority} />
      </td>
      <td className="whitespace-nowrap px-4 py-2 text-slate-700 flex flex-row justify-between">
        <span>{format(new Date(todo.dueDate), "dd/MM/yyyy")}</span>
        <span onClick={() => deleteTodo(todo)} className="cursor-pointer">
          🗑
        </span>
      </td>
    </tr>
  );
}

function PriorityPill({ priority }) {
  const bgColors = [
    "bg-cyan-300",
    "bg-teal-300",
    "bg-lime-300",
    "bg-orange-300",
    "bg-red-300",
  ];
  const textColors = [
    "text-cyan-800",
    "text-teal-800",
    "text-lime-800",
    "text-orange-800",
    "text-red-800",
  ];

  return (
    <div
      className={`rounded-xl w-fit px-4 ${bgColors[priority - 1]} ${
        textColors[priority - 1]
      }`}
    >
      {priority}
    </div>
  );
}

