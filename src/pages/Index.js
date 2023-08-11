import { Link, useLoaderData, Form } from "react-router-dom";

function Index(props) {
  // GET THE DATA FROM OUR LOADER
  const bookmarks = useLoaderData();

  return (
    <div>
        <h2>Create a bookmarks</h2>
        <Form action="/create" method="post">
            <input type="text" name="name" placeholder="bookmarks's name"/>
            <input type="text" name="url" placeholder="bookmarks's url"/>
           
        </Form>
      {bookmarks.map((bookmarks, index) => {
        return (
          <div key={bookmarks._id} className="bookmarks">
              <h1>{bookmarks.name}</h1>
            <h3>{bookmarks.url}</h3>
          </div>
        );
      })}
    </div>
  );
}

export default Index;