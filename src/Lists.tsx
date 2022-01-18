import React from "react";
import UpdateList from "./UpdateList";
import DeleteList from "./DeleteList";

interface ListsProps {
  getList: (elementId: string) => void;
  updateList: (elementId: string) => void;
  handleChange: (e?: any) => void;
  singleData: any;
  allData: any;
  deleteList: (e: any, elementId: string) => void;
  categories: any;
}

const Lists = ({
  allData,
  singleData,
  getList,
  updateList,
  handleChange,
  deleteList,
  categories,
}: ListsProps) => {
  const rows: Array<any> = [];
  console.log(categories);
  allData.forEach((element: any) => {
    const category = categories?.filter(
      (item: any) => item.id === element.category
    );
    console.log(category?.title);
    rows.push(
      <tr key={element.id}>
        <td>{element.id}</td>
        <td>{element.title}</td>
        <td>{element.author}</td>
        <td>{category?.title}</td>
        <td>
          <UpdateList
            elementId={element.id}
            singleData={singleData}
            getList={getList}
            handleChange={handleChange}
            categories={categories}
            updateList={updateList}
          ></UpdateList>
        </td>
        <td>
          <DeleteList
            elementId={element.id}
            singleData={singleData}
            getList={getList}
            deleteList={deleteList}
          ></DeleteList>
        </td>
      </tr>
    );
  });
  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th>#</th>
          <th>Title</th>
          <th>Author</th>
          <th>Category</th>
          <th>Update</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
};

export default Lists;
