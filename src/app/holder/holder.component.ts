import { Component } from '@angular/core';

@Component({
    selector: 'app-holder',
    templateUrl: './holder.component.html',
    styleUrls: ['./holder.component.css']
})

class HolderComponent{
    title = 'Parent says hi to child';
    
}

export { HolderComponent };
