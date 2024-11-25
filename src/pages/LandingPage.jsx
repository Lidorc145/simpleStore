import Grid from "@mui/material/grid2";
import {Box} from "@mui/material";
import {Button, Link} from "@nextui-org/react";
import React from "react";

function LandingPage() {

    return (
        <Box sx={{flexGrow: 1}}>
            <Grid container className='items-center justify-center' spacing={2} style={{
                width: '100%',
                height: 'calc(100vh - 64px)',
                margin: 0,
                backgroundImage: "url('./landingBg.jpeg')",
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}>
                <Grid item size={{xs: 12, md: 7}} className="wellcome-text">
                    {/*<motion.div whileHover={{scale: 1.2}}*/}
                    {/*            whileTap={{scale: 0.95}} animate={{x: 0, y: 100}}>*/}
                    <div style={{width: '100%', padding: 20}}>
                        <p className="text-6xl font-bold text-inherit">Wellcom to Paradise</p>
                        <p className="text-3xl font-bold text-inherit">Your Gateway to Natural Bliss</p>

                        <Button className='mt-10' size="lg" as={Link} color="default" href="./#/Store" variant="flat">
                            Get Started
                        </Button>
                    </div>
                    <div style={{width: '100%', padding: 20}} className="text-medium font-bold text-inherit">
                        At Paradise, we specialize in connecting people with the vibrant beauty of nature. From
                        elegant
                        indoor plants that purify your air to unique exotic blooms that make a statement, we have
                        something for every plant lover. Our curated selection ensures the highest quality, offering
                        you
                        plants that thrive with ease and elevate any environment. Whether you're creating your own
                        garden oasis or looking for the perfect gift, Paradise is here to inspire and support your
                        journey. Step into a world where nature meets elegance – welcome to Paradise.
                    </div>
                    {/*</motion.div>*/}
                </Grid>
            </Grid>
        </Box>
    );

}

export default LandingPage