import "./Todo.css";
import React, { useState, useEffect } from 'react';
import { getFirestore, collection, addDoc, getDocs } from "firebase/firestore";
import { db } from "./Firebase";

const Todo = () => {
    const [todo, setTodo] = useState("");
    const [todos, setTodos] = useState([]);

    const addTodo = async (e) => {
        e.preventDefault();

        try {
            const docRef = await addDoc(collection(db, "todos"), {
                todo: todo,
            });
            console.log("Document written with ID: ", docRef.id);
        } catch (e) {
            console.error("Error adding document: ", e);
        }
    }
    
    const fetchTodos = async () => {
        try {
            const querySnapshot = await getDocs(collection(db, "todos"));
            const newData = querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
            setTodos(newData);
        } catch (error) {
            console.error("Error fetching todos: ", error);
        }
    }

    useEffect(() => {
        fetchTodos();
    }, []);

    return (
      <section className="todo-container">
      <div className="todo">
          <h1 className="header">
              Todo-App
          </h1>

          <div>

              <div>
                  <input
                      type="text"
                      placeholder="What do you have to do today?"
                      onChange={(e)=>setTodo(e.target.value)}
                  />
              </div>

              <div className="btn-container">
                  <button
                      type="submit"
                      className="btn"
                      onClick={addTodo}
                  >
                      Submit
                  </button>
              </div>

          </div>

          <div className="todo-content">
              {
                  todos?.map((todo,i)=>(
                      <p key={i}>
                          {todo.todo}
                      </p>
                  ))
              }
          </div>
      </div>
  </section>
    )
}

export default Todo;
