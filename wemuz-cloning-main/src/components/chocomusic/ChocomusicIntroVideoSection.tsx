import { useEffect, useRef } from "react";
import styled from "styled-components";
import palette from "../../lib/styles/palette";

export type ChocomusicIntroVideoSectionProps = {};

function ChocomusicIntroVideoSection(props: ChocomusicIntroVideoSectionProps) {
    const videoRef = useRef<HTMLVideoElement | null>(null);

    useEffect(() => {
        if (!videoRef.current) return;
        videoRef.current.volume = 0;
        videoRef.current.play();
    }, []);

    return (
        <Block>
            <BackgroundVideo autoPlay muted playsInline loop src="/video.mp4"></BackgroundVideo>
        </Block>
    );
}

const Block = styled.section`
    height: 100%;
    background-color: ${palette.black0};
`;

const BackgroundVideo = styled.video`
    margin-top:0px;
    width: 100%;
`;

export default ChocomusicIntroVideoSection;
