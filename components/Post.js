function Post({ title, picture, price }) {
    let { file, description } = picture;
  
    return (
      <div className="post">
        <img alt={description} src={`https:${file.url}`} />
        <div className="description">{description}</div>
        <div className="text">
          <h2>{title}</h2>
          <h3>{price}</h3>
        </div>
      </div>
    )
  }
  
  export default Post;