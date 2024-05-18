import {Link} from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer
        style={{
          backgroundColor: "#00215E",
          padding: '50px 8%',
          display: "flex",
          gap: '5%'
          // justifyContent: "center",
          // alignItems: "flex-end",
          
        }}
        >
        <div style={{width:'100%'}}>
          <h2 style={{
          color: "#fff",
          fontWeight: '600',
          margin:0
        }}>JustCoder</h2>
          <p style={{
          color: "#fff",
        }}>Best online learning plateform for software engineers.</p>
        </div>
        <div style={{width:'100%'}}>
          <h2 style={{
          color: "#fff",
          fontWeight: '600',
          margin:0
        }}>Popular Links</h2>
         <ul style={{
          padding: 0,
          listStyle: 'none',
          display: 'flex',
          flexDirection: 'column',
          gap: 10
         }}>
          <li>
            <Link to="/" style={{
              color: '#fff',
              textDecoration: 'none'
            }}>Home</Link>
          </li>
          <li>
            <Link to="/teachers" style={{
              color: '#fff',
              textDecoration: 'none'
            }}>Teachers</Link>
          </li>
          <li>
            <Link to="/holidays" style={{
              color: '#fff',
              textDecoration: 'none'
            }}>Holidays</Link>
          </li>
          <li>
            <Link to="/contact-us" style={{
              color: '#fff',
              textDecoration: 'none'
            }}>Contact us</Link>
          </li>
         </ul>
        </div>
        <div style={{width:'100%'}}>
          <h2 style={{
          color: "#fff",
          fontWeight: '600',
          margin:0
        }}>Social Profiles</h2>
         <ul style={{
          padding: 0,
          listStyle: 'none',
          display: 'flex',
          flexDirection: 'column',
          gap: 10
         }}>
          <li>
            <Link to="/" style={{
              color: '#fff',
              textDecoration: 'none',
            }}>
              <i class="ri-youtube-fill" style={{marginRight: '7px'}}></i>
              Youtube</Link>
          </li>
          <li>
            <Link to="/teachers" style={{
              color: '#fff',
              textDecoration: 'none'
            }}>
              <i class="ri-facebook-circle-fill" style={{marginRight: '7px'}}></i>
              Facebook</Link>
          </li>
          <li>
            <Link to="/holidays" style={{
              color: '#fff',
              textDecoration: 'none'
            }}>
              <i class="ri-instagram-fill" style={{marginRight: '7px'}}></i>
              Instagram</Link>
          </li>
          <li>
            <Link to="/contact-us" style={{
              color: '#fff',
              textDecoration: 'none'
            }}>
              <i class="ri-linkedin-box-fill" style={{marginRight: '7px'}}></i>
              LinkedIn </Link>
          </li>
         </ul>
        </div>
        <div style={{width:'100%'}}> 
          <h2 style={{
          color: "#fff",
          fontWeight: '600',
          margin:0,
        }}>Contact us</h2>
          <form action="#" style={{
            color: '#fff',
            display: 'flex',
            flexDirection: 'column',
            gap: '12px',
            marginTop: '20px'
          }}>
            
            <input type="text" name="fullname" placeholder="John Doe" required style={{
              border: 'none',
              padding: 12,
              borderRadius: 4,
              width: '100%',
            }} />
            
            <input type="email" name="email" placeholder="example@gmail.com"  required style={{
              border: 'none',
              padding: 12,
              borderRadius: 4,
              width: '100%',
            }}  />

            <textarea name="message" cols="30" rows="3" placeholder="Your message here..."  required style={{
              border: 'none',
              padding: 12,
              borderRadius: 4,
              width: '100%',
            }} ></textarea>
            <button style={{width: 'fit-content',
          padding: '7px 15px',
          fontWeight: '600',
          background: '#F17621',
          color: '#fff',
          border: 'none',
          borderRadius: 4,
          cursor: 'pointer'}}>Submit</button>
          </form>
        </div>
        
      </footer>
    </>
  );
};

export default Footer;
