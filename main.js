// import {$,jQuery} from 'jquery';
// // export for others scripts to use
// window.$ = $;
// window.jQuery = jQuery;
import * as a from "https://ajax.googleapis.com/ajax/libs/jquery/3.7.0/jquery.min.js";

//let $ = require("https://ajax.googleapis.com/ajax/libs/jquery/3.7.0/jquery.min.js");

function log(msg) {
  $("#log").val($("#log").val() + msg + "\n");
}

export function myFunc() {
  let socket = new WebSocket("wss://cgsg.onrender.com");
  log("my start");
  socket.onopen = function (e) {
    log("[open] Connection established");
    log("Sending to server");
    socket.send("My name is VG4");
  };
 
  socket.onmessage = function (event) {
    log(`[message] Data received from server: ${event.data}`);
  };
  
  socket.onclose = function (event) {
    if (event.wasClean) {
      log(
        `[close] Connection closed cleanly, code=${event.code} reason=${event.reason}`
      );
    } else {
      // e.g. server process killed or network down
      // event.code is usually 1006 in this case
      log("[close] Connection died");
    }
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
myFunc();