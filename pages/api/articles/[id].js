import { articles } from "../../../data";
// for single item
export default function handler({query : {id}}, res)
{
    const filterd = articles.filter((article) => article.id === id)
    // checking condition
    if(filterd.length > 0)
    {
        res.status(200).json(filterd[0])
    }else{
        res.status(404).json({message : `artical with that id ${id} is not found`})
    }
}