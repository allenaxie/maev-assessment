import React from 'react';
import { Flex, Text, Button } from 'theme-ui';

const TertiaryButton = () => {
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
                Tertiary
            </Text>
            <Flex
                sx={{
                    marginY: '2rem',
                }}
            >
                <Button
                    sx={{
                        cursor: 'pointer',
                        backgroundColor: '#fff',
                        border: 'none',
                        '&:hover': {
                            backgroundColor: '#fff !important',
                            border: 'none !important',
                        },
                        '&:hover div': {
                            borderBottom: '.5px solid rgb(47,103,101)',
                        },
                        '&:hover span': {
                            color: 'rgb(47,103,101)',
                        }
                    }}
                >
                    <Flex
                        sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            width: '100%',
                            borderBottom: '.5px solid #000',
                        }}
                    >
                        <span>
                            See Details
                        </span>
                    </Flex>
                </Button>
            </Flex>
        </Flex>
    )
}

export default TertiaryButton