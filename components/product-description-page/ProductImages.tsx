"use client";
import { useState } from "react";
import Box from "@mui/material/Box";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import { ArrowForward, ArrowBack } from "@mui/icons-material";
import { SxProps, Theme, useTheme } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";

interface ArrowButtonProps {
    onClick: () => void;
    icon: React.ReactNode;
    position: "left" | "right";
    }

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
    const theme = useTheme();
    // md breakpoint is 900px by default
    const isMdUp = useMediaQuery(theme.breakpoints.up("md"));

    const initialIndex =
        subImages.indexOf(image) !== -1 ? subImages.indexOf(image) : 0;
    const [currentIndex, setCurrentIndex] = useState(initialIndex);

    const handleNextImage = () => {
        setCurrentIndex((prev) => (prev + 1) % subImages.length);
    };
    const handlePrevImage = () => {
        setCurrentIndex(
        (prev) => (prev - 1 + subImages.length) % subImages.length
        );
    };

    return (
        <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
        {/* Conditionally render thumbnails only if width >= md */}
        {isMdUp && (
            <ImageList
            sx={{
                width: 200,
                height: 600,
                mx: 3,
            }}
            cols={1}
            rowHeight={160}
            >
            {subImages.map((item, index) => (
                <ImageListItem
                key={index}
                sx={{
                    position: "relative",
                    width: "100%",
                    maxWidth: 160,
                    aspectRatio: "1 / 1",
                    overflow: "hidden",
                }}
                >
                <Image
                    src={item}
                    alt={name}
                    fill
                    sizes="(max-width: 160px) 100vw, 160px"
                    style={{
                    objectFit: "cover",
                    objectPosition: "center",
                    cursor: "pointer",
                    }}
                    onClick={() => setCurrentIndex(index)}
                />
                </ImageListItem>
            ))}
            </ImageList>
        )}

        {/* Main Image */}
        <Box
            sx={{
                position: "relative",
                flexShrink: 0,
                width: { xs: 600, md: 600 }, // full width under md, 600px at md+
                maxWidth: "100%",
                aspectRatio: "1 / 1",
                mx: 2,
                "@media (max-width:650px)": {
                    width: 500,
                },
                "@media (max-width:550px)": {
                    width: 400,
                },
                "@media (max-width:450px)": {
                    width: 300,
                },
            }}
        >
            <Image
                src={subImages[currentIndex]}
                alt={name}
                sizes="(max-width: 1199px) 100vw, 600px"
                fill
                style={{
                    objectFit: "cover",
                    objectPosition: "center",
                }}
                priority             
            />

            {inStock && (
            <>
                <ArrowButton
                onClick={handlePrevImage}
                icon={<ArrowBack />}
                position="left"
                />
                <ArrowButton
                onClick={handleNextImage}
                icon={<ArrowForward />}
                position="right"
                />
            </>
            )}

            {!inStock && (
            <Box
                sx={{
                position: "absolute",
                inset: 0,
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
