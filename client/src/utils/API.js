import axios from "axios";

export default {
  // Gets all books
  getTasks: function() {
    return axios.get("/api/task");
  },
  // Gets the book with the given id
  getTask: function(id) {
    return axios.get("/api/task/" + id);
  },
  // Deletes the book with the given id
  deleteTask: function(id) {
    return axios.delete("/api/task/" + id);
  },
  // Saves a book to the database
  saveTask: function(taskData) {
    return axios.post("/api/task", taskData);
  },
  signupUser: function(userData) {
    return axios.post("/api/user/signup", userData)
  },
  loginUser: function(userData) {
    return axios.post("/api/user/login", userData)
  }
};
