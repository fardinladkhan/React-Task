const Fardin = () => (
    <>
    {/* <Greeting/> */}
    {/* <UserProfile/>
    <Weather/>
    <Book/>
    <Car/>
    <Movie/>
    <Country/>
    <Food/>
    <Mobile/>
    <Album/>
    <Laptop/> */}

    <Greeting/>
    <ProductDisplay/>
    <UserProfile/>
    <StudentDetails/>
    <CarInfo/>
    <JobInfo/>
    <Bio/>
    <TaskDetails/>
    </>
)

// const Greeting = () => {
//     return <>
//     <Person/>
//     <Message/>
//     </>

// }

// const Person = () => <h1>Fardin Ladkhan</h1>

// const Message = () => <h1>Lorem Lorem Lorem Lorem Lorem Lorem Lorem </h1>




// const UserProfile = () => (
//   <>
//     <User />
//   </>
// );

// function User() {
//   return (
//     <>
//       <h1>Username: John Doe</h1>
//       <h2>Role: Developer</h2>
//       <h3>Experience: 5 Years</h3>
//       <Status />
//       <ProfilePic />
//     </>
//   );
// }

// const Status = () => <p>Status: Active</p>;

// const ProfilePic = () => (
//   <img src='https://via.placeholder.com/100' alt='Profile' />
// );





// const Weather = () => (
//   <>
//     <City />
//   </>
// );

// function City() {
//   return (
//     <>
//       <h1>City: Mumbai</h1>
//       <h2>Temperature: 30°C</h2>
//       <h3>Condition: Sunny</h3>
//       <Alert />
//     </>
//   );
// }

// const Alert = () => <p>Weather Alert: No alerts</p>;





// const Book = () => (
//   <>
//     <BookInfo />
//   </>
// );

// function BookInfo() {
//   return (
//     <>
//       <h1>Title: React for Beginners</h1>
//       <h2>Author: John Smith</h2>
//       <h3>Pages: 250</h3>
//       <Availability />
//     </>
//   );
// }

// const Availability = () => <p>Status: Available</p>;




// const Car = () => (
//   <>
//     <CarDetails />
//   </>
// );

// function CarDetails() {
//   return (
//     <>
//       <h1>Brand: Tesla</h1>
//       <h2>Model: Model S</h2>
//       <h3>Year: 2022</h3>
//       <Feature />
//     </>
//   );
// }

// const Feature = () => <p>Feature: Autopilot</p>;




// const Movie = () => (
//   <>
//     <MovieDetails />
//   </>
// );

// function MovieDetails() {
//   return (
//     <>
//       <h1>Title: Avengers</h1>
//       <h2>Genre: Action</h2>
//       <h3>Rating: 8.5/10</h3>
//       <Review />
//     </>
//   );
// }

// const Review = () => <p>Review: Must Watch!</p>;




// const Country = () => (
//   <>
//     <CountryInfo />
//   </>
// );

// function CountryInfo() {
//   return (
//     <>
//       <h1>Country: India</h1>
//       <h2>Capital: New Delhi</h2>
//       <h3>Population: 1.4 Billion</h3>
//       <Currency />
//     </>
//   );
// }

// const Currency = () => <p>Currency: Indian Rupee (INR)</p>;





// const Food = () => (
//   <>
//     <FoodDetails />
//   </>
// );

// function FoodDetails() {
//   return (
//     <>
//       <h1>Dish: Pizza</h1>
//       <h2>Type: Italian</h2>
//       <h3>Calories: 285 kcal</h3>
//       <Taste />
//     </>
//   );
// }

// const Taste = () => <p>Taste: Delicious</p>;





// const Mobile = () => (
//   <>
//     <MobileDetails />
//   </>
// );

// function MobileDetails() {
//   return (
//     <>
//       <h1>Brand: Apple</h1>
//       <h2>Model: iPhone 15</h2>
//       <h3>Storage: 256GB</h3>
//       <Battery />
//     </>
//   );
// }

// const Battery = () => <p>Battery: 4000mAh</p>;





// const Album = () => (
//   <>
//     <AlbumDetails />
//   </>
// );

// function AlbumDetails() {
//   return (
//     <>
//       <h1>Album: Random Access Memories</h1>
//       <h2>Artist: Daft Punk</h2>
//       <h3>Year: 2013</h3>
//       <Song />
//     </>
//   );
// }

// const Song = () => <p>Hit Song: Get Lucky</p>;





// const Laptop = () => (
//   <>
//     <LaptopInfo />
//   </>
// );

// function LaptopInfo() {
//   return (
//     <>
//       <h1>Brand: Dell</h1>
//       <h2>Model: XPS 15</h2>
//       <h3>RAM: 16GB</h3>
//       <Processor />
//     </>
//   );
// }

// const Processor = () => <p>Processor: Intel i7</p>;










function Greeting() {
  return <Welcome name='Fardin' age={23} />;
}

const Welcome = (props) => {
  return (
    <div className="task1">
      <h1>Hello, {props.name}!</h1>
      <p>Your age is {props.age}</p>
      
    </div>
    
  );
};



function ProductDisplay() {
  return <Product name='HP Laptop' price={56000} />;
}

const Product = (props) => {
  return (
    <div className="task2">
      <h3>{props.name}</h3>
      <p>Price: ₹{props.price}</p>
      
    </div>
  );
};



function UserProfile() {
  return <User username='Fardin Ladkhan' city='Pune' />;
}

const User = (props) => {
  return (
    <div className="task3">
      <h2>User: {props.username}</h2>
      <p>Location: {props.city}</p>
      
    </div>
  );
};


function StudentDetails() {
  return <Student name='Fardin Ladkhan' grade='B+' />;
}

const Student = (props) => {
  return (
    <div className="task4">
      <h4>{props.name}</h4>
      <p>Grade: {props.grade}</p>
      
    </div>
  );
};



function CarInfo() {
  return <Car brand='Lamborgini' model='Sian' />;
}

const Car = (props) => {
  return (
    <div className="task5">
      <h2>{props.brand}</h2>
      <p>Model: {props.model}</p>
      
    </div>
  );
};


function JobInfo() {
  return <Job title='Mern Stack Developer' company='ITPreneur' />;
}

const Job = (props) => {
  return (
    <div className="task6">
      <h2>{props.title}</h2>
      <p>Company: {props.company}</p>
      
    </div>
  );
};



function Bio() {
  return <Person name='Fardin' hobby='Playing Online Games' />;
}

const Person = (props) => {
  return (
    <div className="task7">
      <h1>{props.name}</h1>
      <p>Hobby: {props.hobby}</p>
      
    </div>
  );
};


function TaskDetails() {
  return <Task name='Shopping' status='Pending' />;
}

const Task = (props) => {
  return (
    <div className="task8">
      <h3>Task: {props.name}</h3>
      <p>Status: {props.status}</p>
      
    </div>
  );
};


export default Fardin;