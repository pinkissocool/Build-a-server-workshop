const express = require('express');

const app = express();
app.use(express.json());
app.get('/', (req,res)=>{
    res.send('Hello there');
});

const courses = [
    {id: 1, name:'Web Development'},
    {id:2, name: 'IT'},
    {id:3, name: 'Cybersecurity'},
];

//http GET requests route
app.get('/api/courses', (req,res)=>{
    res.send(courses);
});

//request course by id
app.get('/api/courses/:id', (req, res)=>{
    const course = courses.find(c=> c.id === parseInt(req.params.id));
    if (!course){
        res.status(404).send("The course with the given ID was not found");
        return
    }
        res.send(course);
})  

//HTTP POST Requests
app.post('/api/courses', (req,res) => {
    // you write the if code here
    //add an if statement so that the name of the course you post is .min(3) characters 
    if (req.body.name.length > 3){
        const course ={
            //we assign an ID and a name property
            id: courses.length +1,
            name:req.body.name
        }
        courses.push(course);
        res.send(course);
    }
    else{
        res.status(404).send("The course with the given name is shorter than 4 characters");
        return
    }
            //YOU WRITE THE NEXT LINES OF code
          //next step: push it to the array
            //next step: the server should return the new resource to the client in the body of the response
    
      
});

//HTTP PUT Request
app.put('/api/courses/:id', (req,res)=>{
    const course = courses.find(c=> c.id === parseInt(req.params.id));
    if (!course){
        res.status(404).send("The course with the given ID was not found");
        return
    }
    else{
        course.name = req.body.name;
        res.send(course);
    }
    //Write the code in order to look up the course, if not existing return a 404
            //otherwise 
                    //update the course
                    //return the updated course
        
});

//HTTP Delete
app.delete('/api/courses/:id', (req,res)=>{
    //code the following logic
    //look up the course by id
        //return 404 if does not exist
        //delete the course by index HINT: use the indexOf() and splice() methods
        // return the response to the client the course that was deleted
        const course = courses.find(c=> c.id === parseInt(req.params.id));
        if (!course){
            res.status(404).send("The course with the given ID was not found");
            return
        }
        else{
            const index = courses.indexOf(course);
            res.send(courses.splice(index, 1));
        }

});

    
    
app.listen(3000, () => {
    console.log('Listening on port 3000 ...')
})