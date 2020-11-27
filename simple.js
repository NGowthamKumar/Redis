const redis = require('redis');

const REDIS_PORT = 6379;

const client = redis.createClient(REDIS_PORT);

function fetch(name){
    const Name = name;
    client.get(Name, (err, data) => {
        if(err) console.log(err);
        else if (data == null){
            const age = 21;
            setTimeout(() => {
                client.set(Name, age);
                console.log('Saved name and age for first time')
            },5000);
            
        }
        else{
        console.log('Already data was on the redis server: ', data); }
    });
}

fetch('gowtham');

// Run the file twice with the Redis server on.
// on the first run, the output will be 'Saved name and age for first time' after 5 seconds.
// on the second run, the output will be 'Already data was on the redis server: 21' without any delay.
