const express = require('express');
const app = express();
const portNumber = 9090;
app.listen(portNumber, () => {
    console.log('Deloitte')
});
app.get('/',(request,response) => {
    console.log('Welcome')
    response.send('Welcome to Deloitte');
});
app.get('/Home',(request,response) => {
    console.log('home')
    response.send('Welcome to Home Page');
});
app.get('/Mail',(request,response) => {
    console.log('mail')
    response.send('Enter Mail');
});
app.get('/Feedback',(request,response) => {
    console.log('feedback')
    response.send('Give a feedback');
});