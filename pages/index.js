import { fetchEntries } from '../contentfulPosts'
import Post from '../components/Post';

// inside your component markup, pull `posts` from props

<div className="posts">
  {posts.map((p) => {
    return <Post 
            image={p.picture} 
            title={p.title}
            price={p.price}
            />
  })}
</div>

// at the bottom of your component file

export async function getStaticProps() {
  const res = await fetchEntries()
  const posts = await res.map((p) => {
    return p.fields
  })

  return {
    props: {
      posts,
    },
  }
}
