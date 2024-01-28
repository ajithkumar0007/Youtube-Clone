const express = require('express');
const axios = require('axios');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    console.log(req.url);
    res.send("server started at 3000")
});

app.get('/api/search/:id', async (req, res) => {
    console.log('new request')
    try {
        const data = await axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=${req.params.id}&type=video&key=AIzaSyA81RTKw_9j8rtf_QicD7R7f8XNV_HPGY0`);
        console.log("status code", data.status)

        if (data.status === 200) {
            console.log("response sent back")
            res.json({
                data: data.data,
                message: "success",
                status: 200
            });
        } else {
            res.status(data.status).json({
                message: "Request Failed",
                status: data.status
            });
        }
    } catch (err) {
        console.log("err", err)
        res.status(500).json({
            message: "Server Failed",
            status: 500
        });
    }
})


// app.get('/api/search/:term', async (req, res) => {

//     console.log(req.params.term)
//     console.log(req.query.sort);

//     const query = {};

//     if (req.params.sort) {
//         query.sort = req.params.sort;
//     }

//     if (req.params.color) {
//         query.color = req.params.color;
//     }

//     try {


//         const data = await Post.find(query);


//         res.json({
//             data,
//             message: 'success',
//             status: 200
//         });
//     } catch (err) {
//         res.status(500).json({
//             message: "server failed",
//             status: 500,
//         })
//     }

// })

// https:amazon.com/s?search=gaming%20mouse&brand=razer&handOrientation=left

// app.post('/')

// app.post('/api/user/post/123'); create a post on database with id 123
// app.get('/post/120'); get the post details on database with id 120
// app.put('/post/123'); update the post details on database with id 123
// app.delete('/post/123'); delete the post details on database with id 123



app.listen(3000, console.log("server started "))

