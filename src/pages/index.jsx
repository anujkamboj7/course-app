import { useEffect } from "react";
import Head from "next/head";
import Navbar from "@/components/Navbar";
import Hero from "components/Hero";
import Features from "components/Features";
import Testimonial from "components/Testimonial";
import Pricing from "components/Pricing";
import Footer from "components/Footer";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { Box } from "@mui/system";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  // Gsap Animation
  useEffect(() => {
    // start animation when page gets load

    const heroTimeline = gsap.timeline();

    heroTimeline
      .from(".hero-content", {
        y: 200,
        duration: 1,
        opacity: 0,
        ease: "power4.easeOut",
      })
      .from(".hero-img", {
        y: 200,
        duration: 1,
        opacity: 0,
        ease: "power4.easeOut",
      });

    const heroScrollTimeline = gsap.timeline({
      ease: "power2.easeOut",
      scrollTrigger: {
        trigger: ".hero-container",
        start: "top top", // when the top of the trigger hits the top of the viewport
        end: "bottom bottom",
        scrub: 1,
      },
    });

    heroScrollTimeline.fromTo(
      ".hero-content",
      { y: 0, opacity: 1 },
      { y: 450, opacity: 0 }
    );

    // start animation when page gets scroll

    const specificationsScrollTimeline = gsap.timeline({
      ease: "power2.easeOut",

      scrollTrigger: {
        trigger: ".hero-img",
        start: "40% top", // when the top of the trigger hits the top of the viewport
        end: "bottom bottom",
        endTrigger: ".hero-container",
      },
    });

    specificationsScrollTimeline.fromTo(
      ".specifications",
      { y: 200, opacity: 0 },
      { y: 0, opacity: 1 }
    );

    const featuresScrollTimeline = gsap.timeline({
      ease: "power2.easeOut",
      scrollTrigger: {
        trigger: ".features-container",
        start: "-=400", // when the top of the trigger hits the top of the viewport
        end: "bottom bottom",
      },
    });

    featuresScrollTimeline
      .fromTo(
        ".features-img-box",
        { x: -100, opacity: 0 },
        { x: 0, opacity: 1 }
      )
      .fromTo(
        ".features-content",
        { x: 100, opacity: 0 },
        { x: 0, opacity: 1 }
      );

    const featuresCircleImgScrollTimeline = gsap.timeline({
      ease: "power3.easeOut",
      scrollTrigger: {
        trigger: ".specifications",
        start: "top center", // when the top of the trigger hits the top of the viewport
        scrub: 1,
        endTrigger: ".features-container",
        end: "bottom center",
      },
    });

    featuresCircleImgScrollTimeline.fromTo(
      ".circle-img",
      { y: "0%" },
      { y: "20%" }
    );

    const featuresScrollTimeline2 = gsap.timeline({
      ease: "power2.easeOut",
      scrollTrigger: {
        trigger: ".features-container-2",
        start: "-=400", // when the top of the trigger hits the top of the viewport
        end: "bottom bottom",
      },
    });

    featuresScrollTimeline2
      .fromTo(
        ".features-img-box-2",
        { x: -100, opacity: 0 },
        { x: 0, opacity: 1 }
      )
      .fromTo(
        ".features-content-2",
        { x: 100, opacity: 0 },
        { x: 0, opacity: 1 }
      );

    const featuresScrollTimeline3 = gsap.timeline({
      ease: "power2.easeOut",
      scrollTrigger: {
        trigger: ".features-container-3",
        start: "-=400", // when the top of the trigger hits the top of the viewport
        end: "bottom bottom",
      },
    });

    featuresScrollTimeline3
      .fromTo(
        ".features-img-box-3",
        { x: -100, opacity: 0 },
        { x: 0, opacity: 1 }
      )
      .fromTo(
        ".features-content-3",
        { x: 100, opacity: 0 },
        { x: 0, opacity: 1 }
      );

    const featuresImgScrollTimeline = gsap.timeline({
      ease: "power3.easeOut",
      scrollTrigger: {
        trigger: ".specifications",
        start: "top center", // when the top of the trigger hits the top of the viewport
        endTrigger: ".features-container-2",
        end: "center center",
        scrub: 1,
      },
    });

    featuresImgScrollTimeline.fromTo(
      ".features-img",
      { y: "20%" },
      { y: "-20%" }
    );

    const featuresImgScrollTimeline2 = gsap.timeline({
      ease: "power4.easeOut",
      scrollTrigger: {
        trigger: ".features-container",
        start: "top center", // when the top of the trigger hits the top of the viewport
        endTrigger: ".features-container-2",
        end: "bottom center",
        scrub: 1,
      },
    });

    featuresImgScrollTimeline2.fromTo(
      ".features-img-2",
      { y: "20%" },
      { y: "-20%" }
    );

    const featuresCircleImgScrollTimeline2 = gsap.timeline({
      ease: "power4.easeOut",
      duration: 0.3,
      scrollTrigger: {
        trigger: ".features-container",
        start: "top center", // when the top of the trigger hits the top of the viewport
        scrub: 1,
        endTrigger: ".features-container-3",
        end: "bottom bottom",
      },
    });

    featuresCircleImgScrollTimeline2.fromTo(
      ".circle-img-2",
      { y: "-15%" },
      { y: "29%" }
    );

    const featuresImgScrollTimeline3 = gsap.timeline({
      ease: "power4.easeOut",
      scrollTrigger: {
        trigger: ".features-container-2",
        start: "center center", // when the top of the trigger hits the top of the viewport
        scrub: 1,
        endTrigger: ".testimonial-container",
        end: "bottom bottom",
      },
    });

    featuresImgScrollTimeline3.fromTo(
      ".features-img-3",
      { y: "20%" },
      { y: "-20%" }
    );

    const featuresCircleImgScrollTimeline3 = gsap.timeline({
      ease: "power4.easeOut",
      duration: 0.5,
      scrollTrigger: {
        trigger: ".features-container-2",
        start: "center center", // when the top of the trigger hits the top of the viewport
        scrub: 1,
        endTrigger: ".pricing-section",
        end: "top top",
      },
    });

    featuresCircleImgScrollTimeline3.fromTo(
      ".circle-img-3",
      { y: "-20%" },
      { y: "20%" }
    );

    const testimonialSection = gsap.timeline({
      ease: "power4.easeOut",
      scrollTrigger: {
        trigger: ".testimonial-container",
        start: "top center", // when the top of the trigger hits the top of the viewport
        end: "bottom bottom",
      },
    });

    testimonialSection
      .from(".testimonial-cover", { maxWidth: "0%", opacity: 0, duration: 0.5 })
      .from(".swiper-button-prev", { opacity: 0 }, "-=.3")
      .from(".swiper-button-next", { opacity: 0 }, "-=.3")
      .from(".quote-left", { top: "-30px", opacity: 0 }, "-=.5")
      .from(".quote-right", { bottom: "-30px", opacity: 0 }, "-=.5")
      .from(".testimonial-img", { y: "20px", opacity: 0 }, "-=.5")
      .from(".testimonial-title", { scale: 0.9, opacity: 0 }, "-=.5")
      .from(".testimonial-author", { scale: 0.9, opacity: 0 }, "-=.5");

    const pricingSection = gsap.timeline({
      ease: "power4.easeOut",
      scrollTrigger: {
        trigger: ".pricing-section",
        start: "top center",
        end: "bottom bottom",
      },
    });

    pricingSection
      .fromTo(".select-plan", { y: 50, opacity: 0 }, { y: 0, opacity: 1 })
      .fromTo(
        ".pricing-plans",
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1 },
        "+=0.2"
      );
  }, []);

  return (
    <Box sx={{ overflow: "hidden" }}>
      <Head>
        <title>CourseApp - Website Template</title>
        <meta
          content='CourseApp is a modern template that allows you to showcase your app. Let your users learn more about its features and show them your pricing plans. CourseApp is a great template to use as is, or as a base for your own project.'
          name='description'
        />
        <meta content='CourseApp - Website Template' property='og:title' />
        <meta
          content='CourseApp is a modern template that allows you to showcase your app. Let your users learn more about its features and show them your pricing plans. CourseApp is a great template to use as is, or as a base for your own project.'
          property='og:description'
        />
        <meta content='CourseApp - Website Template' property='twitter:title' />
        <meta
          content='CourseApp is a modern template that allows you to showcase your app. Let your users learn more about its features and show them your pricing plans. CourseApp is a great template to use as is, or as a base for your own project.'
          property='twitter:description'
        />
        <meta property='og:type' content='website' />
        <meta content='summary_large_image' name='twitter:card' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Navbar />
      <Hero />
      <Features />
      <Testimonial />
      <Pricing />
      <Footer />
    </Box>
  );
}
