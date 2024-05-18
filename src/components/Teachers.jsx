import Footer from "./Footer";
import Navbar from "./Nav";
// import 'remixicon/fonts/remixicon.css';

const alt =  'teachers-image'
const teachers = [
    {
      image: '/teachers/a.jpg',
      name: 'Rahul Singh',
      qua: 'MS (Woolf University)',
    },
    {
      image: '/teachers/b.jpg',
      name: 'Ajeet Singh',
      qua: 'MS (Woolf University)',
      
    },
    {
      image: '/teachers/c.jpg',
      name: 'Ranjan Dube',
      qua: 'MS (Woolf University)',
    },
    {
      image: '/teachers/d.jpg',
      name: 'V.P. Singh',
      qua: 'MS (Woolf University)',
    },
    {
      image: '/teachers/e.jpg',
      name: 'Ladoo Lal',
      qua: 'MS (Woolf University)',
    },
    {
      image: '/teachers/f.jpg',
      name: 'Shubham Rastogi',
      qua: 'MS (Woolf University)',
    },
    {
      image: '/teachers/g.jpg',
      name: 'Ranjeet Ranjan',
      qua: 'MS (Woolf University)',
    },
    {
      image: '/teachers/h.jpg',
      name: 'Ramesh Mishra',
      qua: 'MS (Woolf University)',
    },
    {
      image: '/teachers/i.jpg',
      name: 'Rajat Rajpoot',
      qua: 'MS (Woolf University)',
    },
    {
      image: '/teachers/j.jpg',
      name: 'Satyam Raj',
      qua: 'MS (Woolf University)',
    },
    {
      image: '/teachers/k.jpg',
      name: 'Vivek Singh',
      qua: 'MS (Woolf University)',
    },
    {
      image: '/teachers/l.jpg',
      name: 'Pankaj Triphati',
      qua: 'MS (Woolf University)',  
    },
];

const Teachers = () => {
  return (
    <>
      <Navbar />
      <div>
        <header style={{
         backgroundImage:"radial-gradient( circle farthest-corner at 10% 20%,  rgba(0,152,155,1) 0.1%, rgba(0,94,120,1) 94.2% )",
          height: '280px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <h1 style={{
            fontSize: '56px',
           color: '#fff'
          }}>
            <i className="ri-user-2-fill" style={{marginRight: '16px'}}></i>
            Teachers</h1>
        </header>
        <section style={{
          width: '80%',
          padding: '60px 0',
          margin: 'auto',
          display: 'flex',
          flexWrap: 'wrap',
          // gap: 'calc(100% - 24%)',
          rowGap: '48px',
          columnGap: '5%'
        }}>
          {
            teachers.map((teacher, index) =>{
                return (
                  <div style={{
                    width: '20% '
                  }} key={index}>
                    <img src= {teacher.image} alt={alt}
                    width="100%" />
                    <h2 style={{padding: 0, marginBottom:4}}>{teacher.name}</h2>
                    <p style={{padding: 0, margin:0, color: 'gray'}}>{teacher.qua}</p>
                  </div>
                )
            })
          }
          
         
          
        </section>
      </div>
      <Footer />
    </>
  );
};

export default Teachers;
