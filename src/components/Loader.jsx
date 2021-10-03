import Image from "./Image";
import { motion } from "framer-motion";

//Variants
const containerVariants = {
    show: {
        transition: {
            staggerChildren: 0.35,
        },
    },
};

const itemVariants = {
    hidden: {
        opacity: 0,
        y: 200,
    },

    show: {
        opacity: 1,
        y: 0,
        transition: {
            ease: [0.6, 0.01, -0.05, 0.95],
            duration: 1.6,
        },
    },

    exit: {
        opacity: 0,
        y: -200,
        transition: {
            ease: "easeInOut",
            duration: 0.8,
        },
    },
};

const itemMainVariant = {
    hidden: {
        opacity: 0,
        y: 200,
    },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            ease: [0.6, 0.01, -0.05, 0.95],
            duration: 1.6,
        },
    },
};

const Loader = ({ setLoading }) => {
    return (
        <div className="loader">
            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="show"
                exit="exit"
                className="loader-inner"
                onAnimationComplete={() => setLoading(false)}
            >
                <ImageBlock variants={itemVariants} id="image-1" />
                <motion.div
                    variants={itemMainVariant}
                    className="transition-image"
                >
                    <motion.img
                        src={process.env.PUBLIC_URL + `/images/image-2.jpg`}
                        alt="random alt"
                        layoutId="main-image-1"
                    />
                </motion.div>
                <ImageBlock variants={itemVariants} id="image-3" />
                <ImageBlock variants={itemVariants} id="image-4" />
                <ImageBlock variants={itemVariants} id="image-5" />
            </motion.div>
        </div>
    );
};

export const ImageBlock = ({ id, variants }) => {
    return (
        <motion.div variants={variants} className={`image-block ${id}`}>
            <Image
                src={process.env.PUBLIC_URL + `/images/${id}.webp`}
                fallback={process.env.PUBLIC_URL + `/images/${id}.jpg`}
                alt={id}
            />
        </motion.div>
    );
};
export default Loader;
