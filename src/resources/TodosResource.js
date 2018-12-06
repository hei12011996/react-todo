export default {
  getAll: () => fetch("http://localhost:8080/api/todos/search/statusOfTodos?status=completed,active", {method: 'GET', mode: 'cors'}),
  getByStatus: (status) => fetch("http://localhost:8080/api/todos/search/statusOfTodos?status=" + status, {method: 'GET', mode: 'cors'}),
  updateStatus: (id, status) => fetch("http://localhost:8080/api/todos/" + id, {
                                  method: 'PATCH', 
                                  headers: new Headers({
                                    'Content-Type': 'application/json'
                                  }),
                                  mode: 'cors',
                                  body: JSON.stringify({status: status})
                                }),
  add: (todo) =>  fetch("http://localhost:8080/api/todos", {
                    method: 'POST', 
                    headers: new Headers({
                        'Content-Type': 'application/json'
                    }),
                    mode: 'cors',
                    body: JSON.stringify(todo)
                  })

}
