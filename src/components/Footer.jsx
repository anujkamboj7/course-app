import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const Footer = () => {
  return (
    <Box
      id='download'
      maxWidth='xl'
      sx={{
        mx: "auto",
        borderTopLeftRadius: "20px",
        borderTopRightRadius: "20px",
        overflow: "hidden",
        mt: { sm: "20px", md: "40px", lg: "80px" },
      }}
    >
      <Box sx={{ backgroundColor: "primary.main" }}>
        <Box sx={{ py: { sm: "60px", md: "100px" }, px: "32px" }}>
          <Typography
            as='h1'
            color='#fff'
            sx={{
              fontSize: { sm: "42px", md: "48px" },
              fontWeight: "bold",
              lineHeight: "54px",
              maxWidth: "400px",
              textAlign: "center",
              mx: "auto",
            }}
          >
            Start learning today
          </Typography>
          <Box
            sx={{
              display: "flex",
              columnGap: "20px",
              justifyContent: "center",
              mt: "60px",
            }}
          >
            <Box
              sx={{
                display: "flex",
                gap: "20px",
                justifyContent: "center",
                flexWrap: "wrap",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  backgroundColor: "#fff",
                  borderRadius: "10px",
                  columnGap: "10px",
                  py: "12px",
                  px: "16px",
                  alignItems: "flex-start",
                }}
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width={45}
                  height={45}
                  viewBox='0 0 24 24'
                  style={{
                    fill: "rgba(123, 94, 237, 1)",
                  }}
                >
                  <path d='M19.665 16.811a10.316 10.316 0 0 1-1.021 1.837c-.537.767-.978 1.297-1.316 1.592-.525.482-1.089.73-1.692.744-.432 0-.954-.123-1.562-.373-.61-.249-1.17-.371-1.683-.371-.537 0-1.113.122-1.73.371-.616.25-1.114.381-1.495.393-.577.025-1.154-.229-1.729-.764-.367-.32-.826-.87-1.377-1.648-.59-.829-1.075-1.794-1.455-2.891-.407-1.187-.611-2.335-.611-3.447 0-1.273.275-2.372.826-3.292a4.857 4.857 0 0 1 1.73-1.751 4.65 4.65 0 0 1 2.34-.662c.46 0 1.063.142 1.81.422s1.227.422 1.436.422c.158 0 .689-.167 1.593-.498.853-.307 1.573-.434 2.163-.384 1.6.129 2.801.759 3.6 1.895-1.43.867-2.137 2.08-2.123 3.637.012 1.213.453 2.222 1.317 3.023a4.33 4.33 0 0 0 1.315.863c-.106.307-.218.6-.336.882zM15.998 2.38c0 .95-.348 1.838-1.039 2.659-.836.976-1.846 1.541-2.941 1.452a2.955 2.955 0 0 1-.021-.36c0-.913.396-1.889 1.103-2.688.352-.404.8-.741 1.343-1.009.542-.264 1.054-.41 1.536-.435.013.128.019.255.019.381z' />
                </svg>

                <Box>
                  <Typography
                    sx={{
                      color: "primary.main",
                      fontSize: "14px",
                      lineHeight: "1.2",
                      fontWeight: 500,
                    }}
                  >
                    Download on the
                  </Typography>
                  <Typography
                    sx={{
                      fontWeight: 500,
                      fontSize: "24px",
                      color: "primary.main",
                      lineHeight: "1.0",
                    }}
                  >
                    App Store
                  </Typography>
                </Box>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  backgroundColor: "#fff",
                  borderRadius: "10px",
                  columnGap: "10px",
                  py: "12px",
                  px: "16px",
                  alignItems: "flex-start",
                }}
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width={45}
                  height={45}
                  viewBox='0 0 24 24'
                  style={{
                    fill: "rgba(123, 94, 237, 1)",
                  }}
                >
                  <path d='m12.954 11.616 2.957-2.957L6.36 3.291c-.633-.342-1.226-.39-1.746-.016l8.34 8.341zm3.461 3.462 3.074-1.729c.6-.336.929-.812.929-1.34 0-.527-.329-1.004-.928-1.34l-2.783-1.563-3.133 3.132 2.841 2.84zM4.1 4.002c-.064.197-.1.417-.1.658v14.705c0 .381.084.709.236.97l8.097-8.098L4.1 4.002zm8.854 8.855L4.902 20.91c.154.059.32.09.495.09.312 0 .637-.092.968-.276l9.255-5.197-2.666-2.67z' />
                </svg>
                <Box>
                  <Typography
                    sx={{
                      color: "primary.main",
                      fontSize: "14px",
                      lineHeight: "1.2",
                      fontWeight: 500,
                    }}
                  >
                    Get it on
                  </Typography>
                  <Typography
                    sx={{
                      fontWeight: 500,
                      fontSize: "24px",
                      color: "primary.main",
                      lineHeight: "1.0",
                    }}
                  >
                    Play Store
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            py: "16px",
            px: "32px",
            justifyContent: "space-between",
            flexDirection: { sm: "column", md: "row" },
            textAlign: { sm: "center", md: "initial" },
            rowGap: "10px",
          }}
        >
          <Typography sx={{ color: "#fff", fontSize: "14px", opacity: ".8" }}>
            © CourseApp
          </Typography>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              columnGap: "20px",
              justifyContent: "center",
            }}
          >
            <Link
              href='#'
              color='#fff'
              underline='none'
              sx={{ fontSize: "14px" }}
            >
              Privacy Policy
            </Link>
            <Link
              href='#'
              color='#fff'
              underline='none'
              sx={{ fontSize: "14px" }}
            >
              Terms & Condition
            </Link>
            <Link
              href='#'
              color='#fff'
              underline='none'
              sx={{ fontSize: "14px" }}
            >
              Licensing
            </Link>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
