import fs from "fs";
import path from "path";
import matter from "gray-matter";
import removeMd from 'remove-markdown';

const postDirectory = path.join(process.cwd(), "data/posts");

const EXCERPT_WORD_COUNT = 30;

export const getSortedPosts = (numPosts) => { // returns all posts if numPosts is not specified
  const fileNames = fs.readdirSync(postDirectory).filter((file) => {
    return path.extname(file).toLowerCase() === ".mdx";
  });

  const allPostsData = fileNames.map((filename) => {
    const slug = filename.replace(".mdx", "");

    const fullPath = path.join(postDirectory, filename);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);

    const options = { month: "long", day: "numeric", year: "numeric" };
    const formattedDate = new Date(data.date).toLocaleDateString(
      "en-IN",
      options
    );

    const excerpt = removeMd(content.split(' ').slice(0,EXCERPT_WORD_COUNT).join(' '));

    const frontmatter = {
      ...data,
      date: formattedDate,
    };
    return {
      slug,
      excerpt,
      ...frontmatter,
    };
  });

  // If numPosts is specified, return the n latest posts
  if (numPosts) {
    return allPostsData.sort((a, b) => {
      if (new Date(a.date) < new Date(b.date)) {
        return 1;
      } else {
        return -1;
      }
    }).slice(0,numPosts);
  }


  // Return all posts
  return allPostsData.sort((a, b) => {
    if (new Date(a.date) < new Date(b.date)) {
      return 1;
    } else {
      return -1;
    }
  });
};

export const getAllPostSlugs = () => {
  const fileNames = fs.readdirSync(postDirectory).filter((file) => {
    return path.extname(file).toLowerCase() === ".mdx";
  });

  return fileNames.map((filename) => {
    return {
      params: {
        slug: filename.replace(".mdx", "")
      }
    };
  });
};

export const getPostData = async (slug) => {
  const fullPath = path.join(postDirectory, `${slug}.mdx`);
  const postContent = fs.readFileSync(fullPath, "utf8");

  return postContent;
};