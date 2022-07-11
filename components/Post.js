function Post({ title, description, picture, price }) {
  
    return (
      <div className="post">
        <img alt={description} src={`https:${picture}`} />
        <div className="description">{description}</div>
        <div className="text">
          <h2>{title}</h2>
          <h3>{price}</h3>
        </div>
      </div>
    )
  }
  
  export default Post;