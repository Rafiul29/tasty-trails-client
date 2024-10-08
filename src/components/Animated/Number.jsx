import { animated, useSpring } from '@react-spring/web'

const Number = ({ n }) => {
  const { number } = useSpring({
    from: { number: 0 },
    number: n,
    delay: 200,
    config: { mass: 1, tension: 10, friction: 5 },
  });
  return <animated.div className="text-3xl md:text-5xl ">{number.to((n) => n.toFixed(0))}</animated.div>;
};

export default Number;
