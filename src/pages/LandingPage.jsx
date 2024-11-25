import Grid from "@mui/material/grid2";
import {Box} from "@mui/material";
import {Button, Link} from "@nextui-org/react";
import React from "react";
import {motion} from "framer-motion";
import {Textfit} from "@ataverascrespo/react18-ts-textfit";

function LandingPage() {

    return (
        <Box sx={{flexGrow: 1}}>
            <Grid container className='landing-grid items-center justify-center' spacing={2}>
                <Grid item size={{xs: 12, md: 7}} style={{width: '100%', padding: 20}}
                      className="wellcome-text justify-center">

                    <motion.div initial={{opacity: 0, y: -50}}
                                animate={{opacity: 1, y: 0}}
                                transition={{
                                    duration: 1,
                                    delay: 0.5,
                                    ease: 'easeOut',
                                }}>
                        <p className="font-bold text-inherit"><Textfit mode="single" forceSingleModeWidth={true}
                                                                       min={30}
                                                                       max={90}>
                            Wellcom to
                            Paradise</Textfit></p>
                        <p className="text-3xl font-bold text-inherit "><Textfit mode="single"
                                                                                 forceSingleModeWidth={true}
                                                                                 min={15}
                                                                                 max={40}>Your Gateway to Natural
                            Bliss</Textfit></p>
                    </motion.div>
                    <motion.div className="my-5" whileHover={{scale: 0.9}}
                                whileTap={{scale: 0.95}} initial={{opacity: 0, y: -50}}
                                animate={{opacity: 1, y: 0}}
                                transition={{
                                    duration: 0.8,
                                    delay: 1.5,
                                    ease: 'easeOut',
                                }}>
                        <Button style={{zIndex: 5}} className='m-5 bg-white' size="lg" as={Link} color="default"
                                href="./#/Store"
                                variant="flat">
                            Get Started
                        </Button>
                    </motion.div>
                    <motion.div initial={{opacity: 0, y: 50}}
                                animate={{opacity: 1, y: 0}}
                                transition={{
                                    duration: 1,
                                    delay: 1,
                                    ease: 'easeOut',
                                }}>
                        <Grid item
                              className="about-text lg:text-medium md:text-sm text-xs  text-inherit">
                            At Paradise, we specialize in connecting people with the vibrant beauty of nature. From
                            elegant
                            indoor plants that purify your air to unique exotic blooms that make a statement, we have
                            something for every plant lover. Our curated selection ensures the highest quality, offering
                            you
                            plants that thrive with ease and elevate any environment. Whether you're creating your own
                            garden oasis or looking for the perfect gift, Paradise is here to inspire and support your
                            journey. Step into a world where nature meets elegance – welcome to Paradise.
                        </Grid>
                    </motion.div>
                </Grid>
            </Grid>
        </Box>
    );

}

export default LandingPage