function Post({ title, description, image, price }) {
  
    return (
      <div className="post">
        <div className="text">
          <h2>{title}</h2>
          <h3>{price}</h3>
        </div>
        <img alt={description} src={`https:${image}`} />
        <div className="description">{description}</div>
      </div>
    )
  }
  
  export default Post;