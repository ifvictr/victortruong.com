import React from 'react'
import { FaEnvelope, FaFile, FaGithubAlt, FaLinkedinIn, FaMapPin, FaTwitter } from 'react-icons/fa'
import { Box, Flex, Heading, Image, Link, Text } from 'rebass'
import styled from 'styled-components'

import Container from 'components/Container'
import theme, { cx } from 'theme'

const Base = styled(Flex).attrs({ p: 4, pb: 5 })`
    min-height: 50vh;
    position: relative;
`

const Avatar = styled(Image).attrs({ width: 200 })`
    border-radius: ${({ theme }) => theme.pill};
    box-shadow: ${({ theme }) => theme.boxShadows[1]};
`

const Services = styled(Flex)`
    a {
        line-height: 0;
    }
    svg {
        color: ${({ theme }) => theme.colors.primary};
        fill: currentColor;
        height: 24px;
        transition: fill ${({ theme }) => theme.transition};
        width: 24px;
        will-change: fill;
    }
`

const Badge = styled(Text.withComponent('span'))`
    border-radius: ${({ theme }) => theme.pill};
    display: inline-block;
    filter: drop-shadow(0 1px 2px rgba(0, 0, 0, 0.376));
    font-weight: normal;
    line-height: 1.25;
    text-shadow: none;
    text-transform: uppercase;
`

Badge.defaultProps = {
    theme,
    bg: 'primary',
    color: 'white',
    fontSize: 1,
    px: 2,
    py: 1
}

const Service = ({ href, icon: Icon, ...props }) => (
    <Link
        target="_blank"
        rel="noopener"
        href={href}
        mr={3}
        children={<Icon />}
        {...props}
    />
)

const Intro = props => (
    <Base alignItems="center" justifyContent="center" {...props}>
        <Container maxWidth={64} width={1}>
            <Flex alignItems="center">
                <Box mr={3}>
                    <Avatar src="https://gravatar.com/avatar/82c79c6a2c438c0d9c113cc543012db3?s=200" alt="Victor Truong" />
                </Box>
                <Container maxWidth={32} ml={3}>
                    <Heading fontSize={6} mb={1}>Victor Truong</Heading>
                    <Box mb={3}>
                        <Badge bg="white" color="slate">
                            <FaMapPin /> Los Angeles, CA
                        </Badge>
                    </Box>
                    <Text color="muted" fontSize={3} mb={3}>
                        Software developer with an affinity for the unfamiliar. Always wandering.
                    </Text>
                    <Services>
                        <Service href="https://github.com/ifvictr" icon={FaGithubAlt} title="GitHub" />
                        <Service href="https://linkedin.com/in/ifvictr" icon={FaLinkedinIn} title="LinkedIn" />
                        <Service href="https://twitter.com/ifvictr" icon={FaTwitter} title="Twitter" />
                        <Service href="https://ifvr.co/resume" icon={FaFile} title="Résumé" />
                        <Service href="mailto:me@ifvictr.com" icon={FaEnvelope} title="Email" />
                    </Services>
                </Container>
            </Flex>
        </Container>
    </Base>
)

export default Intro
