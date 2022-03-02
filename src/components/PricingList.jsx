import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { FiZap } from "react-icons/fi";

const PricingList = ({ header, cta, features }) => {
  return (
    <Box
      sx={{
        borderRadius: "20px",
        borderTop: "4px solid #7b5eed",
        boxShadow: "0 8px 20px 1px rgb(11 16 51 / 15%);",
        flex: 1,
      }}
    >
      <Box
        sx={{
          py: "24px",
          textAlign: "center",
        }}
      >
        <Typography
          variant='h2'
          sx={{
            color: "primary.main",
            fontSize: "18px",
            fontWeight: 500,
            mb: "4px",
          }}
        >
          {header.subheading}
        </Typography>
        <Typography
          variant='h1'
          sx={{
            color: "text.primary",
            fontSize: { sm: "28px", lg: "36px" },
            fontWeight: 700,
          }}
        >
          {header.title}
        </Typography>
        <Typography
          variant='h3'
          sx={{
            color: "text.primary",
            fontSize: "12px",
            fontWeight: 500,
            opacity: ".6",
          }}
        >
          {header.desc}
        </Typography>
      </Box>
      <Box
        sx={{
          rowGap: { sm: "16px", lg: "25px" },
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
          mt: "20px",
          px: { sm: "20px", lg: "48px" },
        }}
      >
        {features.map((f, index) => {
          const { text, active } = f;
          return (
            <Typography
              variant='p'
              key={index}
              sx={{
                color: "text.primary",
                fontWeight: 500,
                display: "flex",
                alignItems: "center",
                columnGap: "10px",
                fontSize: { sm: "14px", lg: "16px" },
                opacity: `${!active && "0.5"}`,
              }}
            >
              <FiZap
                color={`${active ? "#7b5eed" : "#0b1033"}`}
                fontSize='24px'
              />
              {text}
            </Typography>
          );
        })}
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          pt: { sm: "0", lg: "20px" },
        }}
      >
        <Button
          variant={cta.outline ? "outlined" : "contained"}
          sx={{
            color: `${cta.outline ? "primary.main" : "#fff"}`,
            py: "12px",
            px: "24px",
            my: "32px",
            borderRadius: "40px",
            textTransform: "none",
            height: "52px",
            fontSize: { sm: "16px", lg: "18px" },
            fontWeight: 700,
            letterSpacing: 0.4,
            boxShadow: "none",
            border: `${cta.outline ? "2px solid #7b5eed" : "none"}`,
            ":hover": {
              color: `${cta.outline ? "#fff" : "#fff"}`,
              borderWidth: `${cta.outline ? "2px" : "none"}`,
              boxShadow: `${
                !cta.outline && "0 8px 15px rgba(111, 85, 213, .2);"
              }`,
              backgroundColor: "primary.dark",
            },
          }}
        >
          {cta.text}
        </Button>
      </Box>
    </Box>
  );
};

export default PricingList;
