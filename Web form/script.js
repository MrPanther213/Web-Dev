

const express = require('express');

const app = express();

app.use(express.json());

let students = [];

app.get('/students', (req, res) => {
  res.json(students);
  console.log('GET /students');
  console.log('Number of students:', students.length);
  console.log('Students:', students);
  console.log('--------------------');
});

app.post('/students', (req, res) => {
    const newStudent = req.body;
    students.push(newStudent);
    res.status(201).json(newStudent);
    console.log('POST /students');
    console.log('New student:', newStudent);
    console.log('Number of students:', students.length);
    console.log('--------------------');
});

app.put('/students/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const updatedStudent = req.body;
    const index = students.findIndex(student => student.id === id);
    if (index !== -1) {
        students[index] = updatedStudent;
        res.json(updatedStudent);
        console.log('PUT /students/:id');
        console.log('Updated student:', updatedStudent);
        console.log('Number of students:', students.length);
        console.log('--------------------');
    } else {
        res.status(404).json({ error: 'Student not found' });}
     });

app.delete('/students/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const index = students.findIndex(student => student.id === id);
    if (index !== -1) {
        students.splice(index, 1);
        res.status(204).end();
        console.log('DELETE /students/:id');
        console.log('Deleted student ID:', id);
        console.log('Number of students:', students.length);
        console.log('--------------------');
    } else {
        res.status(404).json({ error: 'Student not found' });
    }
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

