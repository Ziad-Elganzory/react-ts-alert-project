import './index.scss';
import { BellRing,X } from 'lucide-react';

interface IProps {
}

const Alert = ({}:IProps) => {
  return (
    <div className='alert-wrapper'>
      <BellRing />
      <h4>Alert Title!</h4>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Quo incidunt possimus alias aliquid ex velit eveniet recusandae </p>
      <span>
        <X />
      </span>
    </div>
  )
}

export default Alert