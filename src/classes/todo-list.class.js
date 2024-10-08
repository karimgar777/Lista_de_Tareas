import { Todo } from "./todo.class";

export class TodoList{
    constructor(){
        //this.todos = [];
        this.cargarLocalStorage();
    }
    nuevoTodo(todo){
        this.todos.push(todo);
        this.guardarLocalStorage();
        console.log('Se Creo')
    }
    eliminarTodo(id){
        this.todos = this.todos.filter(todo => todo.id !=id);
        this.guardarLocalStorage();
        console.log('Se Borro');
    }
    marcarCompletado(id){
        for( const todo of this.todos){
            if(todo.id==id){
                todo.completado = !todo.completado;
                this.guardarLocalStorage();
                console.log('Se Completo');
                break;
            }
        }
    }
    eliminarCompletados(){
        this.todos = this.todos.filter(todo => !todo.completado);
        this.guardarLocalStorage();
        console.log('Se Borro Completado')
    }
    guardarLocalStorage(){
        localStorage.setItem('todo', JSON.stringify(this.todos));
        console.log('Guardado en localStorage:', JSON.stringify(this.todos));
    }
    cargarLocalStorage(){
        this.todos = (localStorage.getItem('todo'))
                    ? JSON.parse(localStorage.getItem('todo'))
                    : [];
        this.todos = this.todos.map(Todo.fromJson);
        console.log('Se Cargo')
    }
}