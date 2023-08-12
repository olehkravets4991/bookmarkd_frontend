import { Link, useLoaderData, Form } from "react-router-dom";
import image from "../img/background.png";

function Index(props) {
  // GET THE DATA FROM OUR LOADER
  const bookmarks = useLoaderData();

  return (
    <div className="main" style={{ backgroundImage:`url(${image})`,backgroundRepeat:"no-repeat",backgroundSize:"contain", 
    height:800,width:800
    }}>
      <span className="newBookmarkTitle">
        <div className="add">Add a new bookmark...</div>
        </span>
        <span className="newBookDeets">
        <Form action="/create" method="post">
            Bookmark Title: <input type="text" name="title" placeholder="bookmark title"/>  |   
            Bookmark URL: <input type="text" name="url" placeholder="bookmark url"/>
            <input type="submit" value="Create "/>           
        </Form>
        </span>

      {bookmarks.map((bookmark, index) => {
        return (
          <div key={bookmark._id} className="bookmarkIndex">
            <Link to={`/${bookmark._id}`}>
            <h3>{bookmark.title}</h3>
            </Link>
            <h3>{bookmark.url}</h3>
          </div>
        );
      })}
    </div>
  );
}

export default Index;