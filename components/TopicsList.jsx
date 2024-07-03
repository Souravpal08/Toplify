import RemoveBtn from "./RemoveBtn";
import Link from "next/link";
import {HiPencilAlt} from "react-icons/hi";


const getTopics = async() => {
    try{
    const res = await fetch('http://localhost:3000/api/topics',{
        cache:"no-store"
    } );
   if(!res.ok){
      throw new Error("Failed to fetch topics");
   }
   return res.json()
    } catch (error){
        console.log("Error topics are loading:", error);

    }
}


export default async function TopicList(){

 const {topics} = await getTopics ()


    return(
        <>
       {topics.map( t =>(

        <div className="p-4 border border-slate-400 justify-between flex my-3 ">
            <div>
               <h2 className="font-bold text-4xl">{t.title}</h2> 
               <div> {t.description} </div>
            </div>

            <div className="flex gap-7">
               <RemoveBtn id={t._id} />
               <Link href={`/editTopic/${t._id}}`}>
               < HiPencilAlt size={26} className="text-blue-800 my-5"/>
               </Link>
               
            </div>
        </div>
        ))}
        </>
    )
}