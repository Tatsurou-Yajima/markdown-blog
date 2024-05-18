import { remark } from 'remark';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(), 'posts');

export function getSortedPostsData() {
    // Get file names under /posts
    const fileNames = fs.readdirSync(postsDirectory);
    const allPostsData = fileNames.map((fileName) => {
        // Get the full path of the file
        const fullPath = path.join(postsDirectory, fileName);

        // Check if the path is a directory
        if (fs.statSync(fullPath).isDirectory()) {
            return null; // If it's a directory, skip it
        }

        // Remove ".md" from file name to get id
        const id = fileName.replace(/\.md$/, '');

        // Read markdown file as string
        const fileContents = fs.readFileSync(fullPath, 'utf8');

        // Use gray-matter to parse the post metadata section
        const matterResult = matter(fileContents);

        // Combine the data with the id
        return {
            id,
            ...(matterResult.data as { date: string, title: string }),
        };
    }).filter(post => post !== null); // Remove null values from the array

    // Sort posts by date
    return allPostsData.sort((a, b) => {
        if (a.date < b.date) {
            return 1;
        } else {
            return -1;
        }
    });
}

export function getAllPostIds() {
    const fileNames = fs.readdirSync(postsDirectory);
    return fileNames.map((fileName) => {
        return {
            params: {
                id: fileName.replace(/\.md$/, ''),
            },
        };
    });
}

export async function getPostData(id) {
    const fullPath = path.join(postsDirectory, `${id}.md`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    const matterResult = matter(fileContents);

    const processedContent = await remark()
        .process(matterResult.content);

    const contentHtml = processedContent.toString();

    return {
        id,
        contentHtml,
        ...(matterResult.data as {
            date: string,
            title: string,
            thumbnail: string,
        }),
    };
}
