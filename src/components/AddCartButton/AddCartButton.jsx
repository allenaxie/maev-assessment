import React, { useState } from 'react';
import { Flex, Text, Button, Spinner } from 'theme-ui';
import { BsArrowRight, BsCheck2 } from 'react-icons/bs';

const AddCartButton = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [added, setAdded] = useState(false);

    const handleClick = () => {
        setAdded(true);
        setIsLoading(true);
        setTimeout(() => {
            setAdded(true);
            setIsLoading(false);
        }, 1500)

    }

    return (
        <Flex
            sx={{
                display: 'flex',
                flexDirection: 'column',
            }}
        >
            <Text
                sx={{
                    fontSize: '.8rem',
                    textTransform: 'uppercase',
                    paddingBottom: '1rem',
                    borderBottom: '1px solid #000',
                    width: '100%',
                    letterSpacing: '2px',
                }}
            >
                Add to cart
            </Text>
            <Flex
                sx={{
                    marginY: '2rem',
                }}
            >
                <Button
                    sx={{
                        width: '500px',
                        padding: '1rem 1.5rem',
                        cursor: 'pointer',
                        position: 'relative',
                    }}
                    onClick={handleClick}
                    disabled={added ? true : false}
                >
                    <Flex
                        sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            width: '100%',
                            color: added ? '#fff' : 'inherit',
                        }}
                    >
                        <span>
                            $149
                        </span>
                        <Flex
                            sx={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                marginLeft: '.5rem',
                            }}
                        >
                            <span>Add to Cart</span>
                            <Flex
                                sx={{marginLeft: '1.5rem'}}
                            >
                            <BsArrowRight />
                            </Flex>
                        </Flex>
                    </Flex>
                    <Flex
                        sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            width: '100%',
                            fontSize: '.9rem',
                            color: added ? '#fff' : 'inherit',
                        }}
                    >
                        <span>
                            $2.48 per meal
                        </span>
                        <span>
                            Subscribe now, cancel anytime
                        </span>
                    </Flex>
                    {added &&
                        <Flex
                            sx={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                color: '#fff',
                                width: '500px',
                                height: '100%',
                                backgroundColor: 'rgba(0,120,115,0.8)',
                            }}
                        >
                            <Flex
                                sx={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    width: '100%'
                                }}
                            >
                                {isLoading ? <Spinner />
                                    :
                                    <>
                                        <BsCheck2 />
                                        Added
                                    </>
                                }
                            </Flex>
                        </Flex>
                    }
                </Button>
            </Flex>
        </Flex>
    )
}

export default AddCartButton