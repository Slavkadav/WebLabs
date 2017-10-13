import {Injectable} from '@angular/core';
import {Mem, MemType} from "../mem";

@Injectable()
export class MemService {

    memes: Mem[] = [
        {
            type: MemType.Text,
            textContent:"Lorem ipsum dolores sit amet",
            header:"My first Mem"
        },
        {
            type:MemType.Image,
            imgUrl:"https://i2.cdn.cnn.com/cnnnext/dam/assets/160927210830-tk-ah0927-exlarge-169.jpg",
            header: "I love Pepe"
        },
        {
            type:MemType.Video,
            videoUrl:"https://i.4cdn.org/wsg/1507759116440.webm",
            header:"WEBM"
        }

    ];


    constructor() {
    }

    loadMemes() {
        return this.memes;
    }

}
