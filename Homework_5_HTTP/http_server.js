import http from "http";

const server = http.createServer((request,response)=>{
    const url = request.url;

    if(url === "/"){
        response.setHeader("Content-type", "text/html");
        response.write("<h1>Hello this is my first server</h1>");
        response.end();
    }
    if(url === "/student"){
        response.setHeader("Content-type","text/html");
        response.write("<h1>Student fullname:Tomislav Trpeski, Academy:Web development, Subject:NodeJS-Basic")
        response.end();
    }
})

server.listen(3000, () =>{
    console.log("Server is active...")
})