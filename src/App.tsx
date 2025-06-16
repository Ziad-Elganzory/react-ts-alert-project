import Alert from "./components/ui/Alert"
import { Bell,CircleAlert,TriangleAlert,Ban,CheckCheck } from 'lucide-react';

const App = () => {
  return (
    <div style={{margin: "2rem"}}>
      <Alert 
        type={"alert-default"} 
        icon={<Bell size={20}/>}
        title={"Upgrade Available!"}
        description={"An error occurred while processing your request. Please try again later."}
        >
          <p>
            lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          <a href="/">Learn More</a>
        </Alert>
        <Alert 
        type={"alert-info"} 
        icon={<CircleAlert  size={20}/>}
        title={"Note"}
        description="An error occurred while processing your request. Please try again later."
        >
          <p>
            lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          <a href="/">Learn More</a>
        </Alert>
        <Alert 
        type={"alert-warning"} 
        icon={<TriangleAlert  size={20}/>}
        title={"Tips and Tricks"}
        description="An error occurred while processing your request. Please try again later."
        >
          <p>
            lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          <a href="/">Learn More</a>
        </Alert>
        <Alert 
        type={"alert-error"} 
        icon={<Ban size={20}/>}
        title={"Something went wrong!"}
        description="An error occurred while processing your request. Please try again later."
        >
          <p>
            lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          <a href="/">Learn More</a>
        </Alert>
        <Alert 
        type={"alert-success"} 
        icon={<CheckCheck  size={20}/>}
        title={"Order Successful!"}
        description="An error occurred while processing your request. Please try again later."
        >
          <p>
            lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          <a href="/">Learn More</a>
        </Alert>
    </div>
  )
}

export default App
