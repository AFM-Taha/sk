import React, { useState } from 'react';
import {
    Box,
    Container,
    Typography,
    Grid,
    Card,
    CardMedia,
    CardContent,
    Chip,
    InputAdornment,
    TextField,
    Pagination,
    Avatar,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

const Blog = () => {
    const [search, setSearch] = useState('');

    // Sample blog posts data
    const featuredPost = {
        id: 1,
        title: "The Future of Web Development: Trends to Watch in 2024",
        excerpt: "Explore the latest trends shaping the future of web development, from AI integration to advanced frameworks...",
        image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200&auto=format&fit=crop&q=60",
        category: "Technology",
        author: {
            name: "John Doe",
            avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&auto=format&fit=crop&q=60"
        },
        date: "Mar 15, 2024",
        readTime: "5 min read"
    };

    const blogPosts = [
        {
            id: 2,
            title: "Getting Started with React and Material-UI",
            excerpt: "Learn how to build beautiful React applications using Material-UI components...",
            image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&auto=format&fit=crop&q=60",
            category: "Development",
            author: {
                name: "Sarah Johnson",
                avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop&q=60"
            },
            date: "Mar 12, 2024",
            readTime: "8 min read"
        },
        {
            id: 3,
            title: "Understanding UI/UX Design Principles",
            excerpt: "Discover the fundamental principles that make great user interfaces...",
            image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=800&auto=format&fit=crop&q=60",
            category: "Design",
            author: {
                name: "Mike Wilson",
                avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&auto=format&fit=crop&q=60"
            },
            date: "Mar 10, 2024",
            readTime: "6 min read"
        },
        {
            id: 4,
            title: "The Rise of Artificial Intelligence in Modern Tech",
            excerpt: "Exploring how AI is transforming the technology landscape...",
            image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&auto=format&fit=crop&q=60",
            category: "Technology",
            author: {
                name: "Emily Brown",
                avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&auto=format&fit=crop&q=60"
            },
            date: "Mar 8, 2024",
            readTime: "7 min read"
        },
        {
            id: 5,
            title: "Building Scalable Applications with Node.js",
            excerpt: "Learn the best practices for creating scalable backend applications...",
            image: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=800&auto=format&fit=crop&q=60",
            category: "Development",
            author: {
                name: "David Chen",
                avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=60"
            },
            date: "Mar 6, 2024",
            readTime: "10 min read"
        },
        {
            id: 6,
            title: "Mastering CSS Grid and Flexbox",
            excerpt: "A comprehensive guide to modern CSS layout techniques...",
            image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=800&auto=format&fit=crop&q=60",
            category: "Development",
            author: {
                name: "Lisa Taylor",
                avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&auto=format&fit=crop&q=60"
            },
            date: "Mar 4, 2024",
            readTime: "9 min read"
        }
    ];


    const categories = [
        { name: "Technology", count: 12 },
        { name: "Development", count: 8 },
        { name: "Design", count: 6 },
        { name: "Business", count: 4 },
        { name: "Tutorial", count: 7 },
    ];

    return (
        <Container maxWidth="lg" sx={{ py: 8 }}>
            {/* Search and Categories Section */}
            <Grid container spacing={4}>
                <Grid item xs={12} md={8}>
                    {/* Search Bar */}
                    <TextField
                        fullWidth
                        variant="outlined"
                        placeholder="Search articles..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        sx={{
                            mb: 4,
                            '& .MuiOutlinedInput-root': {
                                borderRadius: 2,
                                bgcolor: '#fff',
                            }
                        }}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <SearchIcon />
                                </InputAdornment>
                            ),
                        }}
                    />

                    {/* Featured Post */}
                    <Card
                        sx={{
                            mb: 6,
                            borderRadius: 3,
                            boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
                        }}
                    >
                        <CardMedia
                            component="img"
                            height="400"
                            image={featuredPost.image}
                            alt={featuredPost.title}
                        />
                        <CardContent sx={{ p: 3 }}>
                            <Chip
                                label={featuredPost.category}
                                sx={{
                                    mb: 2,
                                    bgcolor: '#7B2FF2',
                                    color: '#fff',
                                    fontWeight: 500
                                }}
                            />
                            <Typography
                                variant="h4"
                                sx={{
                                    fontWeight: 700,
                                    mb: 2,
                                    fontSize: { xs: '1.5rem', md: '2rem' }
                                }}
                            >
                                {featuredPost.title}
                            </Typography>
                            <Typography
                                color="text.secondary"
                                sx={{ mb: 2 }}
                            >
                                {featuredPost.excerpt}
                            </Typography>
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                                <Avatar src={featuredPost.author.avatar} />
                                <Box>
                                    <Typography variant="subtitle2">
                                        {featuredPost.author.name}
                                    </Typography>
                                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                                        <Typography variant="caption" color="text.secondary">
                                            {featuredPost.date}
                                        </Typography>
                                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                                            <AccessTimeIcon sx={{ fontSize: 14, color: 'text.secondary' }} />
                                            <Typography variant="caption" color="text.secondary">
                                                {featuredPost.readTime}
                                            </Typography>
                                        </Box>
                                    </Box>
                                </Box>
                            </Box>
                        </CardContent>
                    </Card>

                    {/* Blog Posts Grid */}
                    <Grid container spacing={4}>
                        {blogPosts.map((post) => (
                            <Grid item xs={12} sm={6} key={post.id}>
                                <Card
                                    sx={{
                                        height: '100%',
                                        borderRadius: 3,
                                        boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
                                        transition: 'transform 0.2s',
                                        '&:hover': {
                                            transform: 'translateY(-4px)'
                                        }
                                    }}
                                >
                                    <CardMedia
                                        component="img"
                                        height="200"
                                        image={post.image}
                                        alt={post.title}
                                    />
                                    <CardContent sx={{ p: 3 }}>
                                        <Chip
                                            label={post.category}
                                            size="small"
                                            sx={{
                                                mb: 2,
                                                bgcolor: '#7B2FF2',
                                                color: '#fff'
                                            }}
                                        />
                                        <Typography
                                            variant="h6"
                                            sx={{
                                                fontWeight: 700,
                                                mb: 1,
                                                minHeight: 56
                                            }}
                                        >
                                            {post.title}
                                        </Typography>
                                        <Typography
                                            color="text.secondary"
                                            sx={{
                                                mb: 2,
                                                display: '-webkit-box',
                                                overflow: 'hidden',
                                                WebkitBoxOrient: 'vertical',
                                                WebkitLineClamp: 3,
                                            }}
                                        >
                                            {post.excerpt}
                                        </Typography>
                                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                                            <Avatar src={post.author.avatar} sx={{ width: 32, height: 32 }} />
                                            <Box>
                                                <Typography variant="caption" fontWeight={500}>
                                                    {post.author.name}
                                                </Typography>
                                                <Typography variant="caption" color="text.secondary" display="block">
                                                    {post.date} · {post.readTime}
                                                </Typography>
                                            </Box>
                                        </Box>
                                    </CardContent>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>

                    {/* Pagination */}
                    <Box sx={{ display: 'flex', justifyContent: 'center', mt: 6 }}>
                        <Pagination count={10} color="primary" />
                    </Box>
                </Grid>

                {/* Sidebar */}
                <Grid item xs={12} md={4}>
                    <Box sx={{ position: 'sticky', top: 20 }}>
                        {/* Categories */}
                        <Card sx={{ p: 3, borderRadius: 3, mb: 4 }}>
                            <Typography variant="h6" sx={{ fontWeight: 700, mb: 3 }}>
                                Categories
                            </Typography>
                            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                                {categories.map((category) => (
                                    <Chip
                                        key={category.name}
                                        label={`${category.name} (${category.count})`}
                                        onClick={() => { }}
                                        sx={{
                                            m: 0.5,
                                            '&:hover': {
                                                bgcolor: '#7B2FF2',
                                                color: '#fff'
                                            }
                                        }}
                                    />
                                ))}
                            </Box>
                        </Card>

                        {/* Popular Posts */}
                        <Card sx={{ p: 3, borderRadius: 3 }}>
                            <Typography variant="h6" sx={{ fontWeight: 700, mb: 3 }}>
                                Popular Posts
                            </Typography>
                            {blogPosts.slice(0, 3).map((post) => (
                                <Box
                                    key={post.id}
                                    sx={{
                                        display: 'flex',
                                        gap: 2,
                                        mb: 3,
                                        '&:last-child': { mb: 0 }
                                    }}
                                >
                                    <img
                                        src={post.image}
                                        alt={post.title}
                                        style={{
                                            width: 80,
                                            height: 80,
                                            borderRadius: 8,
                                            objectFit: 'cover'
                                        }}
                                    />
                                    <Box>
                                        <Typography
                                            variant="subtitle2"
                                            sx={{
                                                fontWeight: 600,
                                                mb: 1,
                                                display: '-webkit-box',
                                                overflow: 'hidden',
                                                WebkitBoxOrient: 'vertical',
                                                WebkitLineClamp: 2,
                                            }}
                                        >
                                            {post.title}
                                        </Typography>
                                        <Typography variant="caption" color="text.secondary">
                                            {post.date}
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

export default Blog