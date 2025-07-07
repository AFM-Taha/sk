
import React from 'react';
import {
    Box,
    Container,
    Typography,
    Grid,
    Avatar,
    Chip,
    Divider,
    Card,
    Button,
} from '@mui/material';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import ShareIcon from '@mui/icons-material/Share';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const BlogDetail = () => {
    // Sample blog post data
    const post = {
        title: "The Future of Web Development: Trends to Watch in 2024",
        image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200&auto=format&fit=crop&q=60",
        category: "Technology",
        author: {
            name: "John Doe",
            avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&auto=format&fit=crop&q=60",
            bio: "Senior Web Developer with 10+ years of experience in full-stack development. Passionate about new technologies and teaching others."
        },
        date: "Mar 15, 2024",
        readTime: "5 min read",
        content: `
            <p>The landscape of web development is constantly evolving, with new technologies and methodologies emerging at a rapid pace. As we move through 2024, several key trends are shaping the future of how we build and interact with web applications.</p>

            <h2>1. AI-Driven Development</h2>
            <p>Artificial Intelligence is no longer just a buzzword in web development. It's becoming an integral part of how we build and maintain web applications. From AI-powered code completion to automated testing and optimization, developers are leveraging AI tools to increase productivity and code quality.</p>

            <h2>2. WebAssembly Revolution</h2>
            <p>WebAssembly (Wasm) continues to gain traction, enabling high-performance code execution in web browsers. This technology allows developers to write code in languages like C++ and Rust and run it alongside JavaScript, opening new possibilities for web applications.</p>

            <h2>3. Edge Computing</h2>
            <p>The rise of edge computing is transforming how we think about web application architecture. By processing data closer to where it's needed, edge computing reduces latency and improves user experience.</p>
        `,
        tags: ["Web Development", "Technology", "Programming", "AI", "Edge Computing"],
        relatedPosts: [
            {
                id: 1,
                title: "Getting Started with React and Material-UI",
                image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&auto=format&fit=crop&q=60",
                date: "Mar 12, 2024"
            },
            {
                id: 2,
                title: "Understanding UI/UX Design Principles",
                image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=800&auto=format&fit=crop&q=60",
                date: "Mar 10, 2024"
            },
            {
                id: 3,
                title: "The Rise of Artificial Intelligence in Modern Tech",
                image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&auto=format&fit=crop&q=60",
                date: "Mar 8, 2024"
            }
        ]
    };

    return (
        <Container maxWidth="lg" sx={{ py: 8 }}>
            <Grid container spacing={4}>
                {/* Main Content */}
                <Grid item xs={12} md={8}>
                    {/* Header */}
                    <Chip
                        label={post.category}
                        sx={{
                            mb: 2,
                            bgcolor: '#7B2FF2',
                            color: '#fff',
                            fontWeight: 500
                        }}
                    />
                    <Typography
                        variant="h1"
                        sx={{
                            fontSize: { xs: '2rem', md: '2.5rem' },
                            fontWeight: 700,
                            mb: 3
                        }}
                    >
                        {post.title}
                    </Typography>

                    {/* Author Info */}
                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: 2,
                            mb: 4
                        }}
                    >
                        <Avatar
                            src={post.author.avatar}
                            sx={{ width: 48, height: 48 }}
                        />
                        <Box>
                            <Typography variant="subtitle1" fontWeight={600}>
                                {post.author.name}
                            </Typography>
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                                <Typography variant="body2" color="text.secondary">
                                    {post.date}
                                </Typography>
                                <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                                    <AccessTimeIcon sx={{ fontSize: 16, color: 'text.secondary' }} />
                                    <Typography variant="body2" color="text.secondary">
                                        {post.readTime}
                                    </Typography>
                                </Box>
                            </Box>
                        </Box>
                    </Box>

                    {/* Featured Image */}
                    <Box
                        sx={{
                            width: '100%',
                            height: { xs: 300, md: 400 },
                            borderRadius: 3,
                            overflow: 'hidden',
                            mb: 4
                        }}
                    >
                        <img
                            src={post.image}
                            alt={post.title}
                            style={{
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover'
                            }}
                        />
                    </Box>

                    {/* Content */}
                    <Box
                        sx={{
                            '& h2': {
                                fontSize: '1.5rem',
                                fontWeight: 700,
                                mt: 4,
                                mb: 2
                            },
                            '& p': {
                                fontSize: '1.1rem',
                                lineHeight: 1.8,
                                color: '#444',
                                mb: 2
                            }
                        }}
                        dangerouslySetInnerHTML={{ __html: post.content }}
                    />

                    {/* Tags */}
                    <Box sx={{ mt: 4, mb: 6 }}>
                        {post.tags.map((tag) => (
                            <Chip
                                key={tag}
                                label={tag}
                                sx={{
                                    mr: 1,
                                    mb: 1,
                                    '&:hover': {
                                        bgcolor: '#7B2FF2',
                                        color: '#fff'
                                    }
                                }}
                            />
                        ))}
                    </Box>

                    {/* Share Buttons */}
                    <Box sx={{ display: 'flex', gap: 2, mb: 6 }}>
                        <Typography variant="h6" sx={{ mr: 2 }}>
                            Share:
                        </Typography>
                        <Button
                            startIcon={<FacebookIcon />}
                            sx={{ minWidth: 'auto', color: '#1877F2' }}
                        />
                        <Button
                            startIcon={<TwitterIcon />}
                            sx={{ minWidth: 'auto', color: '#1DA1F2' }}
                        />
                        <Button
                            startIcon={<LinkedInIcon />}
                            sx={{ minWidth: 'auto', color: '#0A66C2' }}
                        />
                    </Box>

                    {/* Author Bio */}
                    <Card sx={{ p: 3, borderRadius: 3, mb: 6 }}>
                        <Box sx={{ display: 'flex', gap: 3 }}>
                            <Avatar
                                src={post.author.avatar}
                                sx={{ width: 80, height: 80 }}
                            />
                            <Box>
                                <Typography variant="h6" sx={{ mb: 1 }}>
                                    About {post.author.name}
                                </Typography>
                                <Typography color="text.secondary">
                                    {post.author.bio}
                                </Typography>
                            </Box>
                        </Box>
                    </Card>
                </Grid>

                {/* Sidebar */}
                <Grid item xs={12} md={4}>
                    <Box sx={{ position: 'sticky', top: 20 }}>
                        {/* Related Posts */}
                        <Card sx={{ p: 3, borderRadius: 3 }}>
                            <Typography variant="h6" sx={{ fontWeight: 700, mb: 3 }}>
                                Related Posts
                            </Typography>
                            {post.relatedPosts.map((relatedPost) => (
                                <Box
                                    key={relatedPost.id}
                                    sx={{
                                        display: 'flex',
                                        gap: 2,
                                        mb: 3,
                                        cursor: 'pointer',
                                        '&:last-child': { mb: 0 },
                                        '&:hover': {
                                            '& .post-title': {
                                                color: '#7B2FF2'
                                            }
                                        }
                                    }}
                                >
                                    <img
                                        src={relatedPost.image}
                                        alt={relatedPost.title}
                                        style={{
                                            width: 80,
                                            height: 80,
                                            borderRadius: 8,
                                            objectFit: 'cover'
                                        }}
                                    />
                                    <Box>
                                        <Typography
                                            className="post-title"
                                            variant="subtitle2"
                                            sx={{
                                                fontWeight: 600,
                                                mb: 1,
                                                transition: 'color 0.2s',
                                            }}
                                        >
                                            {relatedPost.title}
                                        </Typography>
                                        <Typography variant="caption" color="text.secondary">
                                            {relatedPost.date}
                                        </Typography>
                                    </Box>
                                </Box>
                            ))}
                        </Card>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    );
};

export default BlogDetail