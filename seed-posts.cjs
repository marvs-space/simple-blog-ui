// Seed script to add sample blog posts to Firestore - CommonJS version
// Run this with: node seed-posts.cjs

const { initializeApp } = require('firebase/app');
const { getFirestore, collection, addDoc, Timestamp } = require('firebase/firestore');
require('dotenv').config();

// Firebase configuration
const firebaseConfig = {
  apiKey: process.env.VITE_FIREBASE_API_KEY,
  authDomain: process.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: process.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.VITE_FIREBASE_APP_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Sample blog posts
const posts = [
  {
    title: "The Rise of AI in Modern Web Development",
    category: "TECH",
    content: "Artificial Intelligence is revolutionizing how we build web applications. From intelligent code completion to automated testing, AI tools are becoming indispensable in a developer's toolkit. Modern frameworks are integrating AI-powered features that can predict user behavior, optimize performance automatically, and even generate code snippets. Tools like GitHub Copilot and ChatGPT are changing the development workflow, allowing developers to focus more on architecture and problem-solving rather than syntax. The future of web development will be a collaborative effort between human creativity and AI efficiency.",
    imageUrl: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&auto=format&fit=crop",
    author: {
      name: "Alex Chen",
      id: "seed-user-1",
      avatar: "https://i.pravatar.cc/150?img=33"
    },
    createdAt: Timestamp.fromDate(new Date('2024-11-20'))
  },
  {
    title: "Minimalism in UI Design: Less is More",
    category: "DESIGN",
    content: "In the world of user interface design, minimalism continues to dominate. The principle of 'less is more' has never been more relevant. By stripping away unnecessary elements, designers create interfaces that are not only aesthetically pleasing but also highly functional. White space becomes a powerful design element, guiding users' attention to what truly matters. Color palettes are refined to 2-3 primary colors, typography is clean and purposeful, and every element serves a specific function. This approach reduces cognitive load and improves user experience significantly.",
    imageUrl: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&auto=format&fit=crop",
    author: {
      name: "Sarah Martinez",
      id: "seed-user-2",
      avatar: "https://i.pravatar.cc/150?img=47"
    },
    createdAt: Timestamp.fromDate(new Date('2024-11-19'))
  },
  {
    title: "The Future of Remote Work in 2025",
    category: "TRENDS",
    content: "Remote work has transformed from a pandemic necessity to a permanent fixture in the modern workplace. As we approach 2025, companies are reimagining what work means. Hybrid models are becoming the norm, with employees splitting time between home and office. Virtual reality meetings are no longer science fiction – they're becoming mainstream. Digital nomadism is on the rise, with professionals working from exotic locations worldwide. Companies are investing in digital infrastructure, async communication tools, and results-oriented management practices rather than traditional time-tracking methods.",
    imageUrl: "https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b?w=800&auto=format&fit=crop",
    author: {
      name: "Marcus Johnson",
      id: "seed-user-3",
      avatar: "https://i.pravatar.cc/150?img=12"
    },
    createdAt: Timestamp.fromDate(new Date('2024-11-18'))
  },
  {
    title: "TypeScript vs JavaScript: Making the Right Choice",
    category: "TECH",
    content: "The debate between TypeScript and JavaScript continues to be one of the most discussed topics in web development. TypeScript offers static typing, which catches errors during development rather than runtime. This leads to more robust and maintainable code, especially in large-scale applications. However, JavaScript's flexibility and simplicity make it perfect for rapid prototyping and smaller projects. The learning curve of TypeScript can be steep, but the long-term benefits often outweigh the initial investment. Modern frameworks like Next.js and Angular have embraced TypeScript as their default choice.",
    imageUrl: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=800&auto=format&fit=crop",
    author: {
      name: "Emma Wilson",
      id: "seed-user-4",
      avatar: "https://i.pravatar.cc/150?img=45"
    },
    createdAt: Timestamp.fromDate(new Date('2024-11-17'))
  },
  {
    title: "Dark Mode Design: Best Practices and Principles",
    category: "DESIGN",
    content: "Dark mode has evolved from a trendy feature to an essential accessibility option. Implementing dark mode requires more than just inverting colors – it demands careful consideration of contrast ratios, color temperature, and user comfort. Pure black backgrounds can cause eye strain; instead, designers opt for dark grays. Text should be slightly dimmed white rather than pure white to reduce glare. Accent colors need to be adjusted for proper visibility. The key is maintaining the same visual hierarchy and readability in both light and dark modes while providing users with seamless switching capabilities.",
    imageUrl: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&auto=format&fit=crop",
    author: {
      name: "David Kim",
      id: "seed-user-5",
      avatar: "https://i.pravatar.cc/150?img=60"
    },
    createdAt: Timestamp.fromDate(new Date('2024-11-16'))
  },
  {
    title: "Sustainable Tech: Green Computing in 2024",
    category: "TRENDS",
    content: "The tech industry is finally taking environmental sustainability seriously. Data centers are transitioning to renewable energy sources, and companies are optimizing code for energy efficiency. The concept of 'green computing' encompasses hardware recycling programs, energy-efficient algorithms, and carbon-neutral cloud services. Developers are now considering the environmental impact of their decisions – from choosing efficient data structures to optimizing image sizes on websites. Major tech companies have committed to carbon neutrality, and smaller startups are following suit, making sustainability a core value rather than an afterthought.",
    imageUrl: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&auto=format&fit=crop",
    author: {
      name: "Olivia Brown",
      id: "seed-user-6",
      avatar: "https://i.pravatar.cc/150?img=32"
    },
    createdAt: Timestamp.fromDate(new Date('2024-11-15'))
  },
  {
    title: "Cybersecurity Essentials for Modern Applications",
    category: "TECH",
    content: "In an era of increasing cyber threats, security can no longer be an afterthought. Modern applications must be built with security at their core. This means implementing proper authentication and authorization, encrypting sensitive data both in transit and at rest, and regularly updating dependencies to patch vulnerabilities. OAuth 2.0 and JWT tokens have become standard for authentication. Rate limiting prevents DDoS attacks, and input validation protects against injection attacks. Security audits should be conducted regularly, and developers must stay informed about the latest security best practices and common vulnerabilities.",
    imageUrl: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&auto=format&fit=crop",
    author: {
      name: "James Anderson",
      id: "seed-user-7",
      avatar: "https://i.pravatar.cc/150?img=68"
    },
    createdAt: Timestamp.fromDate(new Date('2024-11-14'))
  },
  {
    title: "The Psychology of Color in Digital Design",
    category: "DESIGN",
    content: "Colors evoke emotions and influence user behavior in profound ways. Blue conveys trust and professionalism, which is why it dominates corporate websites and banking apps. Red creates urgency and excitement, perfect for call-to-action buttons. Green represents growth and health, popular in wellness and finance apps. Understanding color psychology helps designers create interfaces that resonate with users on an emotional level. Cultural context matters too – colors can have different meanings across cultures. Successful design combines color theory with user research to create palettes that support the brand message and enhance user experience.",
    imageUrl: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=800&auto=format&fit=crop",
    author: {
      name: "Sophia Lee",
      id: "seed-user-8",
      avatar: "https://i.pravatar.cc/150?img=41"
    },
    createdAt: Timestamp.fromDate(new Date('2024-11-13'))
  },
  {
    title: "Web3 and Decentralization: Hype or Future?",
    category: "TRENDS",
    content: "Web3 promises to revolutionize the internet through decentralization and blockchain technology. Proponents argue it will give users control over their data and create a more democratic internet. NFTs, DAOs, and cryptocurrency are early manifestations of this vision. However, critics point to environmental concerns, scalability issues, and the concentration of wealth among early adopters. The reality likely lies somewhere in between – while true decentralization may be aspirational, blockchain technology is finding practical applications in supply chain management, digital identity, and smart contracts that extend beyond cryptocurrency speculation.",
    imageUrl: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&auto=format&fit=crop",
    author: {
      name: "Ryan Taylor",
      id: "seed-user-9",
      avatar: "https://i.pravatar.cc/150?img=52"
    },
    createdAt: Timestamp.fromDate(new Date('2024-11-12'))
  },
  {
    title: "Responsive Web Design in the Age of Foldable Phones",
    category: "TECH",
    content: "The emergence of foldable phones and diverse screen sizes has made responsive design more challenging than ever. Designers can no longer rely on simple breakpoints for mobile, tablet, and desktop. They must consider devices that transform from phone to tablet with a single unfold. CSS Grid and Flexbox provide the flexibility needed for truly responsive layouts. Container queries are emerging as a game-changer, allowing components to adapt based on their container size rather than viewport size. Testing across devices is crucial, and progressive enhancement ensures functionality across all screen sizes and capabilities.",
    imageUrl: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&auto=format&fit=crop",
    author: {
      name: "Isabella Garcia",
      id: "seed-user-10",
      avatar: "https://i.pravatar.cc/150?img=38"
    },
    createdAt: Timestamp.fromDate(new Date('2024-11-11'))
  }
];

// Function to seed posts
async function seedPosts() {
  console.log('Starting to seed blog posts...\n');

  let successCount = 0;
  let errorCount = 0;

  for (const post of posts) {
    try {
      const docRef = await addDoc(collection(db, 'posts'), post);
      console.log(`✓ Added: "${post.title}" (ID: ${docRef.id})`);
      successCount++;
    } catch (error) {
      console.error(`✗ Failed to add: "${post.title}"`, error.message);
      errorCount++;
    }
  }

  console.log(`\n--- Seeding Complete ---`);
  console.log(`✓ Successfully added: ${successCount} posts`);
  if (errorCount > 0) {
    console.log(`✗ Failed: ${errorCount} posts`);
  }

  process.exit(0);
}

// Run the seeding function
seedPosts().catch((error) => {
  console.error('Fatal error:', error);
  process.exit(1);
});
