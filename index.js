const express=require('express');
const bodyParser=require('body-parser');

const app=express();

const PORT=process.env.PORT || 3000;

app.use(bodyParser.json());


app.post(`/bfhl`,(req,res)=>{

    try{
        const { data }=req.body;
        const user={
            user_id:"john_doe_17091999",
            email:"john@xyz.com",
            roll_number:"ABCD123"
        };

    const even=data.filter(num => parseInt(num)%2===0);
    const odd=data.filter(num => parseInt(num)%2!==0);
    const alphabets=data.filter(char => isNaN(char));

    const uppercase=alphabets.map(char => char.toUpperCase());

    const response = {
        is_success:true,
        user_id:user.user_id,
        email:user.email,
        roll_number:user.roll_number,
        even,
        odd,
        alphabets: uppercase

    };

    res.json (response);

    }catch(error){
        console.error(error);
        res.status(500).json({error:'Internal server error'});
    }
});

app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`);
});