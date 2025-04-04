import { useState } from "react";
import Box from "@mui/material/Box";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import { ArrowForward, ArrowBack } from "@mui/icons-material";
import { SxProps, Theme } from "@mui/material";

interface ArrowButtonProps {
    onClick: () => void;
    icon: React.ReactNode;
    position: "left" | "right";
};

const arrowButtonStyle: SxProps<Theme> = {
    position: "absolute",
    bottom: 0,
    margin: "1em",
    border: "1px solid black",
    borderRadius: "50px",
    backgroundColor: "#8884FF",
    width: "40px",
    height: "40px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    cursor: "pointer",
    "&:hover": {
        backgroundColor: "white",
        color: "#8884FF",
        border: "1px solid #8884FF",
    },
};

const ArrowButton = ({ onClick, icon, position }: ArrowButtonProps) => {
    const posStyle = position === "left" ? { left: 0 } : { right: 0 };
    return (
        <Box sx={{ ...arrowButtonStyle, ...posStyle }} onClick={onClick}>
            {icon}
        </Box>
    );
};

const ProductImages = ({ image, name, subImages, inStock }: Product) => {
    const initialIndex =
        subImages.indexOf(image) !== -1 ? subImages.indexOf(image) : 0;
    const [currentIndex, setCurrentIndex] = useState(initialIndex);

    const handleNextImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % subImages.length);
    };

    const handlePrevImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + subImages.length) % subImages.length);
    };

    return (
        <Box sx={{ display: "flex", justifyContent: "center" }}>
        {/* Thumbnails */}
        <ImageList
            sx={{
            width: 200,
            height: 600,
            mx: 3,
            display: { xs: "none", lg: "block" },
            }}
            cols={1}
            rowHeight={160}
        >
            {subImages.map((item, index) => (
            <ImageListItem
                key={index}
                sx={{
                width: 160,
                height: 160,
                overflow: "hidden",
                display: "flex",
                justifyContent: "center",
                }}
            >
                <Image
                src={item}
                alt={name}
                width={160}
                height={160}
                loading="lazy"
                style={{
                    objectFit: "cover",
                    objectPosition: "center",
                    cursor: "zoom-in",
                }}
                onClick={() => setCurrentIndex(index)}
                />
            </ImageListItem>
            ))}
        </ImageList>

        {/* Main Image */}
        <Box sx={{ position: "relative" }}>
            <Image
            src={subImages[currentIndex]}
            alt={name}
            loading="lazy"
            width={600}
            height={600}
            style={{
                width: "600px",
                height: "600px",
                objectFit: "cover",
                objectPosition: "center",
            }}
            />

            {inStock && (
                <>
                    <ArrowButton onClick={handlePrevImage} icon={<ArrowBack />} position="left" />
                    <ArrowButton onClick={handleNextImage} icon={<ArrowForward />} position="right" />
                </>
            )}

            {/* Out of Stock Overlay */}
            {!inStock && (
            <Box
                sx={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                backgroundColor: "rgba(0, 0, 0, 0.6)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                }}
            >
                <Typography variant="h6" sx={{ color: "white" }}>
                OUT OF STOCK
                </Typography>
            </Box>
            )}
        </Box>
        </Box>
    );
};

export default ProductImages;
