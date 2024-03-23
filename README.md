 
# American Diner
Welcome to the American diner web app. <br>
You can think of this app as a 'mule' to test new web technologies and practice.<br>

##

### How do I start this thing?
simple. `npm run dev`... Then open http://localhost:3000/

### Design practices
I've mainly followed [4] (LamaDev) to design this.  
I've used a lot of components and css modules, and kept away from using tailwind. I feel this is a good way to understand the flow of things as beginner.  
That being said, here's some pros and cons I've identified with the structure:  

**Pros** 
- Parent components look neat and tidy
- Within an IDE it's quite easy to navigate between them
- Of course reusable components 

**Cons**
- Altering css is really a pain, it'll be easier to just do it in the component itself. Hence Tailwind maybe a better option
- If you struggle with 'window' management, it can be tedious and a little overwhelming to find exactly what your looking for

I've also tried to keep it consistent. You'll see in the globals.css there's `:root`, where there's global css variables for the color theme... Defiantly a life saver.

To summarize the practices. I've used components and segmented the app as much as i see fit...  
*I've treated elements on a page, similar to functions... If it's reusable, or if partitioning a certain part of the layout helps with navigation. I'll make it into a component.*

### The Stack
**Front End**
- NextJS Framework part of React

**Databases**
- MongoDB (Light weight, very fast, NOSQL type DB)

### App Niches & Findings
- **webpack serializing WARN** > While in development, strange rendering errors were happening. Mostly warnings. Here's an example:
`<w> while serializing webpack/lib/cache/PackFileCacheStrategy.PackContentItems -`

    The around this was to include the `postcss.config.js`. Essentially, this tells the browser the sequence in how to run your project. You can also include tools such as `postcss-reporter` to explain where there may be errors in your css. Resolve css conflicts or errors, and it'll help stop serialization errors. 

    

<br>

## references
[1] https://www.cucinarustica.co.uk/  
[2] https://www.wingstop.co.uk/  
[3] https://www.youtube.com/watch?v=TaXql0h_wCA  
[4] https://youtu.be/vCOSTG10Y4o?si=djYTVZqD922Zu9Es <br>
<br>
<br>

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).
<br>
<br>
<br>
***Init Next JS Docs Below***  
|  
|  
|  
|  
|  
|  
|  

## Getting Started  

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

