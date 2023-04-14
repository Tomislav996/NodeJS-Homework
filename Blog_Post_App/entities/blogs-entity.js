import {v4 as uuidV4} from "uuid"






class Blogpost {
    constructor(title, body, author, date, tags ){
        this.id = uuidV4();
        this.title = title;
        this.body = body;
        this.author = author;
        this.date = date;
        this.tags = tags;
    }
}



export default Blogpost;