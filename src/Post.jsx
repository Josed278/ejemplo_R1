import { useEffect, useState } from "react";

function Post({ postID }) {
  const [post, setPost] = useState(null);
  const [loading, setloading] = useState(true);
  //la siguiente asignacion de estado inicial tambien es valida
  // const [post, setPost] = useState({id:null, title:null, body:null});

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts/${postID}")
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
      });
  }, [postID]);

  return (
    <div className="box">
      {loading ? (
        <p className="Subtitulo">"Cargando..."</p>
      ) : (
        <div>
          <p className="subtitulo">
            <strong>{post.title}</strong>
            <small>ID:({post.posid})</small>
          </p>
          <p>{post.body}</p>
        </div>
      )}
    </div>
  );
}
export default Post;
