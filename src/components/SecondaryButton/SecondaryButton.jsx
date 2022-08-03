import React from 'react';
import { Flex, Text, Button } from 'theme-ui';
import { BsArrowRight } from 'react-icons/bs';

const SecondaryButton = () => {
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
                    fontWeight: '600',
                    textTransform: 'uppercase',
                    paddingBottom: '1rem',
                    borderBottom: '1px solid #000',
                    width: '100%',
                    letterSpacing: '2px'
                }}
            >
                Secondary
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
                        backgroundColor: '#fff',
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
                        <span>
                            CTA Copy Area
                        </span>
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

export default SecondaryButton