import { useLoaderData, Form } from 'react-router-dom';
import image from "../img/bookmarkinfo.png";

function Show(props) {
    const bookmark = useLoaderData();

    return (
        <div className='bookmarkShow' style={{ backgroundImage:`url(${image})`,backgroundRepeat:"no-repeat",backgroundSize:"contain", 
        height:800,width:800
        }}>
               <div className='bookmarkDeets'>
            <h1>{bookmark.title}</h1>
            <h3>{bookmark.url}</h3>
     
            <h3>Update {bookmark.title}</h3>
            <Form action={`/update/${bookmark._id}`} method="post">
                <input type='text' name='title' placeholder='Bookmark title' defaultValue={bookmark.title}/>
                <input type='text' name='url' placeholder='Bookmark URL' defaultValue={bookmark.url}/>
                <input type='submit' value='Update Bookmark'/>
            </Form>

            <h3>Delete {bookmark.title}</h3>
            <Form action={`/delete/${bookmark._id}`} method="post">
                <input type="submit" value="Delete Bookmark"/>
            </Form>
            </div>
        </div>
    );
}

export default Show;