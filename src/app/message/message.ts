export class Message {
  id: number;
  msg: string;
  createDate: Date;
  author: string;

  constructor(msg: string, author: string) {
    this.msg = msg;
    this.author = author;
    this.createDate = new Date();
    this.id = this.createDate.getMilliseconds();
  }
}
