import styled from 'styled-components';
import { colors } from '../style';
import {
    SiFlutter,
    SiDjango,
    SiHtml5,
    SiCss3,
    SiPostman,
    SiJavascript,
    SiReact,
    SiTensorflow,
    SiPytorch,
    SiRacket,
    SiTypescript,
    SiPython,
    SiCplusplus,
    SiOpencv,
    SiOctave,
    SiAzuredevops,
    SiDocker,
    SiKubernetes,
    SiNetlify,
    SiHeroku,
    SiGnubash,
    SiKeras,
    SiBootstrap,
    SiPostgresql,
    SiGit,
    SiOracle,
    SiMongodb,
    SiSqlite,
    SiFirebase,
    SiElasticsearch,
    SiDart,
    SiNestjs,
    SiRedis,
    SiRabbitmq,
    SiJest,
    SiMocha,
} from 'react-icons/si';

import { IoLogoNodejs } from 'react-icons/io';

const Div = styled.div`
    padding: 30px;
    color: ${colors.primary};
    font-size: 40px;
`;
const Icon = styled.div`
    display: inline;
    margin: 10px;
    filter: drop-shadow(0 0 6px ${colors.primary});
`;

export default function Stack() {
    return (
        <Div>
            <Icon><SiFlutter></SiFlutter></Icon>
            <Icon><SiDjango></SiDjango></Icon>
            <Icon><IoLogoNodejs></IoLogoNodejs></Icon>
            <Icon><SiHtml5></SiHtml5></Icon>
            <Icon><SiCss3></SiCss3></Icon>
            <Icon><SiPostman></SiPostman></Icon>
            <Icon><SiJavascript></SiJavascript></Icon>
            <Icon><SiReact></SiReact></Icon>
            <Icon><SiTensorflow></SiTensorflow></Icon>
            <Icon><SiPytorch></SiPytorch></Icon>
            <Icon><SiRacket></SiRacket></Icon>
            <Icon><SiTypescript></SiTypescript></Icon>
            <Icon><SiPython></SiPython></Icon>
            <Icon><SiCplusplus></SiCplusplus></Icon>
            <Icon><SiOpencv></SiOpencv></Icon>
            <Icon><SiOctave></SiOctave></Icon>
            <Icon><SiAzuredevops></SiAzuredevops></Icon>
            <Icon><SiDocker></SiDocker></Icon>
            <Icon><SiKubernetes></SiKubernetes></Icon>
            <Icon><SiNetlify></SiNetlify></Icon>
            <Icon><SiHeroku></SiHeroku></Icon>
            <Icon><SiGnubash></SiGnubash></Icon>
            <Icon><SiKeras></SiKeras></Icon>
            <Icon><SiBootstrap></SiBootstrap></Icon>
            <Icon><SiPostgresql></SiPostgresql></Icon>
            <Icon><SiGit></SiGit></Icon>
            <Icon><SiOracle></SiOracle></Icon>
            <Icon><SiMongodb></SiMongodb></Icon>
            <Icon><SiSqlite></SiSqlite></Icon>
            <Icon><SiFirebase></SiFirebase></Icon>
            <Icon><SiElasticsearch></SiElasticsearch></Icon>
            <Icon><SiDart></SiDart></Icon>
            <Icon><SiNestjs></SiNestjs></Icon>
            <Icon><SiRedis></SiRedis></Icon>
            <Icon><SiRabbitmq></SiRabbitmq></Icon>
            <Icon><SiJest></SiJest></Icon>
            <Icon><SiMocha></SiMocha></Icon>
        </Div>
    )
}