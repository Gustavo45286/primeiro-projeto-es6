console.log("Hello world");

class List{
    constructor(){
        this.data = [];
    }

    add(value){
        this.data.push(value);
        this.print;
        console.log(this.data);
    }

    Pop(value){
        this.data.pop();
        this.print;
        console.log(this.data);
    }

    print(){
        console.log(this.data);
    }
}


class TodoList extends List{
   

}

const minhaLista = new TodoList;

document.getElementById("novoTodo").onclick = function(){
    minhaLista.add("abc");
};

document.getElementById("popTodo").onclick = function(){
    minhaLista.Pop();
};