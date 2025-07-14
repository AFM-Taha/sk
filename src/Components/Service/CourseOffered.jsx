import React from "react";
import Slider from "react-slick";
import { Box, Typography, Card, CardMedia, CardContent, IconButton } from "@mui/material";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const courses = [
    {
        title: "Full Stack Web Development",
        image: "/assets/images/course_offer_1.png",
    },
    {
        title: "Game Development with Unity",
        image: "/assets/images/course_offer_2.png",
    },
    {
        title: "Blockchain",
        image: "/assets/images/course_offer_3.png",
    },
];


export default function CoursesOffered() {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3, // Number of cards visible at once
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000, // 5 seconds
        responsive: [
            {
                breakpoint: 900,
                settings: { slidesToShow: 2 }
            },
            {
                breakpoint: 600,
                settings: { slidesToShow: 1 }
            }
        ]
    };

    return (
        <Box
            sx={{
                background: 'linear-gradient(45deg, rgba(106, 17, 203, 1) 0%, rgba(37, 117, 252, 1) 100%)',
                // color: 'white',
                // background: "linear-gradient(90deg, #a18cd1 0%, #fbc2eb 100%)",
                px: { xs: 2, md: 8 },
                py: { xs: 4, md: 6 },
                borderRadius: 2,
                overflow: 'hidden'
            }}
            id="course-offered"
        >
            <Typography sx={{
                color: '#14141E'
            }} variant="h4" fontWeight={700} mb={1}>
                Course Offered
            </Typography>
            <Typography color='#fff' variant="subtitle1"  mb={4}>
                Tech Courses that Make You Job-Ready
            </Typography>
            <Slider {...settings}>
                {courses.map((course, idx) => (
                    <Box key={idx} px={1}>
                        <Card
                            sx={{
                                borderRadius: 4,
                                overflow: "hidden",
                                boxShadow: 2,
                                minHeight: 260,
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "space-between",
                            }}
                        >
                            <CardMedia
                                component="img"
                                height="220"
                                image={course.image}
                                alt={course.title}
                            />
                            <CardContent sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", pt: 2 }}>
                                <Typography fontWeight={700} fontSize={18}>
                                    {course.title}
                                </Typography>
                                <IconButton>
                                    <ArrowForwardIosIcon />
                                </IconButton>
                            </CardContent>
                        </Card>
                    </Box>
                ))}
            </Slider>
        </Box>
    );
}