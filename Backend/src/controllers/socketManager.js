import { connect, connections } from "mongoose";
import { Server } from "socket.io";


let connection = {} // Create an empty object to store the connection
let massage = {} // Create an empty object to store the message
let timeonline = {} // Create an empty object to store the timeonline


// Function to connect to socket
export const connectToSocket = (server) => {

    // Create a new instance of socket.io by passing the server object
    const io = new Server(server, {
        origin: "*",
        methode: ["GET", "POST"],
        allowedHeaders: ["*"],
        creadentials: true
    });

   
    // Create a connection event
     io.on("connection", (socket) => {

       
        socket.on("join-call",(path) => {

            if(connection[path] === undefined) {
                connection[path] == []
            }

            connection[path].push(socket.id);

            timeonline[socket.id] = new Date();

            for(let a = 0; a < connection[path].length; a++) {
                io.to(connection[path][a]).emit("user-joined", connection[path]);
            }

            if(massage[path] !== undefined) {
                for(let a = 0; a < massage[path].length; a++) {
                    io.to(socket.id).emit("chat-message", massage[path][a][data], massage[path][a][sender], massage[path][a]['socket-id-sender']);
                }
            }


        });

        socket.on("signal", (toId, massage) => {
            io.to(toId).emit("signal", socket.id, massage);
        }) 

        socket.on("chart-message", (data, sender) => {
            const [machingRoom, found] = Object.entries(connections)
            .reduce(([room, isFound], [roomKey, roomValue]) => {
                if(found !== undefined) {
                    return [roomKey, true];
                }

                

                return [room, isFound];
            }, ["" , false])

            if(found === true){
                if(messages[machingRoom]=== undefined) {
                    messages[machingRoom] = [];
                }

                massages[matchingRoom].push({'sender': sender, 'data': data, 'socket-id-sender': socket.id});
                console.log("massage", key, ":", sender,data);

                connsection[machingRoom].forEach(socketId => {
                    io.to(elem).emit("chat-message", data, sender, socket.id);
                });
            }
        });


        socket.on("disconnect", () => {
            const diffTime = Marh.abs(timeonline[socket.id] - new Date());
            var key

            for(const [k,v] of json.parse(json.stringify(Object.entries(connections)))) {
                if(v[a] === socket.id) {
                    key = k;


                    for(let a = 0; a < connections[key].length; a++) {
                        io.to(connections[key][a]).emit("user-leave", socket.id);
                    }

                    var index = connections[key].indexOf(socket.id);

                    connections[key].splice(index, 1);

                    if(connections[key].length === 0) {
                        delete connections[key];
                    }
                }
            }
        });

    });

   

    return io;
}
