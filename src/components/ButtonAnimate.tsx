"use client"
import { motion } from "motion/react"

const ButtonAnimate = () => {
    return ( 
        <motion.button
            initial={{ scale: 0}}

            whileInView={{ scale: 1 }}
            className="bg-green-500 rounded p-4"
        >
            Button Animate
        </motion.button>
     );
}
 
export default ButtonAnimate;