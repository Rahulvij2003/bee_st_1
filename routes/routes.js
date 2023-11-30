
const router = require("express").Router();
const schema = require("../model/model");



router.get("/", async(req,res) => {
    let books;
    try{
        books = await schema.find();
        res.status(200).json({books});
    }
    catch(error){
        console.log("error");
    }

    if (!books) {
        return res.status(404).json({ message: "No products found" });
      }
      return res.status(200).json({ books });
})

router.post('/add', async(req, res, next) => {
    try{
        const data = req.body;
        const newbook = new schema(data);
        await newbook.save().then(() => {
            res.status(200).json({ message: "added successfully" });
        })
    }
    catch(error){
        console.log("not added");
    }
    next();

});




router.get("/getbooks/:id", async(req,res) => {
    let books;
    const id = req.params.id;
    try{
        books = await schema.findById(id);
        res.status(200).json({books});
        
    }
    catch(error){
        console.log("error");
    }
})



router.put("/updatebook/:id", async(req, res) => {
    const id = req.params.id;
    const {title, author, genre, publication_year, ISBN} = req.body;
    let books;
    try{
        books = await schema.findByIdAndUpdate(id, {
            title,
            author,
            genre,
            publication_year,
            ISBN

        })
        await books.save().then(() => res.send(200).json({ message: "updated successfully" }));
    }
    catch(error){
        console.log("error");
    }

})




router.delete("/deletebook/:id", async(req,res) => {
    const id = req.params.id;
    let books;
    try{
        books = await schema.findByIdAndRemove(id);
        l
    }
    catch(error){
        console.log("error");
    }

    if(!books){
        res.status(404).json({ message: "unable to delete this id"});
    }

    return res.status(200).json({ message: "product sucessfully deleted"}); 
})


router.get("/search", async(req, res) => {
    let books;
    try{
        let que = req.query.q;
        books = await schema.find({
            name:{$regex: new RegExp(queri,'i')}
        })
    }
    catch(error){
        console.log("error");
    }

    if(!books){
        res.status(404).json({ message: "no books found"});
    }

    return res.status(200).json({ message: "product found"});

})



module.exports = router;



