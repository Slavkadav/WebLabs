import {Injectable} from '@angular/core';
import {Mem, MemType} from "../mem";

@Injectable()
export class MemService {

    memes: Mem[] = [
        {
            type: MemType.Text,
            textContent:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eros arcu, rutrum elementum augue eget, iaculis tincidunt urna. Donec ac nulla quis urna luctus ultrices. Proin vel diam maximus sapien aliquam volutpat a nec justo. Nullam pulvinar justo vitae orci dignissim, nec placerat est sodales. Proin sapien augue, semper elementum fringilla a, viverra in quam. Nam a ultrices eros. Duis id neque sapien. Vivamus gravida dictum sapien ac placerat. Integer id congue mauris. Suspendisse at libero ut arcu posuere molestie vitae posuere diam. Suspendisse et sagittis libero.",
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
