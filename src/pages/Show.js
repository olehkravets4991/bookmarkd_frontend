import { useLoaderData, Form } from 'react-router-dom';

function Show(props) {
    const bookmark = useLoaderData();
    console.log(bookmark);

    return (
        <div className='bookmark'>
            <h1>{bookmark.title}</h1>
            <h2>{bookmark.url}</h2>

            <h2>Update {bookmark.title}</h2>
            <Form action={`/update/${bookmark._id}`} method="post">
                <input type='text' name='Title' placeholder='Bookmark title' defaultValue={bookmark.title}/>
                <input type='text' name='URL' placeholder='Bookmark URL' defaultValue={bookmark.url}/>
                <input type='submit' value='Update Bookmark'/>
            </Form>

            <h2>Delete {bookmark.title}</h2>
            <Form action={`/delete/${bookmark._id}`} method="post">
                <input type="submit" value="Delete Bookmark"/>
            </Form>
        </div>
    );
}

export default Show;