import { Component, Input, ɵConsole } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
    selector: 'app-task',
    templateUrl: './task.component.html',
    styleUrls: ['./task.component.css']
})

class TaskComponent{
    text: string;
    names = [];

    constructor(){
    }

    textInput(): void{
        this.text = (event.target as HTMLInputElement).value;
    }

    addName(): void{
        console.log(this.text);
        this.names.push(this.text);
        console.log(this.names);
    }

    deleteTask(el: string): void{
        const index = this.names.indexOf(el);

        this.names.splice(index);
    }
}

export { TaskComponent };
