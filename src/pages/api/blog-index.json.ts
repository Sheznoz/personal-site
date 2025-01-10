import { getCollection } from "astro:content";

const posts = await getCollection('blog');

const index = posts.map((post: any) => ({
    id: post.id,
    title: post.data.title,
    author: post.data.author,
    description: post.data.description,
    tags: post.data.tags,
    pubDate: post.data.pubDate
})
);

export async function GET() {
    return new Response(
        JSON.stringify(index, null, 2)
    )
}