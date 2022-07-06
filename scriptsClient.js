//   canva


var ctx = document.getElementById("myCanvas").getContext("2d");
ctx.fillStyle = "#FF0000";
ctx.fillRect(0, 0, 150, 75);








// peer
var peer = new Peer();

var conn = null

peer.on('open', function(id) {
	console.log('My peer ID is: ' + id);
    
  });

  peer.on('call', function(call) {
    // Answer the call, providing our mediaStream
    console.log("Je reçoit l'appel")
    call.answer(new MediaStream());
    call.on('stream', function(stream) {
        console.log("J'ai recu: ")
      });
    console.log("J'ai accepté l'appel")
  });

  peer.on('connection', function(conn) { 
    console.log("je suis connecté")
    conn.on('open', function() {
      // Receive messages
      conn.on('data', function(data) {
        console.log('Received', data);
        // Call a peer, providing our mediaStream
        
      });
  
      // Send messages
      conn.send('ça vas');
    });
  })
