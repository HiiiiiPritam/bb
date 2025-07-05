import mongoose from "mongoose";

export async function dbConnect(){
  try {
    
    let conn = await mongoose.connect("mongodb+srv://ratsdust4226:JruTpzG6GNqhW7N0@cluster0.8suy37d.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
    return conn
  } catch (error) {
    throw new Error(e)
  }
}