import { motion } from "framer-motion";

export default function Page({ children }) {
    return (
        <motion.main
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            style={{ minHeight: "100%" }}
        >
            {children}
        </motion.main>
    );
}
