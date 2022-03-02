import { Container, Typography } from "@mui/material";
import { Box } from "@mui/system";

const Features = () => {
  return (
    <Box sx={{ pb: { sm: "60px", lg: "120px" } }} id='features'>
      <Container maxWidth='xl' sx={{ px: { sm: "32px" } }}>
        <Box
          className='features-container'
          sx={{
            display: "flex",
            flexDirection: {
              sm: "column-reverse",
              md: "row",
            },
            alignItems: "center",
            py: { sm: "24px", md: "60px", lg: "40px" },
            rowGap: "120px",
          }}
        >
          <Box
            className='features-img-box'
            sx={{
              flex: "1",
              pr: { sm: "0", md: "50px", lg: "100px" },
              position: "relative",
            }}
          >
            <Box
              component='img'
              className='features-img'
              sx={{
                position: "relative",
                maxWidth: { sm: "100%", lg: "90%" },
                objectFit: "contain",
                zIndex: "1",
              }}
              alt='features-img'
              src='/features-img1.png'
            ></Box>

            <Box
              component='img'
              className='circle-img'
              sx={{
                position: "absolute",
                maxWidth: { sm: "90%", md: "75%" },
                objectFit: "contain",
                left: { sm: "5.5%", md: "7%" },
                top: "8%",
              }}
              alt='features-circle-img'
              src='/bg-circle.svg'
            ></Box>
          </Box>
          <Box
            className='features-content'
            sx={{
              flex: "1",
            }}
          >
            <Typography
              variant='h2'
              sx={{
                fontSize: "18px",
                color: "primary.main",
                fontWeight: 700,
                mb: { sm: "10px", lg: "16px" },
              }}
            >
              Browse Courses
            </Typography>
            <Typography
              variant='h1'
              sx={{
                fontSize: { sm: "28px", md: "32px", lg: "48px" },
                color: "text.primary",
                fontWeight: 700,
                mb: { sm: "24px", md: "30px" },
              }}
            >
              Easily find the perfect Course for you.
            </Typography>
            <Typography variant='p' sx={{ color: "text.primary" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. In
              metus vulputate eu scelerisque felis imperdiet. Accumsan tortor
              posuere ac ut consequat semper viverra nam libero. Tincidunt
              praesent semper feugiat nibh sed. Lorem dolor sed viverra ipsum.
              Sed euismod nisi porta lorem mollis. Tincidunt tortor aliquam
              nulla facilisi cras fermentum odio. Consequat id porta nibh
              venenatis cras sed. Ut tristique et egestas quis. Sit amet massa
              vitae tortor condimentum lacinia. Dolor sed viverra ipsum nunc
              aliquet bibendum. In hendrerit gravida rutrum quisque. Et egestas
              quis ipsum suspendisse.
            </Typography>
          </Box>
        </Box>
        <Box
          className='features-container-2'
          sx={{
            display: "flex",
            alignItems: "center",
            py: { sm: "24px", md: "60px", lg: "40px" },
            flexDirection: {
              sm: "column",
              md: "row",
            },
            rowGap: "120px",
            mt: { sm: "-100px", md: "0" },
          }}
        >
          <Box
            className='features-content-2'
            sx={{
              flex: "1",
            }}
          >
            <Typography
              variant='h2'
              sx={{
                fontSize: "18px",
                color: "primary.main",
                fontWeight: 700,
                mb: { sm: "10px", lg: "16px" },
              }}
            >
              Watch Courses
            </Typography>
            <Typography
              variant='h1'
              sx={{
                fontSize: { sm: "28px", md: "32px", lg: "48px" },
                color: "text.primary",
                fontWeight: 700,
                mb: { sm: "24px", md: "30px" },
              }}
            >
              Premium Courses. Right at your fingertips.
            </Typography>
            <Typography variant='p' sx={{ color: "text.primary" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. In
              metus vulputate eu scelerisque felis imperdiet. Accumsan tortor
              posuere ac ut consequat semper viverra nam libero. Tincidunt
              praesent semper feugiat nibh sed. Lorem dolor sed viverra ipsum.
              Sed euismod nisi porta lorem mollis. Tincidunt tortor aliquam
              nulla facilisi cras fermentum odio. Consequat id porta nibh
              venenatis cras sed. Ut tristique et egestas quis. Sit amet massa
              vitae tortor condimentum lacinia. Dolor sed viverra ipsum nunc
              aliquet bibendum. In hendrerit gravida rutrum quisque. Et egestas
              quis ipsum suspendisse.
            </Typography>
          </Box>
          <Box
            className='features-img-box-2'
            sx={{
              flex: "1",
              pl: { sm: "0", md: "50px", lg: "100px" },
              position: "relative",
            }}
          >
            <Box
              component='img'
              className='features-img-2'
              sx={{
                position: "relative",
                maxWidth: { sm: "100%", lg: "90%" },
                objectFit: "contain",
                zIndex: "1",
              }}
              alt='features-img'
              src='/features-img2.png'
            ></Box>

            <Box
              component='img'
              className='circle-img-2'
              sx={{
                position: "absolute",
                maxWidth: { sm: "90%", md: "75%" },
                objectFit: "contain",
                left: { sm: "5.5%", md: "12%" },
                top: "8%",
                bottom: "20%",
              }}
              alt='features-circle-img'
              src='/bg-circle.svg'
            ></Box>
          </Box>
        </Box>
        <Box
          className='features-container-3'
          sx={{
            display: "flex",
            alignItems: "center",
            py: { sm: "24px", md: "60px", lg: "40px" },
            flexDirection: {
              sm: "column-reverse",
              md: "row",
            },
            rowGap: "120px",
          }}
        >
          <Box
            className='features-img-box-3'
            sx={{
              flex: "1",
              pr: { sm: "0", md: "50px", lg: "100px" },
              position: "relative",
            }}
          >
            <Box
              className='features-img-3'
              component='img'
              sx={{
                position: "relative",
                maxWidth: { sm: "100%", lg: "90%" },
                objectFit: "contain",
                zIndex: "1",
              }}
              alt='features-img'
              src='/features-img3.png'
            ></Box>

            <Box
              component='img'
              className='circle-img-3'
              sx={{
                position: "absolute",
                maxWidth: { sm: "90%", md: "75%" },
                objectFit: "contain",
                left: "5%",
                bottom: "8%",
              }}
              alt='features-circle-img'
              src='/bg-circle.svg'
            ></Box>
          </Box>
          <Box
            className='features-content-3'
            sx={{
              flex: "1",
              mt: { sm: "-100px", md: "0" },
            }}
          >
            <Typography
              variant='h2'
              sx={{
                fontSize: "18px",
                color: "primary.main",
                fontWeight: 700,
                mb: { sm: "10px", lg: "16px" },
              }}
            >
              Download Courses
            </Typography>
            <Typography
              variant='h1'
              sx={{
                fontSize: { sm: "28px", md: "32px", lg: "48px" },
                color: "text.primary",
                fontWeight: 700,
                mb: { sm: "24px", md: "30px" },
              }}
            >
              Keep learning, no matter where you are.
            </Typography>
            <Typography variant='p' sx={{ color: "text.primary" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. In
              metus vulputate eu scelerisque felis imperdiet. Accumsan tortor
              posuere ac ut consequat semper viverra nam libero. Tincidunt
              praesent semper feugiat nibh sed. Lorem dolor sed viverra ipsum.
              Sed euismod nisi porta lorem mollis. Tincidunt tortor aliquam
              nulla facilisi cras fermentum odio. Consequat id porta nibh
              venenatis cras sed. Ut tristique et egestas quis. Sit amet massa
              vitae tortor condimentum lacinia. Dolor sed viverra ipsum nunc
              aliquet bibendum. In hendrerit gravida rutrum quisque. Et egestas
              quis ipsum suspendisse.
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Features;
