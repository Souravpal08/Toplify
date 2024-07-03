"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";


export default function addtopic(){

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("")

    const router = useRouter();


    const handleSubmit =async (e) => {
        e.preventDefault()

        if(!title || !description) {
            alert("Please add title and description");
            return
        }

        try {
        const res = await fetch('http://localhost:3000/api/topics', {
               method: "POST", 
               headers:{
                "Content-type" : "application/json",
               },
               body:JSON.stringify({title, description}),
            });

            if (res.ok){
                router.push("/")
            } else {
               throw new Error("Failed to create a topic")
            }
            
        } catch (error) {
            console.log(error);
        }
    }
    
    return (
    <form   onSubmit={handleSubmit} className="flex flex-col gap-3">
        <input 
        onChange={(e) => setTitle(e.target.value)}
        value={title}
         className="border border-slate-500 px-6 py-3 " type="text" placeholder="Add a title"  />
         <input
          onChange={(e) => setDescription(e.target.value)}
          value={description}
         className="border border-slate-500 px-6 py-3 " type="text" placeholder=" Add a description"  />
         <button  type="submit" className="bg-rose-600 py-4 px-3 w-fit">
            Click here to add topic
         </button>
         
         </form>
    )
}