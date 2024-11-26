import React, {useState} from 'react';
import {Card, CardBody, CardFooter, CardHeader, Image} from "@nextui-org/react";
import IconButton from "@mui/material/IconButton";
import RemoveIcon from "@mui/icons-material/Remove";
import Typography from "@mui/material/Typography";
import AddIcon from "@mui/icons-material/Add";

const productTile = ({item = {}, index}) => {
    const [count, setCount] = useState(0);
    const handleIncrement = () => {
        setCount(prevCount => prevCount + 1);
    };

    const handleDecrement = () => {
        if (count > 0) {
            setCount(prevCount => prevCount - 1);
        }
    };

    return (
        <Card className="product-tile flex flex-row md:flex-col " style={{width: '-webkit-fill-available'}}
              shadow="sm" key={index} isPressable>
            <CardHeader
                className="whitespace-wrap  text-small justify-between order-2 sm:order-1 hidden md:flex px-0"
                style={{height: '100%'}}>
                {item.name}
                <p className={"whitespace-nowrap text-default-500 " + (count ? 'text-green-500' : '')}>
                    {'$ ' + item.price * (count || 1)}</p>
            </CardHeader>
            <CardBody className="overflow-visible p-0 order-1 sm:order-2 hidden md:flex">
                <Image
                    shadow="sm"
                    radius="lg"
                    width="100%"
                    height="100%"
                    alt={item.name}
                    className="w-full object-cover h-[140px]"
                    src={item.imageUrl}
                    css={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        aspectRatio: 1,
                    }}
                />
            </CardBody>
            <Image
                shadow="sm"
                radius="lg"
                width="25vw"
                height="25vw"
                alt={item.name}
                className="w-full object-cover h-[140px] md:hidden"
                src={item.imageUrl}
                css={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    aspectRatio: 1,
                }}
            />
            <div style={{width: '100%'}} className="order-2 md:order-3">
                <CardHeader className="text-small flex justify-between flex-row md:hidden">
                    {item.name}
                    <p className={"text-default-500 " + (count ? 'text-green-500' : '')}>
                        {'$ ' + item.price * (count || 1)}</p>
                </CardHeader>
                <CardFooter className="text-small mb-0 pb-0 justify-between row-auto order-3">

                    <IconButton onClick={handleDecrement} color="default"
                                variant="flat" size="small"
                                aria-label="remove">
                        <RemoveIcon/>
                    </IconButton>
                    <Typography sx={{margin: '0 5px', padding: 0}}>
                        {count}
                    </Typography>
                    <IconButton onClick={handleIncrement} color="default" size="small"
                                variant="flat" aria-label="add">
                        <AddIcon/>
                    </IconButton>
                </CardFooter>
            </div>

        </Card>
    );
}

export default productTile;
