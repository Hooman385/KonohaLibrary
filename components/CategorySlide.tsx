// @ts-ignore
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import CategoryCard from "./CategoryCard";
import { categorySamples } from "@/categories";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

const CategorySlide = () => {
  return (
    <Splide
      options={{
        rewind: true,
        gap: "1rem",
        pagination: false,
        width: "100vw",
      }}
      hasTrack={false}
      hasArrows={false}
      aria-label="Sample category slide"
    >
      <SplideTrack>
        {categorySamples.map((item) => (
          <SplideSlide
            key={item.name}
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <CategoryCard
              image={`/assets/images/category-images/${item.name}.jpg`}
              title={`${
                item.name.substring(0, 1).toUpperCase() +
                item.name.slice(1).split("-").join(" ")
              } `}
              desc={item.desc}
            />
          </SplideSlide>
        ))}
      </SplideTrack>
      <div className="splide__arrows">
        <button
          style={{ background: "none", transform: "rotate(180deg)" }}
          className="splide__arrow splide__arrow--prev"
        >
          <ArrowBackIosIcon />
        </button>
        <button
          style={{ background: "none" }}
          className="splide__arrow splide__arrow--next"
        >
          <ArrowForwardIosIcon />
        </button>
      </div>
    </Splide>
  );
};

export default CategorySlide;
