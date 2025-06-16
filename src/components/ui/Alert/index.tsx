import type { ReactNode } from 'react';
import './index.scss';
import {X} from 'lucide-react';

interface IProps {
  type: string;
  icon: ReactNode;
  title:string;
  description: ReactNode;
}

const Alert = ({type = "alert-danger", icon, title, description}:IProps) => {
  return (
    <div className={type}>
      <div className='alert-header'>
        <div className="alert-title">
          <span>
            {icon}
          </span>
          <h4>{title}</h4>
        </div>
          <X className='close' size={20}/>
      </div>
      <p>{description}</p>

    </div>
  )
}

export default Alert