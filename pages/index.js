import { fetchEntries } from '../util/contentfulPosts';
import Post from '../components/Post';


// inside your component markup, pull `posts` from props
export default function Home({ posts }) {
  
  return (
    <div className="home">
      <title>Home</title>
      <h1>Products</h1>
      <main>
        <div className="posts">
        {posts.map((p) => {
          return <Post 
                key={p.Date}
                image={p.picture.fields.file.url} 
                title={p.title}
                price={p.price}
                />
        })}
        </div>
      </main>
    </div>
  )
}



// at the bottom of your component file

export async function getStaticProps() {
  const res = await fetchEntries();
  const posts = await res.map((p) => {
    return p.fields;
  })

  return {
    props: {
      posts,
    },
  }
}
