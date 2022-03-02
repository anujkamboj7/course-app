import FormControlLabel from "@mui/material/FormControlLabel";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Switch from "@mui/material/Switch";
import { styled } from "@mui/material/styles";
import { useState } from "react";
import PricingList from "./PricingList";

const pricing = {
  annually: [
    {
      header: {
        subheading: "STARTER",
        title: "Free",
        desc: "Per Month, Billed Annually",
      },
      features: [
        {
          text: "Access Free Courses",
          active: true,
        },
        {
          text: "Download Up To 5 Courses",
          active: true,
        },
        {
          text: "Get Teacher's Feedback",
          active: false,
        },
        {
          text: "Write Reviews",
          active: false,
        },
        {
          text: "24/7 Customer Support",
          active: false,
        },
      ],
      cta: {
        text: "Start For Free",
        outline: true,
      },
    },
    {
      header: {
        subheading: "PREMIUM",
        title: "$2.00",
        desc: "Per Month, Billed Annually",
      },
      features: [
        {
          text: "Access All Courses",
          active: true,
        },
        {
          text: "Download Up To 10 Courses",
          active: true,
        },
        {
          text: "Get Teacher's Feedback",
          active: true,
        },
        {
          text: "Write Reviews",
          active: false,
        },
        {
          text: "24/7 Customer Support",
          active: false,
        },
      ],
      cta: {
        text: "Start For Free",
        outline: false,
      },
    },
    {
      header: {
        subheading: "PRO",
        title: "$5.00",
        desc: "Per Month, Billed Annually",
      },
      features: [
        {
          text: "Access All Courses",
          active: true,
        },
        {
          text: "Download Unlimited Courses",
          active: true,
        },
        {
          text: "Get Teacher's Feedback",
          active: true,
        },
        {
          text: "Write Reviews",
          active: true,
        },
        {
          text: "24/7 Customer Support",
          active: true,
        },
      ],
      cta: {
        text: "Start For Free",
        outline: true,
      },
    },
  ],
  monthly: [
    {
      header: {
        subheading: "STARTER",
        title: "Free",
        desc: "Per Month, Billed Annually",
      },
      features: [
        {
          text: "Access Free Courses",
          active: true,
        },
        {
          text: "Download Up To 5 Courses",
          active: true,
        },
        {
          text: "Get Teacher's Feedback",
          active: false,
        },
        {
          text: "Write Reviews",
          active: false,
        },
        {
          text: "24/7 Customer Support",
          active: false,
        },
      ],
      cta: {
        text: "Start For Free",
        outline: true,
      },
    },
    {
      header: {
        subheading: "PREMIUM",
        title: "$4.00",
        desc: "Per Month, Billed Annually",
      },
      features: [
        {
          text: "Access All Courses",
          active: true,
        },
        {
          text: "Download Up To 10 Courses",
          active: true,
        },
        {
          text: "Get Teacher's Feedback",
          active: true,
        },
        {
          text: "Write Reviews",
          active: false,
        },
        {
          text: "24/7 Customer Support",
          active: false,
        },
      ],
      cta: {
        text: "Start For Free",
        outline: false,
      },
    },
    {
      header: {
        subheading: "PRO",
        title: "$7.00",
        desc: "Per Month, Billed Annually",
      },
      features: [
        {
          text: "Access All Courses",
          active: true,
        },
        {
          text: "Download Unlimited Courses",
          active: true,
        },
        {
          text: "Get Teacher's Feedback",
          active: true,
        },
        {
          text: "Write Reviews",
          active: true,
        },
        {
          text: "24/7 Customer Support",
          active: true,
        },
      ],
      cta: {
        text: "Start For Free",
        outline: true,
      },
    },
  ],
};

const IOSSwitch = styled((props) => (
  <Switch focusVisibleClassName='.Mui-focusVisible' disableRipple {...props} />
))(({ theme }) => ({
  width: 42,
  height: 26,
  padding: 0,
  "& .MuiSwitch-switchBase": {
    padding: 0,
    margin: 1,
    transitionDuration: "300ms",
    border: "2px solid #7b5eed",
    "&.Mui-checked": {
      transform: "translateX(16px)",
      color: "#fff",
      "& + .MuiSwitch-track": {
        backgroundColor: theme.palette.mode === "dark" ? "#2ECA45" : "#f2f2f4",
        opacity: 1,
      },
      "&.Mui-disabled + .MuiSwitch-track": {
        opacity: 0.5,
      },
    },
    "&.Mui-focusVisible .MuiSwitch-thumb": {
      color: "#33cf4d",
      border: "6px solid #fff",
    },
    "&.Mui-disabled .MuiSwitch-thumb": {
      color:
        theme.palette.mode === "light"
          ? theme.palette.grey[100]
          : theme.palette.grey[600],
    },
    "&.Mui-disabled + .MuiSwitch-track": {
      opacity: theme.palette.mode === "light" ? 0.7 : 0.3,
    },
  },
  "& .MuiSwitch-thumb": {
    bosmizing: "border-box",
    width: 20,
    height: 20,
  },
  "& .MuiSwitch-track": {
    borderRadius: 26 / 2,
    border: "2px solid #dadae0",
    backgroundColor: theme.palette.mode === "light" ? "#f2f2f4" : "#f2f2f4",
    opacity: 1,
    transition: theme.transitions.create(["background-color"], {
      duration: 500,
    }),
  },
}));

const Pricing = () => {
  const [toggleActive, setToggleActive] = useState(false);

  return (
    <Box
      id='pricing'
      sx={{ pt: { sm: "50px", lg: "100px" }, pb: { sm: "60px", lg: "120px" } }}
      className='pricing-section'
    >
      <Container maxWidth='xl' sx={{ px: { sm: "32px" } }}>
        <Typography
          variant='h1'
          sx={{
            fontSize: { sm: "28px", md: "42px" },
            color: "text.primary",
            fontWeight: 700,
            mb: "30px",
            textAlign: "center",
          }}
        >
          Choose your plan
        </Typography>
        <Stack
          className='select-plan'
          direction='row'
          spacing={2}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography
            as='span'
            sx={{
              fontSize: "14px",
              color: "text.primary",
              fontWeight: 700,
              opacity: `${!toggleActive ? 1 : 0.5}`,
            }}
          >
            Annually
          </Typography>
          <FormControlLabel
            control={
              <IOSSwitch onChange={() => setToggleActive(!toggleActive)} />
            }
            label=''
          />
          <Typography
            as='span'
            sx={{
              fontSize: "14px",
              color: "text.primary",
              fontWeight: 700,
              opacity: `${toggleActive ? 1 : 0.5}`,
            }}
          >
            Monthly
          </Typography>
        </Stack>
        <Box
          className='pricing-plans'
          sx={{
            display: "flex",
            flexDirection: { sm: "column", md: "row" },
            columnGap: { sm: "0px", md: "20px", lg: "50px" },
            rowGap: "60px",
            px: { sm: "0px", lg: "30px" },
            mt: "60px",
            maxWidth: { sm: "350px", md: "100%" },
            mx: "auto",
          }}
        >
          {toggleActive
            ? pricing.monthly.map((data, index) => {
                const { header, features, cta } = data;
                return (
                  <PricingList
                    header={header}
                    features={features}
                    cta={cta}
                    key={index}
                  />
                );
              })
            : pricing.annually.map((data, index) => {
                const { header, features, cta } = data;
                return (
                  <PricingList
                    header={header}
                    features={features}
                    cta={cta}
                    key={index}
                  />
                );
              })}
        </Box>
      </Container>
    </Box>
  );
};

export default Pricing;
