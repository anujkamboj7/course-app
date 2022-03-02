import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import Image from "next/image";
import Button from "@mui/material/Button";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const pages = [
    { name: "Home", url: "/" },
    { name: "Features", url: "#features" },
    { name: "Pricing", url: "#pricing" },
  ];

  return (
    <Box sx={{ height: { sm: 60, md: 80 } }} className='navbar'>
      <Container
        sx={{
          display: "flex",
          height: "100%",
          alignItems: "center",
          justifyContent: "space-between",
          px: { sm: "24px", xl: "32px" },
        }}
        maxWidth='xl'
      >
        <Link href='/' sx={{ height: 32, width: 167, position: "relative" }}>
          <Image
            src='/logo.svg'
            layout='fill'
            alt='CourseApp-branding'
            priority
          />
        </Link>

        <Box
          sx={{
            display: { sm: "none", md: "flex", alignItems: "center" },
          }}
        >
          {pages.map((page) => (
            <Button
              href={page.url}
              size='medium'
              key={page.name}
              sx={{
                py: "8px",
                px: "15px",
                color: "text.primary",
                display: "block",
                fontWeight: 700,
                textTransform: "none",
                fontSize: 16,
                letterSpacing: 0.4,
                ":hover": {
                  backgroundColor: "primary.light",
                  transitionDuration: ".1",
                  color: "primary.main",
                },
              }}
            >
              {page.name}
            </Button>
          ))}
          <Button
            href='#download'
            variant='contained'
            sx={{
              color: "#fff",
              py: "12px",
              px: "24px",
              ml: 2,
              borderRadius: "40px",
              textTransform: "none",
              fontSize: 16,
              fontWeight: 700,
              letterSpacing: 0.4,
              boxShadow: "none",
              ":hover": {
                boxShadow: "none",
                backgroundColor: "primary.dark",
              },
            }}
          >
            Download Now
          </Button>
        </Box>

        {/* Mobile Menu */}

        {showMenu && (
          <Box
            className='mobile-navigation'
            sx={{
              display: { sm: "flex", md: "none" },
              flexDirection: "column",
              alignItems: "flex-start",
              position: "absolute",
              top: "60px",
              width: "100%",
              left: "0",
              zIndex: "1",
              backgroundColor: "#ffffff",
              py: "16px",
              borderBottom: "4px solid rgba(123,94,237,.9)",
            }}
          >
            {pages.map((page) => (
              <Button
                onClick={() => setShowMenu(false)}
                href={page.url}
                size='medium'
                key={page.name}
                sx={{
                  py: "10px",
                  px: "34px",
                  width: "100%",
                  color: "text.primary",
                  display: "block",
                  fontWeight: 700,
                  textTransform: "none",
                  fontSize: 16,
                  letterSpacing: 0.4,
                  ":hover": {
                    backgroundColor: "primary.light",
                    transitionDuration: ".1",
                    color: "primary.main",
                  },
                }}
              >
                {page.name}
              </Button>
            ))}
            <Button
              href='#download'
              variant='contained'
              sx={{
                color: "#fff",
                py: "12px",
                px: "20px",
                my: "10px",
                mx: "24px",
                borderRadius: "40px",
                textTransform: "none",
                fontSize: 15,
                fontWeight: 700,
                letterSpacing: 0.4,
                boxShadow: "none",
                ":hover": {
                  boxShadow: "none",
                  backgroundColor: "primary.dark",
                },
              }}
            >
              Download App
            </Button>
          </Box>
        )}

        <MenuIcon
          onClick={() => setShowMenu(!showMenu)}
          sx={{
            fontSize: "26px",
            color: "text.primary",
            display: { sm: "block", md: "none" },
          }}
        />
      </Container>
    </Box>
  );
};

export default Navbar;
