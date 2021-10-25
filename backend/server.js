const app = require('./config/express');

const listener = app.listen(8080, () => {
    console.log("Server is running on port " + listener.address().port);
});