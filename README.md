![markdown-blog-top-image](https://github.com/Tatsurou-Yajima/markdown-blog/assets/44424270/f0ae1572-b083-4981-845a-32f8d9c519d7)

## Overview

This i a markdown blog built with Next.js.

Here is the website in operation.

https://yajima.sytes.net

![image](https://github.com/Tatsurou-Yajima/tech-blog-by-t-yajima/assets/44424270/fc110c59-9121-4db4-9b66-d9c384f2e641)


## Usage 

When running in your local environment, please execute the following command.

### 1. Install packages

```sh
npm i
```

### 2. Start local server

```sh
npm run dev
```

### 3. Create .env.local

Create `.env.local` file in the root directory.

The `.env.local` file you create will contain your information.

Refer to your existing `.env` file and include your account information, etc.

The `.env.local` file is not Git managed and will always overwrite the contents of the existing `.env` file.

<img width="571" alt="image" src="https://github.com/Tatsurou-Yajima/blog-built-with-Next.js/assets/44424270/7d03eb71-0696-466a-9684-7be0f5489525">

### 4. Access the Web site

http://localhost:3000

## How to manage packages

Within this program, I use a library called npm-check-updates.

https://github.com/raineorshine/npm-check-updates

### 1. Displays the current version

```bash
ncu
```

### 2. Update package.json

```bash
ncu -u
```

### 3. Install

```bash
npm i
```
