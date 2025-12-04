
import Card from './components/Card'

const jobOpenings = [
  {
    brandLogo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
    companyName: "Apple",
    datePosted: "5 days ago",
    post: "iOS Developer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: 65,
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
    companyName: "Google",
    datePosted: "2 weeks ago",
    post: "Data Scientist",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: 55,
    location: "Bangalore, India"
  },
  {
    brandLogo: "https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_%282019%29.png",
    companyName: "Meta",
    datePosted: "10 weeks ago",
    post: "Frontend Engineer",
    tag1: "Part Time",
    tag2: "Junior Level",
    pay: 40,
    location: "Hyderabad, India"
  },
  {
    brandLogo: "https://imgs.search.brave.com/mOhKkr2E43lqETY3Ker_NN8CdP_dE-lSssUvMWWdryI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzAyLzk0LzUxLzg5/LzM2MF9GXzI5NDUx/ODk0MF9GQmZ3Wncz/MEhuV0JWOXB6RHA2/RUV2OXUxODVKTDZY/US5qcGc",
    companyName: "Amazon",
    datePosted: "1 week ago",
    post: "Cloud Solutions Architect",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: 70,
    location: "Delhi, India"
  },
  {
    brandLogo: "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",
    companyName: "Netflix",
    datePosted: "3 days ago",
    post: "Backend Developer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: 50,
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
    companyName: "Microsoft",
    datePosted: "6 days ago",
    post: "AI Research Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: 80,
    location: "Bangalore, India"
  },
  {
    brandLogo: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg",
    companyName: "IBM",
    datePosted: "4 weeks ago",
    post: "DevOps Engineer",
    tag1: "Part Time",
    tag2: "Senior Level",
    pay: 45,
    location: "Pune, India"
  },
  {
    brandLogo: "https://imgs.search.brave.com/ifGAWLasRaIDDWjDlwp3FMWijfSioCMzxA5dFKEAsXE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/cG5nbWFydC5jb20v/ZmlsZXMvMjMvT3Jh/Y2xlLUxvZ28tUE5H/LUZpbGUucG5n",
    companyName: "Oracle",
    datePosted: "2 weeks ago",
    post: "Database Administrator",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: 48,
    location: "Chennai, India"
  },
  {
    brandLogo: "https://upload.wikimedia.org/wikipedia/commons/b/bd/Tesla_Motors.svg",
    companyName: "Tesla",
    datePosted: "8 days ago",
    post: "Software QA Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: 60,
    location: "Hyderabad, India"
  },
  {
    brandLogo: "https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png",
    companyName: "LinkedIn",
    datePosted: "1 day ago",
    post: "Product Manager",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: 75,
    location: "Gurgaon, India"
  }
];

function App() {
  return (
    <div className='parent'>
      {jobOpenings.map(function(item, index){
        return (
          <div id={index}>
            <Card brandLogo={item.brandLogo} companyName={item.companyName} datePosted={item.datePosted} post={item.post} tag1={item.tag1} tag2={item.tag2} pay={item.pay} location={item.location}/>
          </div>
        )
      })}
    </div>
  )
}
export default App
