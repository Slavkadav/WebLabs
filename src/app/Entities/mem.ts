export class Mem {
    type: MemType;
    imgUrl?:string;
    videoUrl?:string;
    textContent?:string;
    header:string;
}
export enum MemType{
    Image,
    Text,
    Video
}