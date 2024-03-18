import { Carousel } from 'antd';
import image1 from '../../../assets/school.svg';
import image2 from '../../../assets/school2.svg';

const images = [
  {
    media: "https://img.freepik.com/premium-vector/business-people-tiny-character-professional-development-learn-obtain-knowledge-educational-process-f_109722-3426.jpg?w=1380",
    heading: 'ourSchool is a best platform',
    subHeading: 'ourSchool is a best platform you can increase performance',
  },
  {
    media:'https://img.freepik.com/free-vector/kids-studying-online_23-2148506552.jpg?size=626&ext=jpg&ga=GA1.1.1130808528.1710054853&semt=ais',
    heading: 'ourSchool is a best platform',
    subHeading: 'ourSchool is a best platform you can increase performance',
  },
];

const RegistrationSlider = () => {
  return (
  <>
    {/* <div style={{height:"100vh",backgroundColor:"red"}} > */}
  <Carousel infinite autoplaySpeed={2000} autoplay effect="fade" style={{width:"60vw"}}>
    {images.map((item, index) => (
      <div key={index}>

       <div style={{color:"InfoText",display:'flex',flexDirection:'column',gap:"2.5rem",height:"100vh",alignItems:"center"}}>
    <h4>{item.heading}</h4>
    <img style={{height:"70vh"}} src={item.media} alt="image" />
    <h5>{item.subHeading}</h5>
    </div>
      </div>
    ))}
  </Carousel>
    {/* </div> */}
  </>
  );
};

export default RegistrationSlider;
