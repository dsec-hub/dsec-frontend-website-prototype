import type {
  BlogPost,
  BlogAuthor,
  BlogCategory,
  BlogCategoryInfo,
  BlogSearchParams,
  BlogListResponse,
} from "@/types";

// Blog authors
export const blogAuthors: Record<string, BlogAuthor> = {
  "alex-chen": {
    id: "alex-chen",
    name: "Alex Chen",
    avatar: "/avatars/alex.jpg",
    role: "DSEC President",
    bio: "Full-stack developer passionate about web technologies and open source. Leading DSEC to empower student developers.",
    socials: {
      github: "alexchen",
      linkedin: "alexchen-dev",
      twitter: "alexchen_dev",
    },
  },
  "sarah-kim": {
    id: "sarah-kim",
    name: "Sarah Kim",
    avatar: "/avatars/sarah.jpg",
    role: "Security Lead",
    bio: "Cybersecurity enthusiast with a focus on ethical hacking and secure coding practices.",
    socials: {
      github: "sarahkim-sec",
      linkedin: "sarahkim-security",
    },
  },
  "james-wong": {
    id: "james-wong",
    name: "James Wong",
    avatar: "/avatars/james.jpg",
    role: "Tech Lead",
    bio: "Cloud architect and DevOps engineer. AWS certified with experience in scalable systems.",
    socials: {
      github: "jameswong",
      linkedin: "james-wong-cloud",
      website: "https://jameswong.dev",
    },
  },
  "emma-patel": {
    id: "emma-patel",
    name: "Emma Patel",
    avatar: "/avatars/emma.jpg",
    role: "AI/ML Specialist",
    bio: "Machine learning researcher focusing on natural language processing and computer vision.",
    socials: {
      github: "emmapatel",
      linkedin: "emma-patel-ml",
    },
  },
  "marcus-johnson": {
    id: "marcus-johnson",
    name: "Marcus Johnson",
    avatar: "/avatars/marcus.jpg",
    role: "Mobile Lead",
    bio: "Cross-platform mobile developer specializing in React Native and Flutter.",
    socials: {
      github: "marcusj",
      linkedin: "marcus-johnson-mobile",
    },
  },
};

// Blog categories
export const blogCategories: BlogCategoryInfo[] = [
  {
    id: "tutorials",
    label: "Tutorials",
    description: "Step-by-step guides and how-tos",
    color: "primary",
  },
  {
    id: "career",
    label: "Career",
    description: "Job hunting, interviews, and career growth",
    color: "secondary",
  },
  {
    id: "security",
    label: "Security",
    description: "Cybersecurity tips and best practices",
    color: "coral",
  },
  {
    id: "web-development",
    label: "Web Development",
    description: "Frontend, backend, and full-stack topics",
    color: "lime",
  },
  {
    id: "ai-ml",
    label: "AI & ML",
    description: "Artificial intelligence and machine learning",
    color: "accent",
  },
  {
    id: "cloud",
    label: "Cloud",
    description: "Cloud computing and infrastructure",
    color: "cyan",
  },
  {
    id: "mobile",
    label: "Mobile",
    description: "iOS, Android, and cross-platform development",
    color: "primary",
  },
  {
    id: "devops",
    label: "DevOps",
    description: "CI/CD, automation, and infrastructure",
    color: "secondary",
  },
  {
    id: "news",
    label: "News",
    description: "Latest updates from DSEC and tech industry",
    color: "lime",
  },
  {
    id: "community",
    label: "Community",
    description: "Events, meetups, and member spotlights",
    color: "coral",
  },
];

// Dummy blog posts with real markdown content
export const blogPosts: BlogPost[] = [
  {
    id: "1",
    slug: "getting-started-with-nextjs-15",
    title: "Getting Started with Next.js 15: A Complete Guide",
    excerpt:
      "Learn how to build modern web applications with Next.js 15. This comprehensive guide covers everything from setup to deployment.",
    coverImage: "/blog/nextjs-15.jpg",
    category: "web-development",
    tags: ["nextjs", "react", "typescript", "tutorial"],
    authors: [blogAuthors["alex-chen"]],
    publishedAt: "2024-01-15T10:00:00Z",
    readingTime: 12,
    featured: true,
    views: 2450,
    content: `
# Getting Started with Next.js 15: A Complete Guide

Next.js 15 brings exciting new features that make building React applications even more powerful. In this comprehensive guide, we'll explore everything you need to know to get started.

## Why Next.js 15?

Next.js has become the go-to framework for React developers, and version 15 takes it to the next level with:

- **Turbopack** - A new Rust-based bundler that's up to 700x faster than Webpack
- **Server Actions** - Simplified server-side mutations
- **Partial Prerendering** - The best of static and dynamic rendering
- **Improved Caching** - More granular control over data caching

## Prerequisites

Before we dive in, make sure you have:

- Node.js 18.17 or later
- npm, yarn, or pnpm
- Basic knowledge of React

## Creating Your First Project

Let's create a new Next.js 15 project:

\`\`\`bash
npx create-next-app@latest my-app
cd my-app
npm run dev
\`\`\`

You'll be prompted with a few questions. Here's what we recommend:

- TypeScript: **Yes**
- ESLint: **Yes**
- Tailwind CSS: **Yes**
- src/ directory: **Yes**
- App Router: **Yes**
- Turbopack: **Yes**

## Understanding the App Router

The App Router is the new paradigm for building Next.js applications. Here's the folder structure:

\`\`\`
app/
├── layout.tsx      # Root layout
├── page.tsx        # Home page
├── globals.css     # Global styles
└── blog/
    ├── page.tsx    # Blog listing
    └── [slug]/
        └── page.tsx # Individual blog post
\`\`\`

### Creating a Basic Page

\`\`\`tsx
// app/page.tsx
export default function HomePage() {
  return (
    <main className="min-h-screen p-8">
      <h1 className="text-4xl font-bold">Welcome to My App</h1>
      <p className="mt-4 text-gray-600">
        Built with Next.js 15
      </p>
    </main>
  );
}
\`\`\`

## Server Components vs Client Components

By default, all components in the App Router are Server Components. To use client-side features, add the \`"use client"\` directive:

\`\`\`tsx
"use client";

import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <button onClick={() => setCount(count + 1)}>
      Count: {count}
    </button>
  );
}
\`\`\`

## Data Fetching

Next.js 15 simplifies data fetching with native \`fetch\`:

\`\`\`tsx
async function getPosts() {
  const res = await fetch('https://api.example.com/posts', {
    next: { revalidate: 3600 } // Revalidate every hour
  });
  return res.json();
}

export default async function BlogPage() {
  const posts = await getPosts();

  return (
    <ul>
      {posts.map((post) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  );
}
\`\`\`

## Server Actions

Server Actions allow you to run server-side code directly from your components:

\`\`\`tsx
// app/actions.ts
"use server";

export async function createPost(formData: FormData) {
  const title = formData.get("title");
  const content = formData.get("content");

  // Save to database
  await db.posts.create({ title, content });
}
\`\`\`

## Deployment

Deploying to Vercel is seamless:

\`\`\`bash
npm install -g vercel
vercel
\`\`\`

## Conclusion

Next.js 15 is a game-changer for React development. With Turbopack, improved caching, and Server Actions, building fast and scalable applications has never been easier.

Start building today and join the DSEC community to share your projects!

---

*Have questions? Join our [Discord server](https://discord.gg/dsec) to connect with other developers!*
`,
  },
  {
    id: "2",
    slug: "secure-coding-practices-for-web-developers",
    title: "Secure Coding Practices Every Web Developer Should Know",
    excerpt:
      "Security should be a priority from day one. Learn the essential secure coding practices to protect your applications from common vulnerabilities.",
    coverImage: "/blog/secure-coding.jpg",
    category: "security",
    tags: ["security", "web-development", "owasp", "best-practices"],
    authors: [blogAuthors["sarah-kim"]],
    publishedAt: "2024-01-12T14:30:00Z",
    readingTime: 15,
    featured: true,
    views: 1890,
    content: `
# Secure Coding Practices Every Web Developer Should Know

In today's digital landscape, security breaches are becoming increasingly common. As developers, it's our responsibility to write secure code from the start.

## The OWASP Top 10

The Open Web Application Security Project (OWASP) maintains a list of the most critical web application security risks:

1. **Broken Access Control**
2. **Cryptographic Failures**
3. **Injection**
4. **Insecure Design**
5. **Security Misconfiguration**
6. **Vulnerable Components**
7. **Authentication Failures**
8. **Data Integrity Failures**
9. **Logging Failures**
10. **Server-Side Request Forgery**

Let's dive into how to protect against these vulnerabilities.

## 1. Preventing SQL Injection

Never concatenate user input directly into SQL queries:

\`\`\`typescript
// BAD - Vulnerable to SQL injection
const query = \`SELECT * FROM users WHERE id = \${userId}\`;

// GOOD - Use parameterized queries
const query = 'SELECT * FROM users WHERE id = $1';
const result = await db.query(query, [userId]);
\`\`\`

## 2. Cross-Site Scripting (XSS) Prevention

Always sanitize and escape user input:

\`\`\`typescript
import DOMPurify from 'dompurify';

// Sanitize HTML content
const cleanHTML = DOMPurify.sanitize(userInput);

// In React, be careful with dangerouslySetInnerHTML
<div dangerouslySetInnerHTML={{ __html: cleanHTML }} />
\`\`\`

## 3. Authentication Best Practices

Implement secure authentication:

\`\`\`typescript
import bcrypt from 'bcrypt';

// Hash passwords with a strong salt
const hashPassword = async (password: string) => {
  const saltRounds = 12;
  return bcrypt.hash(password, saltRounds);
};

// Verify passwords
const verifyPassword = async (password: string, hash: string) => {
  return bcrypt.compare(password, hash);
};
\`\`\`

## 4. HTTPS Everywhere

Always use HTTPS in production:

\`\`\`typescript
// next.config.js
module.exports = {
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=31536000; includeSubDomains'
          }
        ],
      },
    ];
  },
};
\`\`\`

## 5. Input Validation

Validate all user input on both client and server:

\`\`\`typescript
import { z } from 'zod';

const userSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8).max(100),
  age: z.number().int().positive().max(150),
});

// Validate input
const result = userSchema.safeParse(userInput);
if (!result.success) {
  throw new Error('Invalid input');
}
\`\`\`

## 6. Secure Headers

Add security headers to your responses:

\`\`\`typescript
const securityHeaders = {
  'Content-Security-Policy': "default-src 'self'",
  'X-Frame-Options': 'DENY',
  'X-Content-Type-Options': 'nosniff',
  'Referrer-Policy': 'strict-origin-when-cross-origin',
  'Permissions-Policy': 'camera=(), microphone=()',
};
\`\`\`

## 7. Environment Variables

Never commit secrets to version control:

\`\`\`bash
# .env.local (add to .gitignore)
DATABASE_URL=postgresql://...
API_SECRET=your-secret-key
\`\`\`

## Conclusion

Security is not a feature—it's a requirement. By following these practices, you'll significantly reduce the risk of vulnerabilities in your applications.

Remember: **Security is everyone's responsibility!**

---

*Want to learn more about cybersecurity? Join DSEC's Security Workshop series!*
`,
  },
  {
    id: "3",
    slug: "landing-your-first-tech-internship",
    title: "How to Land Your First Tech Internship: A Student's Guide",
    excerpt:
      "Breaking into the tech industry can be challenging. Here's a comprehensive guide to help you secure your first internship.",
    coverImage: "/blog/internship.jpg",
    category: "career",
    tags: ["career", "internship", "interview", "resume"],
    authors: [blogAuthors["alex-chen"], blogAuthors["emma-patel"]],
    publishedAt: "2024-01-10T09:00:00Z",
    readingTime: 10,
    featured: false,
    views: 3200,
    content: `
# How to Land Your First Tech Internship: A Student's Guide

Getting your first tech internship can feel overwhelming, but with the right approach, you can stand out from the crowd.

## Building Your Foundation

### 1. Develop Core Skills

Focus on these fundamentals:

- **Programming**: Python, JavaScript, or Java
- **Data Structures & Algorithms**: Essential for interviews
- **Version Control**: Git and GitHub
- **Web Development**: HTML, CSS, React or Vue

### 2. Build a Portfolio

Your portfolio should include:

- 3-5 quality projects
- A personal website
- GitHub with clean, documented code
- At least one collaborative project

## Crafting Your Resume

### Keep It Concise

- One page maximum
- Relevant experience first
- Quantify achievements when possible

### Example Format

\`\`\`
PROJECTS
--------
E-commerce Platform | React, Node.js, MongoDB
• Built full-stack application with 50+ products
• Implemented JWT authentication and payment integration
• Deployed on AWS with 99.9% uptime
\`\`\`

## Interview Preparation

### Technical Interviews

Practice on these platforms:

1. **LeetCode** - Data structures and algorithms
2. **HackerRank** - Coding challenges
3. **Pramp** - Mock interviews

### Common Topics

- Arrays and Strings
- Linked Lists
- Trees and Graphs
- Dynamic Programming
- System Design (for senior roles)

### Behavioral Questions

Use the STAR method:

- **S**ituation: Set the context
- **T**ask: Describe your role
- **A**ction: Explain what you did
- **R**esult: Share the outcome

## Networking Tips

### Attend Events

- Hackathons
- Tech meetups
- Career fairs
- Club events (like DSEC!)

### Online Presence

- LinkedIn profile
- GitHub activity
- Twitter/X for tech community
- Personal blog

## Application Strategy

### Timing

- Apply early (August-October for summer internships)
- Follow up after 1-2 weeks
- Keep track of applications

### Where to Apply

- Company career pages
- LinkedIn Jobs
- AngelList (startups)
- University career portal

## Final Tips

1. **Don't give up** - Rejections are normal
2. **Learn from feedback** - Improve with each interview
3. **Stay curious** - Keep learning new technologies
4. **Help others** - Mentoring builds leadership skills

## Conclusion

Landing your first internship takes time and effort, but it's absolutely achievable. Start early, practice consistently, and don't be afraid to reach out to the community for help.

---

*DSEC runs mock interview sessions every month. Join our Discord to participate!*
`,
  },
  {
    id: "4",
    slug: "introduction-to-machine-learning-with-python",
    title: "Introduction to Machine Learning with Python",
    excerpt:
      "Start your machine learning journey with Python. This beginner-friendly guide covers the fundamentals of ML and hands-on examples.",
    coverImage: "/blog/ml-python.jpg",
    category: "ai-ml",
    tags: ["machine-learning", "python", "scikit-learn", "tutorial"],
    authors: [blogAuthors["emma-patel"]],
    publishedAt: "2024-01-08T11:00:00Z",
    readingTime: 18,
    featured: true,
    views: 2100,
    content: `
# Introduction to Machine Learning with Python

Machine learning is transforming industries across the globe. Let's explore the fundamentals and build your first ML model.

## What is Machine Learning?

Machine learning is a subset of artificial intelligence that enables computers to learn from data without being explicitly programmed.

### Types of Machine Learning

1. **Supervised Learning** - Learning from labeled data
2. **Unsupervised Learning** - Finding patterns in unlabeled data
3. **Reinforcement Learning** - Learning through trial and error

## Setting Up Your Environment

\`\`\`bash
# Create a virtual environment
python -m venv ml-env
source ml-env/bin/activate  # On Windows: ml-env\\Scripts\\activate

# Install required packages
pip install numpy pandas scikit-learn matplotlib jupyter
\`\`\`

## Your First ML Model

Let's build a simple classification model:

\`\`\`python
import numpy as np
import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestClassifier
from sklearn.metrics import accuracy_score, classification_report

# Load the famous Iris dataset
from sklearn.datasets import load_iris
iris = load_iris()
X, y = iris.data, iris.target

# Split into training and testing sets
X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.2, random_state=42
)

# Create and train the model
model = RandomForestClassifier(n_estimators=100, random_state=42)
model.fit(X_train, y_train)

# Make predictions
y_pred = model.predict(X_test)

# Evaluate the model
accuracy = accuracy_score(y_test, y_pred)
print(f"Accuracy: {accuracy:.2f}")
print(classification_report(y_test, y_pred))
\`\`\`

## Understanding the Pipeline

### 1. Data Preprocessing

\`\`\`python
from sklearn.preprocessing import StandardScaler

scaler = StandardScaler()
X_scaled = scaler.fit_transform(X)
\`\`\`

### 2. Feature Engineering

\`\`\`python
# Create new features
df['feature_ratio'] = df['feature_a'] / df['feature_b']
df['feature_log'] = np.log1p(df['feature_c'])
\`\`\`

### 3. Model Selection

Different algorithms for different problems:

| Problem Type | Algorithms |
|-------------|------------|
| Classification | Random Forest, SVM, Neural Networks |
| Regression | Linear Regression, XGBoost, Ridge |
| Clustering | K-Means, DBSCAN, Hierarchical |

## Deep Learning Preview

For more complex tasks, consider deep learning:

\`\`\`python
import tensorflow as tf
from tensorflow.keras import layers, models

model = models.Sequential([
    layers.Dense(128, activation='relu', input_shape=(4,)),
    layers.Dropout(0.2),
    layers.Dense(64, activation='relu'),
    layers.Dense(3, activation='softmax')
])

model.compile(
    optimizer='adam',
    loss='sparse_categorical_crossentropy',
    metrics=['accuracy']
)
\`\`\`

## Best Practices

1. **Start simple** - Begin with baseline models
2. **Cross-validate** - Use k-fold cross-validation
3. **Avoid overfitting** - Use regularization and dropout
4. **Document everything** - Track experiments and results

## Resources to Continue Learning

- **Courses**: Andrew Ng's ML Course, Fast.ai
- **Books**: "Hands-On Machine Learning" by Aurélien Géron
- **Practice**: Kaggle competitions

## Conclusion

Machine learning is a powerful tool that's becoming increasingly accessible. Start with the basics, practice regularly, and gradually tackle more complex problems.

---

*Interested in AI/ML? Join DSEC's AI Study Group every Thursday!*
`,
  },
  {
    id: "5",
    slug: "aws-for-beginners-getting-started",
    title: "AWS for Beginners: Getting Started with Cloud Computing",
    excerpt:
      "Cloud computing is essential for modern software development. Learn the basics of AWS and deploy your first application.",
    coverImage: "/blog/aws-cloud.jpg",
    category: "cloud",
    tags: ["aws", "cloud", "devops", "tutorial"],
    authors: [blogAuthors["james-wong"]],
    publishedAt: "2024-01-05T08:00:00Z",
    readingTime: 14,
    featured: false,
    views: 1650,
    content: `
# AWS for Beginners: Getting Started with Cloud Computing

Amazon Web Services (AWS) is the world's leading cloud platform. Let's explore the fundamentals and deploy your first application.

## What is Cloud Computing?

Cloud computing provides on-demand access to computing resources over the internet:

- **Compute** - Virtual servers (EC2)
- **Storage** - Object storage (S3)
- **Database** - Managed databases (RDS)
- **Networking** - Virtual networks (VPC)

## AWS Free Tier

AWS offers a generous free tier:

- 750 hours of EC2 t2.micro per month
- 5 GB of S3 storage
- 25 GB of DynamoDB storage
- 1 million Lambda invocations

## Core AWS Services

### 1. EC2 (Elastic Compute Cloud)

Virtual servers in the cloud:

\`\`\`bash
# Connect to your EC2 instance
ssh -i "my-key.pem" ec2-user@your-instance-ip

# Install Node.js
curl -fsSL https://rpm.nodesource.com/setup_18.x | sudo bash -
sudo yum install -y nodejs
\`\`\`

### 2. S3 (Simple Storage Service)

Object storage for any type of data:

\`\`\`javascript
const { S3Client, PutObjectCommand } = require("@aws-sdk/client-s3");

const client = new S3Client({ region: "ap-southeast-2" });

async function uploadFile(bucket, key, body) {
  const command = new PutObjectCommand({
    Bucket: bucket,
    Key: key,
    Body: body,
  });
  return client.send(command);
}
\`\`\`

### 3. Lambda (Serverless Functions)

Run code without managing servers:

\`\`\`javascript
exports.handler = async (event) => {
  console.log('Event:', JSON.stringify(event));

  return {
    statusCode: 200,
    body: JSON.stringify({ message: 'Hello from Lambda!' }),
  };
};
\`\`\`

### 4. RDS (Relational Database Service)

Managed databases:

\`\`\`bash
# Connect to PostgreSQL RDS
psql -h your-rds-endpoint.amazonaws.com -U admin -d mydb
\`\`\`

## Deploying a Next.js App

### Using AWS Amplify

\`\`\`bash
# Install Amplify CLI
npm install -g @aws-amplify/cli

# Configure Amplify
amplify configure

# Initialize in your project
amplify init

# Deploy
amplify publish
\`\`\`

## Best Practices

1. **Security First**
   - Use IAM roles with least privilege
   - Enable MFA on root account
   - Encrypt data at rest and in transit

2. **Cost Management**
   - Set up billing alerts
   - Use auto-scaling
   - Choose the right instance sizes

3. **High Availability**
   - Deploy across multiple AZs
   - Use load balancers
   - Implement health checks

## AWS Certifications Path

1. Cloud Practitioner (foundational)
2. Solutions Architect Associate
3. Developer Associate
4. Solutions Architect Professional

## Conclusion

AWS opens up endless possibilities for deploying and scaling applications. Start with the basics, leverage the free tier, and gradually expand your knowledge.

---

*DSEC offers AWS study groups for certification preparation. Join us!*
`,
  },
  {
    id: "6",
    slug: "building-cross-platform-apps-with-react-native",
    title: "Building Cross-Platform Apps with React Native",
    excerpt:
      "Create mobile apps for iOS and Android with a single codebase. Learn React Native fundamentals and best practices.",
    coverImage: "/blog/react-native.jpg",
    category: "mobile",
    tags: ["react-native", "mobile", "javascript", "ios", "android"],
    authors: [blogAuthors["marcus-johnson"]],
    publishedAt: "2024-01-03T10:30:00Z",
    readingTime: 16,
    featured: false,
    views: 1420,
    content: `
# Building Cross-Platform Apps with React Native

React Native allows you to build mobile apps using JavaScript and React. Let's explore how to create beautiful, performant apps for both iOS and Android.

## Why React Native?

- **Single codebase** for iOS and Android
- **Fast development** with hot reloading
- **Native performance** using native components
- **Large community** and ecosystem

## Getting Started

### Prerequisites

- Node.js 18+
- Watchman (macOS)
- Xcode (iOS) or Android Studio (Android)

### Creating a New Project

\`\`\`bash
npx create-expo-app MyApp
cd MyApp
npm start
\`\`\`

## Core Concepts

### Components

\`\`\`jsx
import { View, Text, StyleSheet } from 'react-native';

export default function WelcomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to My App!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});
\`\`\`

### Navigation

\`\`\`jsx
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
\`\`\`

### State Management

\`\`\`jsx
import { useState } from 'react';
import { Button, Text, View } from 'react-native';

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <View>
      <Text>Count: {count}</Text>
      <Button title="Increment" onPress={() => setCount(count + 1)} />
    </View>
  );
}
\`\`\`

## Building a Complete App

### Project Structure

\`\`\`
src/
├── components/
│   ├── Button.tsx
│   └── Card.tsx
├── screens/
│   ├── HomeScreen.tsx
│   └── ProfileScreen.tsx
├── navigation/
│   └── AppNavigator.tsx
├── hooks/
│   └── useAuth.ts
└── services/
    └── api.ts
\`\`\`

### API Integration

\`\`\`typescript
import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.example.com',
});

export const getPosts = async () => {
  const response = await api.get('/posts');
  return response.data;
};
\`\`\`

## Performance Tips

1. **Use FlatList** for long lists
2. **Memoize components** with React.memo
3. **Optimize images** with proper sizing
4. **Avoid inline styles** in render methods

## Conclusion

React Native is a powerful framework for building mobile apps. With its growing ecosystem and community support, it's an excellent choice for cross-platform development.

---

*Building a mobile app? Share your project at our next DSEC showcase!*
`,
  },
  {
    id: "7",
    slug: "dsec-hackathon-2024-recap",
    title: "DSEC Hackathon 2024: A Weekend of Innovation",
    excerpt:
      "Recap of our biggest hackathon yet! See the winning projects and highlights from 48 hours of coding.",
    coverImage: "/blog/hackathon-2024.jpg",
    category: "community",
    tags: ["hackathon", "community", "projects", "dsec"],
    authors: [blogAuthors["alex-chen"], blogAuthors["sarah-kim"]],
    publishedAt: "2024-01-01T12:00:00Z",
    readingTime: 6,
    featured: false,
    views: 890,
    content: `
# DSEC Hackathon 2024: A Weekend of Innovation

Last weekend, over 150 students gathered for DSEC's biggest hackathon yet. Here's a recap of the incredible 48 hours of coding, creativity, and collaboration.

## By the Numbers

- **150+** participants
- **35** teams
- **15** sponsors
- **$10,000** in prizes
- **48** hours of hacking

## Winning Projects

### First Place: EcoTrack

A sustainability app that gamifies reducing your carbon footprint.

**Team:** Green Coders
**Tech Stack:** React Native, Node.js, MongoDB

### Second Place: StudyBuddy AI

An AI-powered study companion that creates personalized quizzes.

**Team:** The Learners
**Tech Stack:** Python, OpenAI API, Next.js

### Third Place: AccessMap

An accessibility-focused navigation app for wheelchair users.

**Team:** Accessible Tech
**Tech Stack:** Flutter, Google Maps API, Firebase

## Highlights

### Opening Ceremony

The hackathon kicked off with keynotes from industry leaders and sponsors. Participants received their challenge briefs and formed teams.

### Workshops

Throughout the event, we hosted workshops on:

- Building with AI APIs
- UI/UX Design Principles
- Pitching Your Startup

### Midnight Pizza

At 2 AM, we fueled the hackers with pizza and energy drinks. The dedication was incredible!

### Final Presentations

Teams had 3 minutes to pitch their projects to judges from Google, Microsoft, and Atlassian.

## What Participants Said

> "This was my first hackathon, and it exceeded all expectations. I learned so much and made amazing friends." - First-time hacker

> "The mentors were incredibly helpful. They helped us debug our code at 3 AM!" - Team Lead

## Thank You to Our Sponsors

- Google
- Microsoft
- Atlassian
- Amazon Web Services
- GitHub

## Looking Ahead

Mark your calendars for DSEC Hackathon 2025! Registration opens in October.

---

*Want to participate in our next hackathon? Join the DSEC community to get early access!*
`,
  },
  {
    id: "8",
    slug: "ci-cd-pipelines-with-github-actions",
    title: "CI/CD Pipelines with GitHub Actions: A Practical Guide",
    excerpt:
      "Automate your development workflow with GitHub Actions. Learn to build, test, and deploy your applications automatically.",
    coverImage: "/blog/github-actions.jpg",
    category: "devops",
    tags: ["github-actions", "ci-cd", "devops", "automation"],
    authors: [blogAuthors["james-wong"]],
    publishedAt: "2023-12-28T09:00:00Z",
    readingTime: 13,
    featured: false,
    views: 1780,
    content: `
# CI/CD Pipelines with GitHub Actions: A Practical Guide

Continuous Integration and Continuous Deployment (CI/CD) are essential practices for modern software development. GitHub Actions makes it easy to automate your workflows.

## What is CI/CD?

- **Continuous Integration (CI)**: Automatically build and test code changes
- **Continuous Deployment (CD)**: Automatically deploy to production
- **Continuous Delivery**: Prepare releases for manual deployment

## Getting Started

Create a workflow file in \`.github/workflows/\`:

\`\`\`yaml
# .github/workflows/ci.yml
name: CI Pipeline

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  build:
    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'npm'

      - name: Install dependencies
        run: npm ci

      - name: Run tests
        run: npm test

      - name: Build
        run: npm run build
\`\`\`

## Common Patterns

### Matrix Builds

Test across multiple versions:

\`\`\`yaml
jobs:
  test:
    runs-on: ubuntu-latest
    strategy:
      matrix:
        node-version: [18, 20, 22]

    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: \${{ matrix.node-version }}
      - run: npm ci
      - run: npm test
\`\`\`

### Deployment

Deploy to Vercel:

\`\`\`yaml
jobs:
  deploy:
    runs-on: ubuntu-latest
    if: github.ref == 'refs/heads/main'

    steps:
      - uses: actions/checkout@v4
      - uses: amondnet/vercel-action@v25
        with:
          vercel-token: \${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: \${{ secrets.ORG_ID }}
          vercel-project-id: \${{ secrets.PROJECT_ID }}
          vercel-args: '--prod'
\`\`\`

### Caching

Speed up builds with caching:

\`\`\`yaml
- name: Cache node modules
  uses: actions/cache@v4
  with:
    path: ~/.npm
    key: \${{ runner.os }}-node-\${{ hashFiles('**/package-lock.json') }}
    restore-keys: |
      \${{ runner.os }}-node-
\`\`\`

## Best Practices

1. **Keep workflows simple** - One job per concern
2. **Use secrets** - Never hardcode credentials
3. **Cache dependencies** - Speed up builds
4. **Run tests in parallel** - Faster feedback
5. **Use branch protection** - Require passing checks

## Conclusion

GitHub Actions transforms how teams build and deploy software. Start with a simple CI pipeline and gradually add more automation as your needs grow.

---

*Need help setting up CI/CD? Ask in the DSEC Discord!*
`,
  },
];

// Helper functions
export function calculateReadingTime(content: string): number {
  const wordsPerMinute = 200;
  const words = content.trim().split(/\s+/).length;
  return Math.ceil(words / wordsPerMinute);
}

export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-AU", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export function getRelativeTime(dateString: string): string {
  const date = new Date(dateString);
  const now = new Date();
  const diffInSeconds = Math.floor((now.getTime() - date.getTime()) / 1000);

  if (diffInSeconds < 60) return "Just now";
  if (diffInSeconds < 3600) return `${Math.floor(diffInSeconds / 60)} min ago`;
  if (diffInSeconds < 86400)
    return `${Math.floor(diffInSeconds / 3600)} hours ago`;
  if (diffInSeconds < 604800)
    return `${Math.floor(diffInSeconds / 86400)} days ago`;
  if (diffInSeconds < 2592000)
    return `${Math.floor(diffInSeconds / 604800)} weeks ago`;
  return formatDate(dateString);
}

// Data access functions (simulating backend)
export async function getBlogPosts(
  params: BlogSearchParams = {}
): Promise<BlogListResponse> {
  const {
    query = "",
    category,
    tag,
    page = 1,
    pageSize = 10,
    featured,
  } = params;

  let filteredPosts = [...blogPosts];

  // Filter by search query
  if (query) {
    const lowerQuery = query.toLowerCase();
    filteredPosts = filteredPosts.filter(
      (post) =>
        post.title.toLowerCase().includes(lowerQuery) ||
        post.excerpt.toLowerCase().includes(lowerQuery) ||
        post.tags.some((t) => t.toLowerCase().includes(lowerQuery)) ||
        post.authors.some((a) => a.name.toLowerCase().includes(lowerQuery))
    );
  }

  // Filter by category
  if (category) {
    filteredPosts = filteredPosts.filter((post) => post.category === category);
  }

  // Filter by tag
  if (tag) {
    filteredPosts = filteredPosts.filter((post) => post.tags.includes(tag));
  }

  // Filter by featured
  if (featured !== undefined) {
    filteredPosts = filteredPosts.filter((post) => post.featured === featured);
  }

  // Sort by date (newest first)
  filteredPosts.sort(
    (a, b) =>
      new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );

  // Paginate
  const total = filteredPosts.length;
  const totalPages = Math.ceil(total / pageSize);
  const startIndex = (page - 1) * pageSize;
  const paginatedPosts = filteredPosts.slice(startIndex, startIndex + pageSize);

  return {
    posts: paginatedPosts,
    total,
    page,
    pageSize,
    totalPages,
  };
}

export async function getBlogPostBySlug(
  slug: string
): Promise<BlogPost | null> {
  return blogPosts.find((post) => post.slug === slug) || null;
}

export async function getFeaturedPosts(): Promise<BlogPost[]> {
  return blogPosts.filter((post) => post.featured);
}

export async function getRecentPosts(limit: number = 5): Promise<BlogPost[]> {
  return [...blogPosts]
    .sort(
      (a, b) =>
        new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
    )
    .slice(0, limit);
}

export async function getRelatedPosts(
  slug: string,
  limit: number = 3
): Promise<BlogPost[]> {
  const currentPost = await getBlogPostBySlug(slug);
  if (!currentPost) return [];

  return blogPosts
    .filter((post) => post.slug !== slug)
    .map((post) => {
      let score = 0;
      if (post.category === currentPost.category) score += 3;
      post.tags.forEach((tag) => {
        if (currentPost.tags.includes(tag)) score += 1;
      });
      return { post, score };
    })
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map(({ post }) => post);
}

export async function getAllTags(): Promise<string[]> {
  const tags = new Set<string>();
  blogPosts.forEach((post) => {
    post.tags.forEach((tag) => tags.add(tag));
  });
  return Array.from(tags).sort();
}

export function getCategoryInfo(category: BlogCategory): BlogCategoryInfo {
  return (
    blogCategories.find((c) => c.id === category) || {
      id: category,
      label: category,
      description: "",
      color: "primary" as const,
    }
  );
}
