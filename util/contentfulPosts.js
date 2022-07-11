// const space = process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID
// const accessToken = process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN

const space = "1170q6frmf9u";
const accessToken = "jgqBEwpG7_P7NWZ7iRyHJxjv1KKrPuvbhuSVFa9Oa7s";

const client = require('contentful').createClient({
  space: space,
  accessToken: accessToken,
});

export async function fetchEntries() {
  const entries = await client.getEntries()
  if (entries.items) return entries.items
  console.log(`Error getting Entries for ${contentType.name}.`)
}

export default { fetchEntries }