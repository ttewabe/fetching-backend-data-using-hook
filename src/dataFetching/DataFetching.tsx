import { useState, useEffect } from "react";
import axios from "axios";

function DataFetching() {
  const [post, setPost] = useState<any>({});
  const [id, setId] = useState<any>(1);
  const [idFromButtonClick, setIdFromButtonClick] = useState<any>(1);

  const handleClick = () => {
    setIdFromButtonClick(id);
  };

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${idFromButtonClick}`)
      .then((res: any) => {
        console.log(res);
        setPost(res.data);
      })

      .catch((err: any) => {
        console.log(err);
      });
  }, [idFromButtonClick]);

  return (
    <div >
      <input
        type="text"
        value={isNaN(id) ? "" : id}
        onChange={(e) => setId(parseInt(e.target.value) || 0)}
      />

      <button onClick={handleClick}>Fetch Post</button>
      <div className="container">{post.title}</div>
      {/* <ul>
        {posts.map((post: Post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul> */}
    </div>
  );
}
export default DataFetching;
