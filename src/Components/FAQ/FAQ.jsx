import { forwardRef, memo, useRef, useState } from "react";
import styled from "styled-components";

const FAQSection = styled.section`
  position: relative;
  display: block;
  height: auto;
  background: #ffffff;
  overflow: hidden;
`;

const TitleImg = styled.img`
  position: relative;
  left: 50%;
  transform: translate(-50%, 0);
  width: auto;
  height: 130px;
  margin-top: 5%;

  @media (max-width: 980px){
    height: 120px;
  }
  @media (max-width: 760px){
    height: 100px;
  }
  @media (max-width: 620px){
    height: 85px;
  }
  @media (max-width: 470px){
    height: 75px;
  }
`;

const FAQRowDiv = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2%;
  width: 100%;
  height: auto;
  margin-top: 6%;

  @media (max-width: 1280px){
    margin-top: 11%;
    margin-bottom: 15%;
  }
  @media (max-width: 750px){
    margin-top: 8%;
    margin-bottom: 30%;
  }
  @media (max-width: 570px){
    margin-top: 14%;
  }
`;

const FAQColumnDiv = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 35%;
  margin-bottom: 14%;

  @media (max-width: 1530px){
    width: 37.5%;
  }
  @media (max-width: 1280px){
    width: 57%;
    margin-bottom: 0%;
  }
  @media (max-width: 820px){
    width: 70%;
  }
  @media (max-width: 680px){
    width: 82%;
  }
  @media (max-width: 570px){
    width: 85%;
  }
  @media (max-width: 510px){
    width: 82%;
  }
  @media (max-width: 400px){
    width: 86%;
  }
`;

const FAQContainerDiv = styled.div`
  width: 100%;
  height: auto;
  margin: 30px auto;
  border: 3px solid #000000;
  border-radius: 30px;

  @media (max-width: 1280px){
    margin: 20px auto;
  }
  @media (max-width: 600px){
    margin: 25px auto;
  }
`;

const FAQQuestionDiv = styled.div`
  position: relative;
`;

const FAQQuestionP = styled.p`
  font-family: 'Godo';
  font-size: 15pt;
  padding: 20pt 0;
  padding-left: 20pt;
  color: #000000;
  outline: none;

  @media (max-width: 1320px){
    font-size: 14pt;
  }
  @media (max-width: 890px){
    font-size: 13pt;
  }
  @media (max-width: 600px){
    font-size: 12pt;
  }
  @media (max-width: 510px){
    font-size: 10pt;
  }
  @media (max-width: 420px){
    font-size: 9pt;
  }
  @media (max-width: 370px){
    font-size: 8.5pt;
  }
`;

const FAQArrowSvg = styled.svg`
  position: absolute;
  width: 15pt;
  height: 15pt;
  enable-background:new 0 0 214.3 196.4;
  top: 40%;
  right: 3%;
  transition: transform 0.3s linear;
  transform: ${(props) => {return props.isOpen ? "rotate(180deg)" : "rotate(0deg)"}};
  transform-origin: center center;

  @media (max-width: 600px){
    width: 12pt;
    height: 12pt;
  }
`;

const FAQAnswerContainerDiv = styled.div`
  width: 100%;
  height: 0;
  overflow: hidden;
  transition: height 0.35s ease;
`;

const FAQAnswerP = styled.p`
  font-family: 'GoyangIlsan';
  font-size: 14pt;
  line-height: 20pt;
  padding: 0 30pt 20pt 20pt;
  color: #000000;

  @media (max-width: 890px){
    font-size: 13pt;
  }
  @media (max-width: 650px){
    font-size: 11pt;
  }
  @media (max-width: 600px){
    padding: 0 20pt 20pt 20pt;
  }
  @media (max-width: 510px){
    font-size: 10pt;
  }
  @media (max-width: 420px){
    font-size: 9pt;
    padding: 0 30pt 20pt 20pt;
  }
  @media (max-width: 370px){
    font-size: 8.5pt;
  }
`;

const FAQBlock = (props) => {
  const parentRef = useRef();
  const childRef = useRef();
  const [open, setOpen] = useState(false);

  const onClick = (() => {
    if (parentRef.current.clientHeight > 0) {
      parentRef.current.style.height = "0";
    } else {
      parentRef.current.style.height = `${childRef.current.clientHeight}px`;
    }
    setOpen(!open);
  });

  return (
    <FAQContainerDiv className="rainbow" onClick={onClick}>
      <div>
        <FAQQuestionDiv>
          <FAQQuestionP>{props.question}</FAQQuestionP>
          <FAQArrowSvg isOpen={open} version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 214.3 196.4" xmlSpace="preserve">
            <path d="M40.8,0h132.6c31.4,0,51,34,35.3,61.2l-66.3,114.9c-15.7,27.2-54.9,27.2-70.6,0L5.5,61.1C-10.2,34,9.4,0,40.8,0z" />
          </FAQArrowSvg>
        </FAQQuestionDiv>
      </div>
      <FAQAnswerContainerDiv ref={parentRef}>
        <div ref={childRef}><FAQAnswerP>{props.answer}</FAQAnswerP></div>
      </FAQAnswerContainerDiv>
    </FAQContainerDiv>
  );
};

const FAQAccodion = memo(FAQBlock);

const FAQ = ( props, ref ) => {
  return (
    <FAQSection ref={ref}>
      <div data-aos="fade-up" data-aos-offset="200" data-aos-duration="1000">
        <TitleImg src="images/faq/title.png" />
      </div>
      <FAQRowDiv data-aos="fade-up" data-aos-offset="200" data-aos-duration="1000">
        <FAQColumnDiv>
          <FAQAccodion question="Q. ?????? ????????? ????????????????" answer="A. 4??? 10?????? ???????????? ????????????. ????????? ????????? ?????? ????????????, ???????????? ?????? ?????? ??????????????????." />
          <FAQAccodion question="Q. ??? ????????? ??? ?????????????" answer="A. ??? 5000?????? ???????????? ????????? ???????????? ????????????." />
          <FAQAccodion question="Q. ?????? ????????? ????????????????" answer="A. ?????????????????? ?????? 50Klay?????????." />
          <FAQAccodion question="Q. ???????????????????????? 2??? ????????? ????????????????" answer="A. ???????????? NFT??? ??????????????????, ???????????? NFT ???????????? ????????? ???????????? ????????? 2??? ????????? ???????????????. ???????????? ???????????? ??? ?????????, &quot;??????&quot; ???????????? ???????????? ???????????????." />
        </FAQColumnDiv>
        <FAQColumnDiv>
          <FAQAccodion question="Q. ????????? ??? ??? ??????????" answer="A. Klay??? ???????????? ??? ??? ?????????, ?????? ??????????????? Kaikas ????????? ???????????? ????????? ??? ????????????." />
          <FAQAccodion question="Q. ????????????NFT??? ????????? ??????????????? ????????????????" answer="A. ??????????????? ?????? ?????? ????????? ??????????????? ???????????? 1/1????????? ???????????????. ????????? ?????? ??? ???????????? ?????? ???????????? ???????????????." />
          <FAQAccodion question="Q. ????????????????????? ????????? ??????????" answer="A. ???????????? ???????????? ??? ???????????? SNS?????? ?????? ?????? ????????? ???????????? ???????????????, ???????????? NFT??? ?????? ????????? ??? ?????? ???(??????????????????) ????????? ????????? ????????????." />
          <FAQAccodion question="Q. ?????? ????????? ????????????????" answer="A. ???????????? ????????? ????????? ?????? ???????????? ???????????? ??????????????? ????????? ????????? ????????????! ????????? ??????????????? ?????? ?????? ???????????? ??? ???????????? ????????? ??????????????? ????????? ????????? ???????????? ????????????." />
        </FAQColumnDiv>
      </FAQRowDiv>
    </FAQSection>
  );
}

export default forwardRef(FAQ);