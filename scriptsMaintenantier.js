var peer = new Peer();

var conn = null


peer.on('open', function(id) {
    console.log('My peer ID is: ' + id);
    document.getElementById("confBtn").addEventListener('click',()=>{
        const code = document.getElementById('code').value
        conn = peer.connect(code);
        conn.on('open', function() {
            // Receive messages
            conn.on('data', function(data) {
                console.log('Received', data);
            });
            // Send messages
            conn.send('Hello!');
        });
        console.log("Je lance l'appel")
        

        call = peer.call(conn.peer,
            new MediaStream()
            );
            call.on('stream', function(stream) {
                console.log("J'ai recu: ", stream)
            });
        
    })
    
    
  });
