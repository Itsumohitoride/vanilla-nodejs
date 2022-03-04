// controller.js
// Logic behind the functionalities
const data = require("./data");

class Controller {
    // getting all todos
    async getTodos() {
        // return all todos
        return new Promise((resolve, _) => resolve(data));
    }

    // getting a single todo
    async getTodo(id) {
        return new Promise((resolve, rejects) => {
            // get the todo
            let todo = data.find((todo) => todo.id === parseInt(id));
            if(todo) {
                // return the todo
                resolve(todo);
            }else {
                // return an error
                rejects(`Todo with id ${id} not found`);
            }
        });
    }

    // creating a todo
    async createTodo(todo) {
        return new Promise((resolve, _) => {
            // create a todo, with random id and data sent
            let newTodo = {
                id: Math.floor(4 + Math.random() * 10),
                ...todo,
            };

            //return the new created todo
            resolve(newTodo);
        });
    }

    async updateTodo(id) {
        return new Promise((resolve, reject) => {
            // get the todo.
            let todo = data.find((todo) => todo.id === parseInt(id));
            // if no todo, resturn an error
            if(!todo) {
                reject(`No todo with id ${id} found`);
            }
            // else, update it by setting completed to true
            todo["completed"] = true;
            // return the update todo
            resolve(todo);
        });
    }

    async deleteTodo(id) {
        return new Promise((resolve, reject) => {
            // get the todo
            let todo = data.find((todo) => todo.id === parseInt(id));
            // if no todo, return an error
            if(!todo) {
                reject(`No todo with id ${id} found`);
            }
            // else, return a success message
            resolve(`Todo delted successfully`);
        });
    }
}

module.exports = Controller;

