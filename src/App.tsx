import Alert from "./components/ui/Alert"
import { Ban } from 'lucide-react';

const App = () => {
  return (
    <div style={{margin: "2rem"}}>
      <Alert 
        type={"alert-default"} 
        icon={<Ban size={20}/>}
        title={"Something went wrong!"}
        description={
          <div>
            An error occurred while processing your request. Please try again later.
            <br/>
            <a href="#">Learn more</a>
          </div>
        }
        />
        <Alert 
        type={"alert-info"} 
        icon={<Ban size={20}/>}
        title={"Something went wrong!"}
        description="An error occurred while processing your request. Please try again later."
        />
        <Alert 
        type={"alert-warning"} 
        icon={<Ban size={20}/>}
        title={"Something went wrong!"}
        description="An error occurred while processing your request. Please try again later."
        />
        <Alert 
        type={"alert-error"} 
        icon={<Ban size={20}/>}
        title={"Something went wrong!"}
        description="An error occurred while processing your request. Please try again later."
        />
        <Alert 
        type={"alert-success"} 
        icon={<Ban size={20}/>}
        title={"Something went wrong!"}
        description="An error occurred while processing your request. Please try again later."
        />
    </div>
  )
}

export default App
