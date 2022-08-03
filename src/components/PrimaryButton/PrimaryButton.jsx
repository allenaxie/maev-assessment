import React from 'react';
import { Flex, Text, Button } from 'theme-ui';
import { BsArrowRight } from 'react-icons/bs';

const PrimaryButton = () => {
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
                    letterSpacing: '2px'
                }}
            >
                Primary - centered text-arrow
            </Text>
            <Flex
                sx={{
                    marginY: '2rem',
                }}
            >
                <Button
                    sx={{
                        width: '250px',
                        height: '70px',
                        padding: '1rem',
                        cursor: 'pointer',
                        '&:hover .addCart': {
                            display: 'none',
                        },
                        '.CTACopy': {
                            display: 'none',
                        },
                        '&:hover .CTACopy': {
                            display: 'inline',
                        },
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
                        <span className='addCart'>
                            Add to Cart
                        </span>
                        <span className='CTACopy'>CTA Copy Area</span>
                        <Flex
                            sx={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                marginLeft: '.5rem',
                            }}
                        >
                            <BsArrowRight />
                        </Flex>
                    </Flex>
                </Button>
            </Flex>
        </Flex>
    )
}

export default PrimaryButton;