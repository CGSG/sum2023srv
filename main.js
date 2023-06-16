import * as ___ from "https://ajax.googleapis.com/ajax/libs/jquery/3.7.0/jquery.min.js";

function log(msg) {
  $("#log").val($("#log").val() + msg + "\n");
}

export function connect() {
  let socket = new WebSocket("wss://cgsg.onrender.com");
  log("my start");
  socket.onopen = (e) => {
    log("[open] Connection established");
    log("Sending to server");
    socket.send("My name is VG4");
  };
 
  socket.onmessage = (event) => {
    log(`[message] Data received from server: ${event.data}`);
  };
  
  socket.onclose = (event) => {
    if (event.wasClean) {
      log(`[close] Connection closed cleanly, code=${event.code} reason=${event.reason}`);
    } else {
      log("[close] Connection died");
    }
    log("[close]  Try to reconnect");
    setTimeout(() => {
      connect();
    }, 1000);
  };
 
  socket.onerror = function (error) {
    log(`[error]`);
  };
  log("ABCDEF");
  
  $("#send").on("click", () => {
    let txt = $("#msg").val();
    socket.send(txt);
  });

}
connect();