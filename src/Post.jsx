import { useEffect, useState } from "react";

function Post({ postID }) {
  const [post, setPost] = useState(null);
  //la siguiente asignacion de estado inicial tambien es valida
  // const [post, setPost] = useState({id:null, title:null, body:null});

  const [loading, setloading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setError(null);
    setloading(true);

    fetch(`https://jsonplaceholder.typicode.com/posts/${postID}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error al obtener la respuesta");
        }

        return response.json();
      })
      .then((data) => {
        setPost({
          title: data.title,
          body: data.body,
        });
        setloading(false);
      })
      .catch((error) => {
        setloading(false);
        setError(error);
      });
  }, [postID]);

  return (
    <div>
      {!error ? (
        <div className="box">
          {loading ? (
            <p className="subtitle">Cargando...</p>
          ) : (
            <div>
              <p className="subtitle">
                <strong>{post.title}</strong>
                <small>ID: ({postID})</small>
              </p>
              <p>{post.body}</p>
            </div>
          )}
        </div>
      ) : null}
    </div>
  );
}
export default Post;
