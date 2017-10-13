import {Component, Input, OnInit} from '@angular/core';
import {Mem} from "../../Entities/mem";

@Component({
    selector: 'app-mem-item',
    templateUrl: './mem-item.component.html',
    styleUrls: ['./mem-item.component.scss']
})
export class MemItemComponent implements OnInit {

    @Input()
    mem: Mem;

    constructor() {
    }

    ngOnInit() {
    }

}
