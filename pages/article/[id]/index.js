import { useRouter } from "next/router";

function article()
{
    const router = useRouter();
    const {id} = router.query;
    
    return(
        <>
           <h2>This is Item {id}.</h2>
        </>
    )
}
export default article