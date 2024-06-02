import styled from 'styled-components';

const StyledParagraph = styled.p`
  font-size: 15px;
  line-height: 25px;
  opacity: 0.5;
`;

const ProductFeatures: React.FC<{ p1: string; p2: string }> = ({ p1, p2 }) => {
  return (
    <div className='flex flex-col items-start gap-6 2sm:gap-8 2sm:max-w-[635px]'>
      <h3 className='text-[24px] font-bold tracking-[0.86px] leading-h3 2sm:text-h3 2sm:tracking-h3'>
        Features
      </h3>
      <StyledParagraph>{p1}</StyledParagraph>
      <StyledParagraph>{p2}</StyledParagraph>
    </div>
  );
};

export default ProductFeatures;
