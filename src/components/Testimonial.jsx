import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Swiper, { Navigation, Pagination } from "swiper";
import { HiOutlineChevronLeft, HiOutlineChevronRight } from "react-icons/hi";
import "swiper/css";
import Image from "next/image";

const swiper = new Swiper(".swiper", {
  modules: [Navigation, Pagination],
  // Optional parameters
  speed: 500,
  effect: "fade",
  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
  },
});

const testimonialData = [
  {
    title:
      "The free courses are so good! Very well explained at a very feasible pace.",
    author: "Sarah De Santa",
    image: "/avatar-1.jpg",
  },
  {
    title:
      "This app is amazing! I use it every single day. I've learned so much.",
    author: "Jonathan Davis",
    image: "/avatar-2.jpg",
  },
  {
    title:
      "Why haven't I come across this app earlier?! The things I learned the past week. Incredible!",
    author: "Michael Scotch",
    image: "/avatar-3.jpg",
  },
];
const Testimonial = () => {
  return (
    <Container
      maxWidth='xl'
      sx={{ py: { sm: "60px", md: "40px", lg: "120px" }, px: { sm: "32px" } }}
      className='testimonial-container'
    >
      <Box
        className='swiper testimonial-cover'
        sx={{
          maxWidth: { sm: "100%", md: "90%", lg: "66%" },
          backgroundColor: "primary.light",
          borderRadius: "15px",
        }}
      >
        <Box className='swiper-wrapper'>
          {testimonialData.map((data, index) => {
            const { title, author, image } = data;
            return (
              <Box
                key={index}
                className='swiper-slide'
                sx={{
                  pt: { sm: "120px", md: "120px" },
                  pb: { sm: "16px", md: "32px" },
                  position: "relative",
                  display: "flex",
                  alignItems: "center",
                  justifyItems: "center",
                  flexDirection: "column",
                }}
              >
                <Box
                  className='testimonial-img'
                  sx={{
                    height: "70px",
                    width: "70px",
                    border: "4px solid #7b5eed",
                    position: "absolute",
                    top: "20px",
                    borderRadius: "100%",
                    display: "flex",
                    transform: "translateX(-50%)",
                    left: "50%",
                    overflow: "hidden",
                  }}
                >
                  <Image
                    layout='fill'
                    src={image}
                    alt='testimonial-img'
                    priority
                  />
                </Box>
                <Typography
                  className='testimonial-title'
                  variant='h1'
                  color='initial'
                  sx={{
                    maxWidth: { sm: "60%", md: "60%", lg: "66%" },
                    fontSize: { sm: "18px", lg: "24px" },
                    color: "primary.main",
                    fontWeight: 500,
                    textAlign: "center",
                    marginBottom: "20px",
                  }}
                >
                  {title}
                </Typography>
                <Typography
                  className='testimonial-author'
                  variant='span'
                  color='initial'
                  sx={{
                    fontSize: { sm: "15px", md: "18px" },
                    color: "primary.main",
                    textAlign: "center",
                  }}
                >
                  {author}
                </Typography>
              </Box>
            );
          })}
        </Box>

        <Box className='swiper-pagination' />

        <Button
          variant='contained'
          className='swiper-button-prev'
          sx={{
            color: "#fff",
            minHeight: "40px",
            minWidth: "40px",
            borderRadius: "100%",
            padding: "0",
            boxShadow: "none",
            position: "absolute",
            top: "50%",
            left: "2%",
            zIndex: "11",
            transform: "translateY(-50%)",
            ":hover": {
              boxShadow: "none",
              backgroundColor: "primary.dark",
            },
          }}
        >
          <HiOutlineChevronLeft fontSize='30px' />
        </Button>

        <Button
          variant='contained'
          className='swiper-button-next'
          sx={{
            color: "#fff",
            minHeight: "40px",
            minWidth: "40px",
            borderRadius: "100%",
            padding: "0",
            bosmhadow: "none",
            position: "absolute",
            top: "50%",
            right: "2%",
            zIndex: "11",
            transform: "translateY(-50%)",
            ":hover": {
              boxShadow: "none",
              backgroundColor: "primary.dark",
            },
          }}
        >
          <HiOutlineChevronRight fontSize='30px' />
        </Button>

        <Box className='swiper-scrollbar' />
        <Box
          component='img'
          sx={{
            position: "absolute",
            opacity: ".5",
            objectFit: "contain",
            left: "5%",
            top: "-20px",
            zIndex: "100",
            display: { sm: "none", md: "block" },
          }}
          alt='quote-icon'
          src='/quote-icon-left.svg'
          className='quote-left'
        />
        <Box
          component='img'
          sx={{
            position: "absolute",
            opacity: ".5",
            objectFit: "contain",
            right: "5%",
            bottom: "-20px",
            zIndex: "100",
            display: { sm: "none", md: "block" },
          }}
          alt='quote-icon'
          src='/quote-icon-right.svg'
          className='quote-right'
        />
      </Box>
    </Container>
  );
};

export default Testimonial;
