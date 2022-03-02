import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { FiBook, FiUserPlus, FiRefreshCcw } from "react-icons/fi";

const data = [
  {
    title: "Thousands of Courses",
    desc: "Make your stunning app website in minutes with this awesome template",
    icon: <FiBook color='#7b5eed' size='32px' />,
  },
  {
    title: "Top-rated teachers",
    desc: "Make your stunning app website in minutes with this awesome template",
    icon: <FiUserPlus color='#7b5eed' size='32px' />,
  },
  {
    title: "Lifetime access",
    desc: "Make your stunning app website in minutes with this awesome template",
    icon: <FiRefreshCcw color='#7b5eed' size='32px' />,
  },
];
const Hero = () => {
  return (
    <Box sx={{ py: { sm: "60px", lg: "120px" } }} className='hero-container'>
      <Container sx={{ px: { sm: "32px" } }} maxWidth='xl'>
        <Box>
          <Box className='hero-content'>
            <Typography
              as='h1'
              color='text.primary'
              sx={{
                width: { sm: "100%", md: "70%", lg: "75%" },
                mx: "auto",
                fontSize: { sm: "13vw", md: "64px", lg: "72px" },
                fontWeight: "bold",
                textAlign: "center",
                lineHeight: { sm: "14vw", md: "70px", lg: "78px" },
              }}
            >
              Learn anything you want with{" "}
              <Typography
                as='span'
                color='primary.main'
                sx={{
                  fontSize: { sm: "13vw", md: "64px", lg: "72px" },
                  fontWeight: "bold",
                  textAlign: "center",
                  lineHeight: { sm: "14vw", md: "70px", lg: "78px" },
                }}
              >
                CourseApp
              </Typography>
            </Typography>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                columnGap: "10px",
                rowGap: "20px",
                marginTop: { sm: "40px", md: "50px" },
                marginBottom: "10px",
                alignItems: "center",
                flexDirection: { sm: "column", md: "row" },
              }}
            >
              <Button
                variant='contained'
                sx={{
                  py: "10px",
                  px: "24px",
                  color: "#fff",
                  px: 3,
                  width: "max-content",
                  display: "inline-block",
                  borderRadius: "40px",
                  textTransform: "none",
                  fontSize: { sm: 18 },
                  letterSpacing: 0.4,
                  fontWeight: 700,
                  boxShadow: "none",

                  border: "2px solid transparent",
                  ":hover": {
                    boxShadow: "none",
                    backgroundColor: "primary.dark",
                  },
                }}
              >
                Learn More
              </Button>
              <Button
                variant='outlined'
                sx={{
                  color: "primary.main",
                  py: "10px",
                  px: "24px",
                  display: "inline-block",
                  width: "max-content",
                  ml: 1,
                  borderRadius: "40px",
                  textTransform: "none",
                  fontSize: { sm: 18 },
                  letterSpacing: 0.4,
                  boxShadow: "none",
                  fontWeight: 700,
                  border: "2px solid #7b5eed",
                  ":hover": {
                    borderWidth: "2px",
                    boxShadow: "none",
                    backgroundColor: "primary.main",
                    color: "#fff",
                  },
                }}
              >
                Watch Video
              </Button>
            </Box>
          </Box>

          <Box
            src='/hero-image.png'
            component='img'
            alt='hero-image'
            className='hero-img'
            sx={{
              position: "relative",
              width: { sm: "100%", md: "75%", lg: "50%" },
              marginTop: { sm: "80px", md: "60px", lg: "0" },
              display: "block",
              mx: "auto",
              zIndex: 1,
            }}
          />
        </Box>
        <Box
          className='specifications'
          sx={{
            display: "flex",
            columnGap: "32px",
            pt: { sm: "60px", lg: "120px" },
            flexDirection: { sm: "column", md: "row" },
            rowGap: "60px",
          }}
        >
          {data.map((d, index) => {
            const { title, desc, icon } = d;
            return (
              <Box
                key={index}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
                  px: { sm: "24px", md: "0px", xl: "40px" },
                }}
              >
                <Box
                  as='span'
                  sx={{
                    height: "80px",
                    width: "80px",
                    borderRadius: "100%",
                    backgroundColor: "primary.light",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "30px",
                  }}
                >
                  {icon}
                </Box>

                <Typography
                  variant='h3'
                  sx={{
                    fontWeight: 700,
                    fontSize: { sm: "20px", md: "18px", lg: "24px" },
                    color: "text.primary",
                    mb: "10px",
                  }}
                >
                  {title}
                </Typography>
                <Typography
                  variant='p'
                  sx={{
                    color: "text.primary",
                  }}
                >
                  {desc}
                </Typography>
              </Box>
            );
          })}
        </Box>
      </Container>
    </Box>
  );
};

export default Hero;
