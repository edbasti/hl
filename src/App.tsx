import React, { useState, useEffect } from "react";
import CreateList from "./CreateList";
import Lists from "./Lists";
import "bootstrap/dist/css/bootstrap.min.css";
import { DiagnosticCategory } from "typescript";

const App = () => {
  const [alldata, setAlldata] = useState([]);
  const [singleData, setSingleData] = useState({
    title: "",
    author: "",
    category: "",
  });
  const [categories, setCategories] = useState();

  const getCategories = () => {
    fetch("http://localhost:3000/categories")
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        setCategories(result);
      })
      .catch(console.log);
  };

  const getLists = () => {
    fetch("http://localhost:3000/posts")
      .then((res) => res.json())
      .then((result) => {
        setAlldata(result);
      })
      .catch(console.log);
    getCategories();
  };

  const handleChange = (e: any) => {
    let title = singleData.title;
    let author = singleData.author;
    let category = singleData.category;

    if (e.target.name === "title") {
      title = e.target.value;
    }

    if (e.target.name === "author") {
      author = e.target.value;
    }

    if (e.target.name === "category") {
      category = e.target.value;
    }

    setSingleData({
      title: title,
      author: author,
      category: category,
    });
  };

  const createList = () => {
    fetch("http://localhost:3000/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(singleData),
    }).then(() =>
      setSingleData({
        title: "",
        author: "",
        category: "",
      })
    );
  };

  const getList = (id: string) => {
    console.log(id);
    setSingleData({
      title: "Loading...",
      author: "Loading...",
      category: "Loading...",
    });
    fetch("http://localhost:3000/posts/" + id)
      .then((res) => res.json())
      .then((result) => {
        setSingleData({
          title: result.title,
          author: result.author ? result.author : "",
          category: result.category,
        });
      });
  };

  const updateList = (id: string) => {
    fetch("http://localhost:3000/posts/" + id, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(singleData),
    })
      .then((res) => res.json())
      .then((result) => {
        setSingleData({ title: "", author: "", category: "" });
        getLists();
      });
  };

  const deleteList = (e: any, id: string) => {
    fetch("http://localhost:3000/posts/" + id, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((result) => {
        setSingleData({ title: "", author: "", category: "" });
        getLists();
      });
  };

  useEffect(() => {
    getCategories();
  }, []);

  return (
    <div className="container">
      <span className="title-bar">
        <button type="button" className="btn btn-primary" onClick={getLists}>
          Get Lists
        </button>
        <CreateList
          singleData={singleData}
          createList={createList}
          handleChange={handleChange}
        />
      </span>
      <br />
      <Lists
        allData={alldata}
        singleData={singleData}
        getList={getList}
        updateList={updateList}
        deleteList={deleteList}
        handleChange={handleChange}
        categories={categories}
      />
    </div>
  );
};

export default App;
