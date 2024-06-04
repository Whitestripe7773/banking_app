'use client';
import CountUp from 'react-countup';

const AnimatedCounter = ({ amount }: { amount: number }) => {
  return (
    <div>
        <CountUp
            start={amount * 0.7}
            end={amount} 
            duration={2.5}
            decimals={2}
            decimal=','
            prefix="€"
            />
    </div>
  )
}

export default AnimatedCounter