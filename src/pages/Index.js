import { Link, useLoaderData, Form } from "react-router-dom";

function Index(props) {
  // GET THE DATA FROM OUR LOADER
  const bookmarks = useLoaderData();

  return (
    <div>
        <h2>Create a bookmarks</h2>
        <Form action="/create" method="post">
            <input type="text" name="title" placeholder="bookmarks's title"/>
            <input type="text" name="url" placeholder="bookmarks's url"/>
            <input type="submit" value="Create "/>
           
        </Form>
      {bookmarks.map((bookmark, index) => {
        return (
          <div key={bookmark._id} className="bookmark">
              <h1>{bookmark.title}</h1>
            <h3>{bookmark.url}</h3>
          </div>
        );
      })}
    </div>
  );
}

export default Index;