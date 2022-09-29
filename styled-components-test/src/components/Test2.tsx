import styled from 'styled-components';
import tw from 'twin.macro';

const Root = styled.div`
  ${tw`w-full h-20 bg-white text-lg text-white`}
  ${tw`flex flex-wrap overflow-hidden`}
`;

const Item1 = styled.div`
  ${tw`w-5 h-5 bg-primary text-lg text-white`}
`;

const Item2 = styled.div`
  ${tw`w-5 h-5 bg-secondary text-lg text-black`}
`;

const Item3 = styled.div`
  ${tw`w-5 h-5 bg-onyx text-lg text-white`}
`;

const Item4 = styled.div`
  ${tw`w-5 h-5 bg-snow text-lg text-black`}
`;

const Item5 = styled.div`
  ${tw`w-5 h-5 bg-bittersweet text-lg text-white`}
`;

const Item6 = styled.div`
  ${tw`w-5 h-5 bg-mantis text-lg text-white`}
`;

const Item7 = styled.div`
  ${tw`w-5 h-5 bg-gainsboro text-lg text-white`}
`;

const Item8 = styled.div`
  ${tw`w-5 h-5 bg-turquoise text-lg text-white`}
`;

const Item9 = styled.div`
  ${tw`w-5 h-5 bg-silver-chalice text-lg text-black`}
`;

const Item10 = styled.div`
  ${tw`w-5 h-5 bg-ghost-white text-lg text-black`}
`;

function Test2() {
  return (
    <Root>
      <Item1>1</Item1>
      <Item2>2</Item2>
      <Item3>3</Item3>
      <Item4>4</Item4>
      <Item5>5</Item5>
      <Item6>6</Item6>
      <Item7>7</Item7>
      <Item8>8</Item8>
      <Item9>9</Item9>
      <Item10>10</Item10>
    </Root>
  );
}

export default Test2;