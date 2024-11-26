import React from 'react';
import {motion} from "framer-motion";
import {Textfit} from "@ataverascrespo/react18-ts-textfit";
import ProductTile from "./productTile.jsx";

const categoryTile = (props) => {
    const {plantsCatalog = {}, category = {}, categoryKey} = props;
    return (
        <div key={category} className="container py-6">
            <motion.div initial={{opacity: 0, y: 20}}
                        animate={{opacity: 1, y: 0}}
                        transition={{
                            duration: 1,
                            delay: 1.5 * categoryKey,
                            ease: 'easeOut',
                        }}>
                <p className="text-3xl text-left font-bold text-inherit m-5"><Textfit mode="single"
                                                                                      forceSingleModeWidth={true}
                                                                                      min={13}
                                                                                      max={30}>
                    {category}</Textfit></p>
            </motion.div>


            <div className="px-2 gap-6 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
                {plantsCatalog.filter((item) => item.category === category).map((item, index) => (
                    <motion.div initial={{opacity: 0, x: 20}}
                                animate={{opacity: 1, x: 0}}
                                transition={{
                                    duration: 1,
                                    delay: 1 + 1.5 * categoryKey + 0.1 * index,
                                    ease: 'easeOut',
                                }}>
                        <ProductTile key={index} item={item} index={index}/>
                    </motion.div>
                ))}
            </div>


        </div>
    );
}

export default categoryTile;
