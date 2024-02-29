import PostUser from "@/components/postUser/postUser";
import styles from "./singlePost.module.css";
import Image from "next/image";
import { getPost } from "@/lib/data";
// import { Suspense } from "react/cjs/react.production.min";

const getData = async (slug) => {
  const res = await fetch(`http://localhost:3000/api/blog/${slug}`);

  if (!res.ok) {
    throw new Error("Something went wrong");
  }

  return res.json();
};

export const generateMetadata = async ({ params }) => {
  const { slug } = params;

  const post = await getPost(slug);

  return {
    title: post.title,
    description: post.desc,
  };
};

const SinglePostPage = async ({ params }) => {
  const { slug } = params;
  const post = await getData(slug);
  // const post = await getPost(slug);

  return (
    <div className={styles.container}>
      {post?.img && (
        <div className={styles.imgContainer}>
          <Image
            src="https://images.pexels.com/photos/19896968/pexels-photo-19896968/free-photo-of-a-black-hole-in-the-middle-of-a-snowy-forest.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
            fill
            className={styles.img}
          />
        </div>
      )}
      <div className={styles.textContainer}>
        <h1 className={styles.title}>{post?.title}</h1>
        <div className={styles.detail}>
          {/* <Suspense fallback={<div>Loading...</div>}> */}
          {post && <PostUser userId={post.userId} />}
          {/* </Suspense> */}
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Published</span>
            <span className={styles.detailValue}>
              {post.createdAt.toString().toString().slice(4, 16)}
            </span>
          </div>
        </div>
        <div className={styles.content}>{post?.desc}</div>
      </div>
    </div>
  );
};

export default SinglePostPage;
