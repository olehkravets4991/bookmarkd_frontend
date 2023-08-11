import { Link, useLoaderData, Form } from "react-router-dom";

function Index(props) {
  // GET THE DATA FROM OUR LOADER
  const people = useLoaderData();

  return (
    <div>
        <h2>Create a Bookmarkd</h2>
        <Form action="/create" method="post">
            <input type="text" name="name" placeholder="Bookmarkd's name"/>
            <input type="text" name="url" placeholder="Bookmarkd's url"/>
           
        </Form>
      {Bookmarkd.map((Bookmarkd, index) => {
        return (
          <div key={Bookmarkd._id} className="Bookmarkd">
              <h1>{Bookmarkd.name}</h1>
            <h3>{Bookmarkd.url}</h3>
          </div>
        );
      })}
    </div>
  );
}

export default Index;