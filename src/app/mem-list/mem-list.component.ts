import {Component, OnInit} from '@angular/core';
import {MemService} from "../Entities/Services/mem.service";
import {Mem} from "../Entities/mem";

@Component({
    selector: 'app-mem-list',
    templateUrl: './mem-list.component.html',
    styleUrls: ['./mem-list.component.scss'],
    providers: [MemService]
})
export class MemListComponent implements OnInit {

    memes: Mem[];


    constructor(private service:MemService) {
    }

    ngOnInit() {
        this.memes = this.service.loadMemes();
    }

}
