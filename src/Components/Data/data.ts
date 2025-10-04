import img1 from "../../assets/service/Service-1.png";
import { StaticImageData } from "next/image";
import img2 from "../../assets/service/Service-2.png";
import img3 from "../../assets/service/Service-3.png";
import img4 from "../../assets/service/Service-4.png";
import img5 from "../../assets/service/Container1.png";
import img6 from "../../assets/service/Container2.png";
import blogImg1 from "../../assets/blogs/beautiful-woman-getting-beauty-treatment.png";
import blogImg2 from "../../assets/blogs/female-patient-receiving-cosmetic-treatment.png";
import blogImg3 from "../../assets/blogs/person-getting-micro-needling-beauty-treatment.png";
import testimonialImg from "../../assets/testimonial/testimonial.png";
import blog1 from "../../assets/blogPost/Photo(1).png";
import blog2 from "../../assets/blogPost/Photo(2).png";
import blog3 from "../../assets/blogPost/Photo(3).png";
import blog4 from "../../assets/blogPost/Photo(4).png";
import blog5 from "../../assets/blogPost/Photo.png";
import blog6 from "../../assets/blogPost/brunette-girl-posing-with-flowers.png";
import img11 from "@/assets/cards/image3.png";
import img22 from "@/assets/cards/image2.png";
import img33 from "@/assets/cards/image6.png";
import img44 from "@/assets/cards/image4.png";
import img55 from "@/assets/cards/handonface.png";
import img66 from "@/assets/cards/Morpheus8.png";
import img77 from "@/assets/cards/revibe.png";
import img88 from "@/assets/cards/img8.png";
import img99 from "@/assets/cards/img9.png";
import about1 from "../../assets/about/beautiful-young-woman-looking-camera.png";
import about2 from "../../assets/about/close-up-attractive-girl-touching-shoulder.png";
import about3 from "../../assets/about/cute-young-woman-indoor.png";
import about4 from "../../assets/about/indoor-photo-elegant-girl-golden-accessories-beautiful-lady-earrings-posing-with-interest.png";
import about5 from "../../assets/about/photo_2025-06-24_15-54-09.png";
import Conditions1 from "../../assets/menu/MORPHEUS8-150x150 6 (1).png";
import Conditions2 from "../../assets/menu/MORPHEUS8-150x150 7.png";
import Conditions3 from "../../assets/menu/Service Image.png";
import beforeAfter1 from "../../assets/menu/beforeafter/MORPHEUS8-150x150 4.png";
import beforeAfter2 from "../../assets/menu/beforeafter/MORPHEUS8-150x150 6.png";
import beforeAfter3 from "../../assets/menu/beforeafter/MORPHEUS8-150x150 7 (1).png";
import product1 from "../../assets/service/bodysculpting/skincure.png"
import product2 from "../../assets/service/bodysculpting/suppliments.png"
import product3 from "../../assets/service/bodysculpting/kits.png"

import injectable from "../../assets/service/injectable.png"
import laser from "../../assets/service/leser.png";
import wellness from "../../assets/service/welness.png";

interface service {
  title: string;
  subtitle: string;
  imageUrl: string | StaticImageData;
  tags: string[];
}

export const service: service[] = [
  {
    title: "Injectables & Filler",
    subtitle: "Facetite",
    imageUrl: img1,
    tags: [" Botox", "Dysport", "Dermal Fillers", "Lip Fillers", "Sculptra"],
  },
  {
    title: "Laser & Light ",
    subtitle: "Bodytite",
    imageUrl: img2,
    tags: [
      "Tetra CO2 Laser",
      "Laser Hair Removal",
      "ClearLift",
      "Dye-VL",
      "Tattoo Removal",
      "Nail Fungus Laser",
    ],
  },
  {
    title: "Skin Rejtnenation",
    subtitle: "Accutite",
    imageUrl: img3,
    tags: [
      "Microneedling",
      "Hydrafacial",
      "Laser Resurfacing",
      "Morpheus8",
      "Opus Plasma",
    ],
  },
  {
    title: "Body Sculpting",
    subtitle: "Laser treatments",
    imageUrl: img4,
    tags: [
      "Chemical Peel",
      "IPL Therapy",
      "RF Skin Tightening",
      "Bodytite",
      "AccuTite",
      "FaceTite",
    ],
  },
];

export const data = [
  {
    imag1: img5,
    texts1: "Before",
    imag2: img6,
    texts2: "After",
  },
  {
    imag1: img5,
    texts1: "Before",
    imag2: img6,
    texts2: "After",
  },
  {
    imag1: img5,
    texts1: "Before",
    imag2: img6,
    texts2: "After",
  },
];

export interface Article {
  id: number;
  date: string;
  title: string;
  imageUrl: string | StaticImageData;
}

export const blogs = [
  {
    id: 1,
    date: "Aug 27, 2024",
    title: "How Laser Skin Tightening Can Help Reduce Wrinkles and Sagging",
    imageUrl: blogImg1,
  },
  {
    id: 2,
    date: "Aug 27, 2024",
    title: "The Science Behind Laser Skin Tightening Treatments",
    imageUrl: blogImg2,
  },
  {
    id: 3,
    date: "Aug 27, 2024",
    title: "Top Benefits of Laser Skin Tightening for Aging Skin",
    imageUrl: blogImg3,
  },
];

export interface Testimonial {
  name: string;
  role: string;
  message: string;
  imageUrl: string | StaticImageData;
}

export const testimonials = [
  {
    name: "Sarah & Michael Stone",
    role: "Homeowners",
    message:
      "Impressive service! I had a micro-needling facial. I was nervous about the unknown skill level of the esthetician. Ruby has skilled hands and knows what she is doing. My skin felt tight and really clean afterwards. I highly recommend a series of these. I am 65 and rarely experience such great customer service and results. I am also a cosmetologist who performed facials for three years, so I am extra critical. You are in good hands with Ruby.",
    imageUrl: testimonialImg,
  },
  {
    name: "Lena Rodriguez",
    role: "Real Estate Agent",
    message:
      "Absolutely loved my laser treatment session! The clinic is clean, calm, and professional. My skin looks firmer and glows like never before. Highly recommend Ruby for her expertise and calming nature.",
    imageUrl: testimonialImg,
  },
  {
    name: "Daniel Kim",
    role: "Fitness Coach",
    message:
      "I’ve been skeptical of skin treatments, but this one changed my mind. I had a deep pore cleansing followed by LED therapy. Ruby’s technique is precise, and she explains every step. Excellent service, noticeable results.",
    imageUrl: testimonialImg,
  },
];

interface AccordionItem {
  question: string;
  answer: string;
}

export const accordionData: AccordionItem[] = [
  {
    question: "How can I begin my journey with Estevez Aesthetics?",
    answer:
      "Start by exploring our website, where you can find detailed information about our services, book consultations, and learn about our treatment options.",
  },
  {
    question:
      "What services are available for new clients at Estevez Aesthetics?",
    answer:
      "We offer a variety of services including Botox, dermal fillers, and skin care treatments tailored to your needs.",
  },
  {
    question: "Is it possible to arrange a consultation to discuss treatments?",
    answer:
      "Yes, you can easily book a consultation through our website to discuss your treatment options with our experts.",
  },
  {
    question:
      "What kinds of aesthetic treatments does Estevez Aesthetics provide?",
    answer:
      "We provide a wide range of treatments such as Botox, dermal fillers, microneedling, and more, all designed to enhance your natural beauty.",
  },
];

export interface BlogPostDetail {
  title: string;
  description: string;
}

export interface BlogPost {
  id: number;
  image: string | StaticImageData;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  author: string;
  details: {
    title: string;
    description: string;
  }[];
}

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    image: blog6,
    title: "What Is The Best Laser Cellulite Reduction?",
    excerpt:
      "Explore top treatments to reduce cellulite using laser technology and learn which method suits your skin best.",
    date: "May 6, 2024",
    author: "Estevez Aesthetics Medical Spa",
    category: "Plasma Skin Tightening",
    details: [
      {
        title: "Introduction",
        description:
          "Laser skin tightening uses advanced laser technology to heat the deeper layers of the skin, stimulating natural collagen and elastin production. This leads to smoother, tighter, and more youthful-looking skin. It can be applied to the face, neck, arms, tummy, and more.",
      },
      {
        title: "Why Laser Works",
        description:
          "Laser skin tightening uses advanced laser technology to heat the deeper layers of the skin, stimulating natural collagen and elastin production. This leads to smoother, tighter, and more youthful-looking skin. It can be applied to the face, neck, arms, tummy, and more.Laser skin tightening uses advanced laser technology to heat the deeper layers of the skin, stimulating natural collagen and elastin production. This leads to smoother, tighter, and more youthful-looking skin. It can be applied to the face, neck, arms, tummy, and more.Laser skin tightening uses advanced laser technology to heat the deeper layers of the skin, stimulating natural collagen and elastin production. This leads to smoother, tighter, and more youthful-looking skin. It can be applied to the face, neck, arms, tummy, and more.",
      },
      {
        title: "What is Laser Skin Tightening?",
        description:
          "Laser skin tightening uses advanced laser technology to heat the deeper layers of the skin, stimulating natural collagen and elastin production. This leads to smoother, tighter, and more youthful-looking skin. It can be applied to the face, neck, arms, tummy, and more.",
      },
      {
        title: "tightening uses advanced laser technology",
        description:
          "Laser skin tightening uses advanced laser technology to heat the deeper layers of the skin, stimulating natural collagen and elastin production. This leads to smoother, tighter, and more youthful-looking skin. It can be applied to the face, neck, arms, tummy, and more.Laser skin tightening uses advanced laser technology to heat the deeper layers of the skin, stimulating natural collagen and elastin production. This leads to smoother, tighter, and more youthful-looking skin. It can be applied to the face, neck, arms, tummy, and more.Laser skin tightening uses advanced laser technology to heat the deeper layers of the skin, stimulating natural collagen and elastin production. This leads to smoother, tighter, and more youthful-looking skin. It can be applied to the face, neck, arms, tummy, and more.",
      },
      {
        title: "more youthful-looking skin",
        description:
          "Laser skin tightening uses advanced laser technology to heat the deeper layers of the skin, stimulating natural collagen and elastin production. This leads to smoother, tighter, and more youthful-looking skin. It can be applied to the face, neck, arms, tummy, and more.",
      },
      {
        title: "Conclusion.",
        description:
          "Laser skin tightening uses advanced laser technology to heat the deeper layers of the skin, stimulating natural collagen and elastin production. This leads to smoother, tighter, and more youthful-looking skin. It can be applied to the face, neck, arms, tummy, and more.Laser skin tightening uses advanced laser technology to heat the deeper layers of the skin, stimulating natural collagen and elastin production. This leads to smoother, tighter, and more youthful-looking skin. It can be applied to the face, neck, arms, tummy, and more.Laser skin tightening uses advanced laser technology to heat the deeper layers of the skin, stimulating natural collagen and elastin production. This leads to smoother, tighter, and more youthful-looking skin. It can be applied to the face, neck, arms, tummy, and more.",
      },
    ],
  },
  {
    id: 2,
    image: blog1,
    title: "Top 5 Laser Treatments to Reduce Cellulite",
    excerpt:
      "A breakdown of the most effective laser-based treatments for cellulite reduction.",
    date: "May 9, 2024",
    author: "Estevez Aesthetics Medical Spa",
    category: "Laser Therapy",
    details: [
      {
        title: "Introduction",
        description:
          "Laser skin tightening uses advanced laser technology to heat the deeper layers of the skin, stimulating natural collagen and elastin production. This leads to smoother, tighter, and more youthful-looking skin. It can be applied to the face, neck, arms, tummy, and more.",
      },
      {
        title: "Why Laser Works",
        description:
          "Laser skin tightening uses advanced laser technology to heat the deeper layers of the skin, stimulating natural collagen and elastin production. This leads to smoother, tighter, and more youthful-looking skin. It can be applied to the face, neck, arms, tummy, and more.Laser skin tightening uses advanced laser technology to heat the deeper layers of the skin, stimulating natural collagen and elastin production. This leads to smoother, tighter, and more youthful-looking skin. It can be applied to the face, neck, arms, tummy, and more.Laser skin tightening uses advanced laser technology to heat the deeper layers of the skin, stimulating natural collagen and elastin production. This leads to smoother, tighter, and more youthful-looking skin. It can be applied to the face, neck, arms, tummy, and more.",
      },
      {
        title: "What is Laser Skin Tightening?",
        description:
          "Laser skin tightening uses advanced laser technology to heat the deeper layers of the skin, stimulating natural collagen and elastin production. This leads to smoother, tighter, and more youthful-looking skin. It can be applied to the face, neck, arms, tummy, and more.",
      },
      {
        title: "tightening uses advanced laser technology",
        description:
          "Laser skin tightening uses advanced laser technology to heat the deeper layers of the skin, stimulating natural collagen and elastin production. This leads to smoother, tighter, and more youthful-looking skin. It can be applied to the face, neck, arms, tummy, and more.Laser skin tightening uses advanced laser technology to heat the deeper layers of the skin, stimulating natural collagen and elastin production. This leads to smoother, tighter, and more youthful-looking skin. It can be applied to the face, neck, arms, tummy, and more.Laser skin tightening uses advanced laser technology to heat the deeper layers of the skin, stimulating natural collagen and elastin production. This leads to smoother, tighter, and more youthful-looking skin. It can be applied to the face, neck, arms, tummy, and more.",
      },
      {
        title: "more youthful-looking skin",
        description:
          "Laser skin tightening uses advanced laser technology to heat the deeper layers of the skin, stimulating natural collagen and elastin production. This leads to smoother, tighter, and more youthful-looking skin. It can be applied to the face, neck, arms, tummy, and more.",
      },
      {
        title: "Conclusion.",
        description:
          "Laser skin tightening uses advanced laser technology to heat the deeper layers of the skin, stimulating natural collagen and elastin production. This leads to smoother, tighter, and more youthful-looking skin. It can be applied to the face, neck, arms, tummy, and more.Laser skin tightening uses advanced laser technology to heat the deeper layers of the skin, stimulating natural collagen and elastin production. This leads to smoother, tighter, and more youthful-looking skin. It can be applied to the face, neck, arms, tummy, and more.Laser skin tightening uses advanced laser technology to heat the deeper layers of the skin, stimulating natural collagen and elastin production. This leads to smoother, tighter, and more youthful-looking skin. It can be applied to the face, neck, arms, tummy, and more.",
      },
    ],
  },
  {
    id: 3,
    image: blog2,
    title: "Laser vs. Radiofrequency for Cellulite",
    excerpt:
      "How does laser compare to RF treatments? Learn the pros and cons of each.",
    date: "May 12, 2024",
    author: "Dr. Ana Martinez",
    category: "Skin Treatments",
    details: [
      {
        title: "Introduction",
        description:
          "Laser skin tightening uses advanced laser technology to heat the deeper layers of the skin, stimulating natural collagen and elastin production. This leads to smoother, tighter, and more youthful-looking skin. It can be applied to the face, neck, arms, tummy, and more.",
      },
      {
        title: "Why Laser Works",
        description:
          "Laser skin tightening uses advanced laser technology to heat the deeper layers of the skin, stimulating natural collagen and elastin production. This leads to smoother, tighter, and more youthful-looking skin. It can be applied to the face, neck, arms, tummy, and more.Laser skin tightening uses advanced laser technology to heat the deeper layers of the skin, stimulating natural collagen and elastin production. This leads to smoother, tighter, and more youthful-looking skin. It can be applied to the face, neck, arms, tummy, and more.Laser skin tightening uses advanced laser technology to heat the deeper layers of the skin, stimulating natural collagen and elastin production. This leads to smoother, tighter, and more youthful-looking skin. It can be applied to the face, neck, arms, tummy, and more.",
      },
      {
        title: "What is Laser Skin Tightening?",
        description:
          "Laser skin tightening uses advanced laser technology to heat the deeper layers of the skin, stimulating natural collagen and elastin production. This leads to smoother, tighter, and more youthful-looking skin. It can be applied to the face, neck, arms, tummy, and more.",
      },
      {
        title: "tightening uses advanced laser technology",
        description:
          "Laser skin tightening uses advanced laser technology to heat the deeper layers of the skin, stimulating natural collagen and elastin production. This leads to smoother, tighter, and more youthful-looking skin. It can be applied to the face, neck, arms, tummy, and more.Laser skin tightening uses advanced laser technology to heat the deeper layers of the skin, stimulating natural collagen and elastin production. This leads to smoother, tighter, and more youthful-looking skin. It can be applied to the face, neck, arms, tummy, and more.Laser skin tightening uses advanced laser technology to heat the deeper layers of the skin, stimulating natural collagen and elastin production. This leads to smoother, tighter, and more youthful-looking skin. It can be applied to the face, neck, arms, tummy, and more.",
      },
      {
        title: "more youthful-looking skin",
        description:
          "Laser skin tightening uses advanced laser technology to heat the deeper layers of the skin, stimulating natural collagen and elastin production. This leads to smoother, tighter, and more youthful-looking skin. It can be applied to the face, neck, arms, tummy, and more.",
      },
      {
        title: "Conclusion.",
        description:
          "Laser skin tightening uses advanced laser technology to heat the deeper layers of the skin, stimulating natural collagen and elastin production. This leads to smoother, tighter, and more youthful-looking skin. It can be applied to the face, neck, arms, tummy, and more.Laser skin tightening uses advanced laser technology to heat the deeper layers of the skin, stimulating natural collagen and elastin production. This leads to smoother, tighter, and more youthful-looking skin. It can be applied to the face, neck, arms, tummy, and more.Laser skin tightening uses advanced laser technology to heat the deeper layers of the skin, stimulating natural collagen and elastin production. This leads to smoother, tighter, and more youthful-looking skin. It can be applied to the face, neck, arms, tummy, and more.",
      },
    ],
  },
  {
    id: 4,
    image: blog3,
    title: "Plasma Pen for Tightening Cellulite-Affected Skin",
    excerpt:
      "Is plasma fibroblast a better option for mild cellulite? Let's investigate.",
    date: "May 15, 2024",
    author: "Estevez Aesthetics Medical Spa",
    category: "Plasma Technology",
    details: [
      {
        title: "Introduction",
        description:
          "Laser skin tightening uses advanced laser technology to heat the deeper layers of the skin, stimulating natural collagen and elastin production. This leads to smoother, tighter, and more youthful-looking skin. It can be applied to the face, neck, arms, tummy, and more.",
      },
      {
        title: "Why Laser Works",
        description:
          "Laser skin tightening uses advanced laser technology to heat the deeper layers of the skin, stimulating natural collagen and elastin production. This leads to smoother, tighter, and more youthful-looking skin. It can be applied to the face, neck, arms, tummy, and more.Laser skin tightening uses advanced laser technology to heat the deeper layers of the skin, stimulating natural collagen and elastin production. This leads to smoother, tighter, and more youthful-looking skin. It can be applied to the face, neck, arms, tummy, and more.Laser skin tightening uses advanced laser technology to heat the deeper layers of the skin, stimulating natural collagen and elastin production. This leads to smoother, tighter, and more youthful-looking skin. It can be applied to the face, neck, arms, tummy, and more.",
      },
      {
        title: "What is Laser Skin Tightening?",
        description:
          "Laser skin tightening uses advanced laser technology to heat the deeper layers of the skin, stimulating natural collagen and elastin production. This leads to smoother, tighter, and more youthful-looking skin. It can be applied to the face, neck, arms, tummy, and more.",
      },
      {
        title: "tightening uses advanced laser technology",
        description:
          "Laser skin tightening uses advanced laser technology to heat the deeper layers of the skin, stimulating natural collagen and elastin production. This leads to smoother, tighter, and more youthful-looking skin. It can be applied to the face, neck, arms, tummy, and more.Laser skin tightening uses advanced laser technology to heat the deeper layers of the skin, stimulating natural collagen and elastin production. This leads to smoother, tighter, and more youthful-looking skin. It can be applied to the face, neck, arms, tummy, and more.Laser skin tightening uses advanced laser technology to heat the deeper layers of the skin, stimulating natural collagen and elastin production. This leads to smoother, tighter, and more youthful-looking skin. It can be applied to the face, neck, arms, tummy, and more.",
      },
      {
        title: "more youthful-looking skin",
        description:
          "Laser skin tightening uses advanced laser technology to heat the deeper layers of the skin, stimulating natural collagen and elastin production. This leads to smoother, tighter, and more youthful-looking skin. It can be applied to the face, neck, arms, tummy, and more.",
      },
      {
        title: "Conclusion.",
        description:
          "Laser skin tightening uses advanced laser technology to heat the deeper layers of the skin, stimulating natural collagen and elastin production. This leads to smoother, tighter, and more youthful-looking skin. It can be applied to the face, neck, arms, tummy, and more.Laser skin tightening uses advanced laser technology to heat the deeper layers of the skin, stimulating natural collagen and elastin production. This leads to smoother, tighter, and more youthful-looking skin. It can be applied to the face, neck, arms, tummy, and more.Laser skin tightening uses advanced laser technology to heat the deeper layers of the skin, stimulating natural collagen and elastin production. This leads to smoother, tighter, and more youthful-looking skin. It can be applied to the face, neck, arms, tummy, and more.",
      },
    ],
  },
  {
    id: 5,
    image: blog4,
    title: "Can Cellulite Be Permanently Removed?",
    excerpt:
      "We break down realistic expectations for cellulite treatment and maintenance tips.",
    date: "May 17, 2024",
    author: "Dr. Lisa Vaughn",
    category: "Body Contouring",
    details: [
      {
        title: "Introduction",
        description:
          "Laser skin tightening uses advanced laser technology to heat the deeper layers of the skin, stimulating natural collagen and elastin production. This leads to smoother, tighter, and more youthful-looking skin. It can be applied to the face, neck, arms, tummy, and more.",
      },
      {
        title: "Why Laser Works",
        description:
          "Laser skin tightening uses advanced laser technology to heat the deeper layers of the skin, stimulating natural collagen and elastin production. This leads to smoother, tighter, and more youthful-looking skin. It can be applied to the face, neck, arms, tummy, and more.Laser skin tightening uses advanced laser technology to heat the deeper layers of the skin, stimulating natural collagen and elastin production. This leads to smoother, tighter, and more youthful-looking skin. It can be applied to the face, neck, arms, tummy, and more.Laser skin tightening uses advanced laser technology to heat the deeper layers of the skin, stimulating natural collagen and elastin production. This leads to smoother, tighter, and more youthful-looking skin. It can be applied to the face, neck, arms, tummy, and more.",
      },
      {
        title: "What is Laser Skin Tightening?",
        description:
          "Laser skin tightening uses advanced laser technology to heat the deeper layers of the skin, stimulating natural collagen and elastin production. This leads to smoother, tighter, and more youthful-looking skin. It can be applied to the face, neck, arms, tummy, and more.",
      },
      {
        title: "tightening uses advanced laser technology",
        description:
          "Laser skin tightening uses advanced laser technology to heat the deeper layers of the skin, stimulating natural collagen and elastin production. This leads to smoother, tighter, and more youthful-looking skin. It can be applied to the face, neck, arms, tummy, and more.Laser skin tightening uses advanced laser technology to heat the deeper layers of the skin, stimulating natural collagen and elastin production. This leads to smoother, tighter, and more youthful-looking skin. It can be applied to the face, neck, arms, tummy, and more.Laser skin tightening uses advanced laser technology to heat the deeper layers of the skin, stimulating natural collagen and elastin production. This leads to smoother, tighter, and more youthful-looking skin. It can be applied to the face, neck, arms, tummy, and more.",
      },
      {
        title: "more youthful-looking skin",
        description:
          "Laser skin tightening uses advanced laser technology to heat the deeper layers of the skin, stimulating natural collagen and elastin production. This leads to smoother, tighter, and more youthful-looking skin. It can be applied to the face, neck, arms, tummy, and more.",
      },
      {
        title: "Conclusion.",
        description:
          "Laser skin tightening uses advanced laser technology to heat the deeper layers of the skin, stimulating natural collagen and elastin production. This leads to smoother, tighter, and more youthful-looking skin. It can be applied to the face, neck, arms, tummy, and more.Laser skin tightening uses advanced laser technology to heat the deeper layers of the skin, stimulating natural collagen and elastin production. This leads to smoother, tighter, and more youthful-looking skin. It can be applied to the face, neck, arms, tummy, and more.Laser skin tightening uses advanced laser technology to heat the deeper layers of the skin, stimulating natural collagen and elastin production. This leads to smoother, tighter, and more youthful-looking skin. It can be applied to the face, neck, arms, tummy, and more.",
      },
    ],
  },
  {
    id: 6,
    image: blog5,
    title: "Before and After: Real Laser Results",
    excerpt:
      "Take a look at real client results after multiple laser sessions.",
    date: "May 20, 2024",
    author: "Estevez Aesthetics Medical Spa",
    category: "Client Stories",
    details: [
      {
        title: "Visible Smoothing",
        description:
          "Skin becomes visibly tighter and smoother after just 3–4 sessions.",
      },
    ],
  },
  {
    id: 7,
    image: blog6,
    title: "Laser Myths You Should Stop Believing",
    excerpt: "Debunking common misconceptions about laser cellulite removal.",
    date: "May 21, 2024",
    author: "Nadia Blake, R.N.",
    category: "Skin Education",
    details: [
      {
        title: "Lasers Don’t Burn Skin",
        description:
          "Modern lasers are safe, FDA-approved, and precisely targeted.",
      },
    ],
  },
  {
    id: 8,
    image: blog1,
    title: "What Causes Cellulite and How to Fight It",
    excerpt:
      "Understanding the root causes of cellulite helps guide better treatment choices.",
    date: "May 22, 2024",
    author: "Estevez Aesthetics Medical Spa",
    category: "Wellness",
    details: [
      {
        title: "Hormonal Impact",
        description:
          "Estrogen, insulin, and thyroid levels can all influence cellulite formation.",
      },
    ],
  },
  {
    id: 9,
    image: blog2,
    title: "How to Prepare for Your First Laser Session",
    excerpt:
      "Everything you need to know before stepping in for your first cellulite laser treatment.",
    date: "May 25, 2024",
    author: "Estevez Aesthetics Medical Spa",
    category: "Treatment Tips",
    details: [
      {
        title: "Hydrate & Avoid Sun",
        description:
          "Come in with clean skin and stay hydrated for best results.",
      },
    ],
  },
  {
    id: 10,
    image: blog3,
    title: "Best Home Laser Devices for Cellulite",
    excerpt: "A list of FDA-cleared home-use laser devices for skin smoothing.",
    date: "May 27, 2024",
    author: "Grace Lin",
    category: "Home Devices",
    details: [
      {
        title: "What to Look for",
        description:
          "Check wavelength, energy output, and safety certifications.",
      },
    ],
  },
  {
    id: 11,
    image: blog4,
    title: "Non-Surgical Skin Tightening Explained",
    excerpt:
      "Understand the science behind lasers, radiofrequency, and ultrasound.",
    date: "June 1, 2024",
    author: "Dr. Andrew Greene",
    category: "Aesthetic Science",
    details: [
      {
        title: "Collagen Regeneration",
        description:
          "Heat-based treatments encourage natural collagen production.",
      },
    ],
  },
  {
    id: 12,
    image: blog5,
    title: "Cellulite and Aging: What You Can Do",
    excerpt: "How aging impacts cellulite and how to proactively manage it.",
    date: "June 3, 2024",
    author: "Estevez Aesthetics Medical Spa",
    category: "Anti-Aging",
    details: [
      {
        title: "Preventive Treatments",
        description:
          "Starting treatments early can slow cellulite progression.",
      },
    ],
  },
  {
    id: 13,
    image: blog6,
    title: "Is Laser Right for All Skin Types?",
    excerpt:
      "Laser safety and effectiveness across different skin tones explained.",
    date: "June 5, 2024",
    author: "Dr. Malik Johnson",
    category: "Skin Safety",
    details: [
      {
        title: "Fitzpatrick Scale",
        description:
          "Most modern lasers are calibrated to safely treat all six skin types.",
      },
    ],
  },
  {
    id: 14,
    image: blog1,
    title: "Combine Laser with Lymphatic Drainage",
    excerpt:
      "Maximize your results by combining laser with post-treatment massage.",
    date: "June 6, 2024",
    author: "Estevez Aesthetics Medical Spa",
    category: "Post-Treatment",
    details: [
      {
        title: "Boost Circulation",
        description:
          "Improved lymphatic flow supports collagen synthesis and toxin removal.",
      },
    ],
  },
  {
    id: 15,
    image: blog2,
    title: "Common Side Effects of Laser Cellulite Treatment",
    excerpt: "What to expect post-procedure and how to care for your skin.",
    date: "June 7, 2024",
    author: "Dr. Yasmine Patel",
    category: "Aftercare",
    details: [
      {
        title: "Redness and Swelling",
        description: "These are normal and usually resolve within 24–48 hours.",
      },
    ],
  },
  {
    id: 16,
    image: blog3,
    title: "How Many Sessions Do You Need?",
    excerpt:
      "A guide to typical treatment schedules for lasting cellulite reduction.",
    date: "June 8, 2024",
    author: "Estevez Aesthetics Medical Spa",
    category: "Treatment Plans",
    details: [
      {
        title: "Frequency Matters",
        description: "Most clients need 4–6 sessions spaced 2–4 weeks apart.",
      },
    ],
  },
  {
    id: 17,
    image: blog4,
    title: "What to Avoid After Laser Treatment",
    excerpt: "Crucial recovery tips for optimal healing and results.",
    date: "June 10, 2024",
    author: "Dr. Sasha Kim",
    category: "Aftercare",
    details: [
      {
        title: "No Direct Sunlight",
        description: "UV exposure can irritate freshly treated skin.",
      },
    ],
  },
  {
    id: 18,
    image: blog5,
    title: "The Science of Collagen Production",
    excerpt:
      "How laser treatments stimulate the body’s natural healing process.",
    date: "June 11, 2024",
    author: "Dr. Ryan Olson",
    category: "Skin Biology",
    details: [
      {
        title: "Laser-induced Fibroblasts",
        description:
          "Fibroblasts are activated by heat to form new collagen fibers.",
      },
    ],
  },
  {
    id: 19,
    image: blog6,
    title: "Can You Treat Cellulite on the Arms?",
    excerpt: "Yes, and here’s how laser treatments help firm upper arm skin.",
    date: "June 12, 2024",
    author: "Estevez Aesthetics Medical Spa",
    category: "Body Zones",
    details: [
      {
        title: "Tricep Smoothing",
        description: "Laser sessions can visibly reduce arm dimpling and sag.",
      },
    ],
  },
  {
    id: 20,
    image: blog1,
    title: "Laser Cellulite Treatment: Cost & Value",
    excerpt:
      "Understand the financial side and long-term value of laser treatment.",
    date: "June 13, 2024",
    author: "Jennifer Hall",
    category: "Pricing",
    details: [
      {
        title: "Invest in Confidence",
        description:
          "While not cheap, results are lasting and worth it for many.",
      },
    ],
  },
];

export interface Category {
  name: string;
  items: string[];
  image: string | StaticImageData;
}

export const MenuCategoryData: Category[] = [
  {
    name: "Injectables & Filler",
    items: ["Botox", "Dysport", "Dermal Fillers", "Lip Fillers", "Sculptra"],
    image: about1,
  },
  {
    name: "Laser & Light Treatments",
    items: [
      "Tetra CO2 Laser",
      "Laser Hair Removal",
      "ClearLift (Non-Ablative Rejuvenation)",
      "Dye-VL (Pigmentation & Vascular Lesions)",
      "Tattoo Removal",
      "Nail Fungus Laser",
    ],
    image: about2,
  },
  {
    name: "Laser & Light Treatments",
    items: [
      "Tetra CO2 Laser",
      "Laser Hair Removal",
      "ClearLift (Non-Ablative Rejuvenation)",
      "Dye-VL (Pigmentation & Vascular Lesions)",
      "Tattoo Removal",
      "Nail Fungus Laser",
    ],
    image: about2,
  },
  {
    name: "Skin Rejuvenation",
    items: [
      "Custom Facials",
      "Chemical Peels",
      "Microneedling",
      "Skin Tag Removal",
      "Morpheus8 (Microneedling & Skin Tightening)",
      "Opus Plasma (Skin Resurfacing)",
    ],
    image: about3,
  },
  {
    name: "Skin Rejuvenation",
    items: [
      "Custom Facials",
      "Chemical Peels",
      "Microneedling",
      "Skin Tag Removal",
      "Morpheus8 (Microneedling & Skin Tightening)",
      "Opus Plasma (Skin Resurfacing)",
    ],
    image: about3,
  },
  {
    name: "Body Sculpting",
    items: [
      "BodyTite (Fat Reduction + Tightening For Larger Areas)",
      "AccuTite (Smaller, Delicate Areas)",
      "FaceTite (Lower Face + Jawline)",
    ],
    image: about4,
  },
  {
    name: "Wellness & PRP",
    items: [
      "Semaglutide (Medical Weight Loss)",
      "Hormone Replacement Therapy",
      "Alma Duo (Sexual Wellness)",
      "IV Drip Therapy",
      "PRP Regenerative Treatments",
    ],
    image: about5,
  },
];
export const MenuCategoryData1: Category[] = [
  {
    name: "Injectables & Filler",
    items: ["Botox", "Dysport", "Dermal Fillers", "Lip Fillers", "Sculptra"],
    image: injectable,
  },
  {
    name: "Laser & Light Treatments",
    items: [
      "Tetra CO2 Laser",
      "Laser Hair Removal",
      "ClearLift (Non-Ablative Rejuvenation)",
      "Dye-VL (Pigmentation & Vascular Lesions)",
      "Tattoo Removal",
      "Nail Fungus Laser",
    ],
    image: laser,
  },
  {
    name: "Skin Rejuvenation",
    items: [
      "Custom Facials",
      "Chemical Peels",
      "Microneedling",
      "Skin Tag Removal",
      "Morpheus8 (Microneedling & Skin Tightening)",
      "Opus Plasma (Skin Resurfacing)",
    ],
    image: about1,
  },
  {
    name: "Body Sculpting",
    items: [
      "BodyTite (Fat Reduction + Tightening For Larger Areas)",
      "AccuTite (Smaller, Delicate Areas)",
      "FaceTite (Lower Face + Jawline)",
    ],
    image: about3,
  },
  {
    name: "Wellness & PRP",
    items: [
      "Semaglutide (Medical Weight Loss)",
      "Hormone Replacement Therapy",
      "Alma Duo (Sexual Wellness)",
      "IV Drip Therapy",
      "PRP Regenerative Treatments",
    ],
    image: wellness,
  },
];

export const MenuConditionsTreated: Category[] = [
  {
    name: "Skin Concerns",
    items: [
      "Wrinkles & Fine Lines",
      "Enlarged Pores",
      "Uneven Skin Texture",
      "Skin Laxity (Loose Skin)",
      "Sun Damage",
      "Hyperpigmentation",
      "Melasma",
      "Dull or Dehydrated Skin",
      "Redness & Rosacea",
      "Acne",
      "Scars (Surgical, Injury, Etc.)",
      "Stretch Marks",
      "Skin Tags",
    ],
    image: about4, // replace with the actual image path
  },
  {
    name: "Fat, Sculpting & Contouring",
    items: [
      "Stubborn Body Fat",
      "Double Chin",
      "Jowls & Sagging Jawline",
      "Undefined Facial Contours",
      "Loose Skin On Arms, Abdomen, Thighs",
    ],
    image: Conditions2, // replace with the actual image path
  },
  {
    name: "Hair & Scalp Skin Concerns",
    items: ["Thinning Hair", "Early Hair Loss", "Receding Hairline"],
    image: Conditions3, // replace with the actual image path
  },
  {
    name: "Vascular & Pigment Issues",
    items: [
      "Spider Veins",
      "Vascular Lesions",
      "Broken Capillaries",
      "Brown Spots & Age Spots",
      "Uneven Skin Tone",
    ],
    image: Conditions1, // replace with the actual image path
  },
  {
    name: "Laser-Specific",
    items: ["Unwanted Hair (Face & Body)", "Tattoo Removal", "Nail Fungus"],
    image: Conditions2, // replace with the actual image path
  },
  {
    name: "Unwanted Growths",
    items: ["Skin Tags", "Benign Lesions", "Sebaceous Hyperplasia"],
    image: Conditions3, // replace with the actual image path
  },
  {
    name: "Wellness & Hormonal",
    items: [
      "Low Energy & Fatigue",
      "Menopausal Symptoms",
      "Hormonal Imbalance",
      "Low Libido",
      "Erectile Dysfunction",
      "Vaginal Laxity Or Sensitivity Loss",
      "Weight Gain",
      "Slow Metabolism",
      "Acne Kicks",
    ],
    image: Conditions1, // replace with the actual image path
  },
];
export const MenuPatientResources: Category[] = [
  {
    name: "Skin Concerns",
    items: [
      "Brightening Serum",
      "Pigment Control Crème",
      "Gentle Cleanser",
      "Soothing Antioxidant Mist",
      "Exfoliating Pads",
      "Tretinol Serum",
      "Growth Factor Cream",
      "Carboxy Mask (Oxygenating CO2 Mask For Brightening, Detoxifying, And Circulation Boost)",
      "CBD Kit",
      "Acne Kit",
      "Anti-Aging Kit",
    ],
    image: product1, // replace with the actual image path
  },
  {
    name: "Supplements",
    items: ["external link"],
    image: product2, // replace with the actual image path
  },
  {
    name: "Kits & Regimens",
    items: [
      "Anti-Aging Kit",
      "Body Firming Kit",
      "CBD Skincare Kit",
      "Hair Rescue System",
      "DynamicServiceContentProducts",
    ],
    image: product3, // replace with the actual image path
  },
];

export interface beforeafter {
  name: string;
  image: string | StaticImageData;
}

export const MenuBeforeAfter: beforeafter[] = [
  {
    name: "Skin Concerns",
    image: beforeAfter1, // replace with the actual image path
  },
  {
    name: "Fat, Sculpting & Contouring",
    image: beforeAfter2, // replace with the actual image path
  },
  {
    name: "Hair & Scalp Skin Concerns",
    image: beforeAfter3, // replace with the actual image path
  },
];

export const sectionBars = [
  { id: 1, path: "/botox", label: "Botox" },
  { id: 2, path: "/dsport", label: "Dysport" },
  { id: 3, path: "dermal", label: "Dermal Fillers" },
  { id: 4, path: "morpheus8", label: "Morpheus8" },
  { id: 5, path: "plasma", label: "Opus Plasma" },
  { id: 6, path: "tetra", label: "Tetra CO2" },
  { id: 7, path: "botox", label: "ClearLift" },
];

export const dynamicCardData = [
  {
    id: "botox",
    image1: img11,
    image2: img22,
    title: "Botox Treatments for a Refreshed, Youthful Look",
    description:
      "Botox is an injectable treatment to temporarily relax muscles in the face, thereby reducing fine lines and wrinkles. By blocking nerve signals, it prevents muscles to contract, smoothing the skin and giving it a more youthful appearance. Commonly treated areas include forehead lines, crow’s feet, and frown lines. Botox is popular for those seeking a more refreshed and youthful look without surgery.",
    buttonText: "Learn More",
    buttonClassName: "card_button_pink",
    titleClassName: "card_title_black",
    descriptionClassName: "card_description",
    buttonLink: "#",
  },
  {
    id: "dsport",
    image1: img33,
    image2: img44,
    title: "Target & Smooth Lines with Dysport",
    description:
      "Botox is an injectable treatment to temporarily relax muscles in the face, thereby reducing fine lines and wrinkles. By blocking nerve signals, it prevents muscles to contract, smoothing the skin and giving it a more youthful appearance. Commonly treated areas include forehead lines, crow’s feet, and frown lines. Botox is popular for those seeking a more refreshed and youthful look without surgery.",
    buttonText: "Learn More",
    buttonClassName: "card_button_pink",
    titleClassName: "card_title_pink",
    descriptionClassName: "card_description",
    buttonLink: "#",
  },
  {
    id: "dermal",
    image1: img11,
    image2: img55,
    title: "Enhance Your Natural Beauty with Dermal Fillers",
    description:
      "Fillers are injectable treatments designed to restore volume, smooth wrinkles, and enhance facial contours. At Estevez Aesthetics Medical Spa in Las Vegas, NV, we offer a range of fillers, including Restylane Contour, Restylane Defyne, and Restylane Lyft. These fillers work by injecting hyaluronic acid...",
    buttonText: "Learn More",
    buttonClassName: "card_button_pink",
    titleClassName: "card_title_pink",
    descriptionClassName: "card_description",
    buttonLink: "#",
  },
  {
    id: "morpheus8",
    image1: img33,
    image2: img66,
    title: "Revive Your Skin with Morpheus8 Technology",
    description:
      "Morpheus8 is a cutting-edge, minimally invasive skin treatment that combines microneedling with radiofrequency energy to repair and tighten the skin. Available at Estevez Aesthetics Medical Spa in Las Vegas, NV, this innovative procedure penetrates deep into the skin and fat to remodel and contour the face and body...",
    buttonText: "Learn More",
    buttonClassName: "card_button_black",
    titleClassName: "card_title_black",
    descriptionClassName: "card_description",
    buttonLink: "#",
  },
  {
    image1: img11,
    image2: img77,
    title: "Revive Your Skin with Morpheus8 Technology",
    description:
      "Fillers are injectable treatments designed to restore volume, smooth wrinkles, and enhance facial contours. At Estevez Aesthetics Medical Spa in Las Vegas, NV, we offer a range of fillers, including Restylane Contour, Restylane Defyne, and Restylane Lyft. These fillers work by injecting hyaluronic acid...",
    buttonText: "Learn More",
    buttonClassName: "card_button_pink",
    titleClassName: "card_title_pink",
    descriptionClassName: "card_description",
    buttonLink: "#",
  },
  {
    id: "plasma",
    image1: img33,
    image2: img88,
    title: "Opus Plasma",
    description:
      "Plasma Skin Tightening is a revolutionary treatment that leverages the power of Alma’s Opus Plasma® technology to rejuvenate and tighten your skin. At Estevez Aesthetics in Las Vegas, NV, we specialize in this cutting-edge procedure that targets sagging skin, fine lines, and wrinkles by converting electrical...",
    buttonText: "Learn More",
    buttonClassName: "card_button_black",
    titleClassName: "card_title_black",
    descriptionClassName: "card_description",
    buttonLink: "#",
  },
  {
    id: "tetra",
    image1: img11,
    image2: img99,
    title: "Transform Your Skin with Tetra CO2 Technology",
    description:
      "Tetra CO2 is an advanced, minimally invasive skin therapy that utilizes carbon dioxide laser technology to rejuvenate and tighten the skin. Offered at Radiant Glow Aesthetic Clinic in Miami, FL, this state-of-the-art procedure effectively targets the deeper layers of the skin, promoting collagen production and enhancing the overall contour of the face and body.",
    buttonText: "Learn More",
    buttonClassName: "card_button_pink",
    titleClassName: "card_title_pink",
    descriptionClassName: "card_description",
    buttonLink: "#",
  },
];








export const infoTextSections = [
  {
    subtitle: "BALANCE, BEAUTY, GLOW",
    title: "Facial Balancing At Esteves Aesthetics",
    descriptions: [
      "At Esteves Aesthetics, Facial Balancing Is More Than Just Enhancing Your Appearance—It's About Restoring Harmony To The Features That Make You Uniquely Beautiful. As We Age, Subtle Shifts In Facial Proportions Can Lead To A Look That Feels Unfamiliar. You Might Notice Volume Loss, Asymmetry, Or Sagging In Specific Areas, Even If You Can't Quite Define What's Changed.",
      "Facial Balancing Is A Non-Surgical, Highly Personalized Treatment That Gently Corrects These Imbalances Using Precise Dermal Fillers And Other Advanced Techniques. By Adjusting Contours In Key Areas Like The Cheeks, Chin, Jawline, And Lips, We Help Bring Your Facial Features Back Into Alignment—Leaving You Looking Refreshed, Rested, And Naturally Radiant.",
    ],
    buttonText: "Book Now",
    buttonLink: "/contact",
    buttonVariant: "pink",
  }]



  // data/facialBalancingInfo.ts
export const facialBalancingInfo = {
  subtitle: "WHAT IS FACIAL BALANCING?",
  title: "It’s All About Harmony",
  description:
    "Facial balancing is a customized treatment approach that uses a combination of aesthetic tools to enhance proportions and symmetry across the face. Rather than focusing on one feature, we look at how all areas of the face interact—ensuring each enhancement complements the whole. This leads to more natural-looking, long-lasting results and a look that truly feels like you.",
  items: [
    {
      title: "Dermal Fillers",
      text: "Dermal fillers are one of the primary tools in facial balancing. They add volume where it’s been lost—such as the cheeks, under-eyes, or temples—and sculpt features like the chin or jawline. Fillers are made with hyaluronic acid, a naturally occurring substance in the body, and they provide immediate results with little to no downtime.",
    },
    {
      title: "Laser Skin Resurfacing",
      text: "Skin texture and tone play a key role in overall facial harmony. Laser skin resurfacing helps improve skin quality by targeting fine lines, pigmentation, acne scars, and uneven texture. It not only enhances the skin’s appearance but also ensures that any facial contouring looks even more refined and radiant.",
    },
    {
      title: "Lip Filler",
      text: "A well-balanced face includes proportionate, defined lips. Whether you’re looking to restore volume lost with age or create a more symmetrical shape, lip fillers can be tailored to enhance your natural contours without overfilling. Subtle lip enhancement brings harmony to the lower third of the face and contributes to an overall youthful look.",
    },
    {
      title: "Neurotoxins",
      text: "Neurotoxins relax the muscles that cause expression lines—like forehead wrinkles, frown lines, and crow’s feet. In facial balancing, they can also be used strategically to lift brows, soften the jawline, or refine asymmetries. The result is smoother skin and a more relaxed, refreshed appearance.",
    },
    {
      title: "Thread Lifts",
      text: "Thread lifts are a minimally invasive alternative to surgical facelifts. Using medical-grade threads inserted beneath the skin, this treatment provides a gentle lift to sagging areas like the cheeks, jawline, or neck. It also stimulates collagen production over time, improving skin firmness and structure naturally.",
    },
  ],
};
