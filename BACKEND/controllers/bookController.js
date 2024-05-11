import Book from "../models/bookModel.js";

export const addBook = async(req,res)=>{
    const {name,price,category,image,title} = req.body
    try {
        const book = await Book.create({name,price,category,image,title})
        res.status(200).json({ message: "New book created successfully",book });
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
}
export const getBook = async(req, res) => {
    try {
        const book = await Book.find();
        res.status(200).json( book );
    } catch (error) {
        console.log("Error: ", error);
        res.status(500).json(error);
    }
};