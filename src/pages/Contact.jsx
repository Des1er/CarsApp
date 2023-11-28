
import '../index.css'
const socials = [
    { alt: "linkedin", url: "https://www.linkedin.com" },
    { alt: "twitter", url: "https://www.twitter.com" },
    { alt: "facebook", url: "https://www.facebook.com" },
    { alt: "instagram", url: "https://www.instagram.com" },
  ];
  
  const ListSocials = socials.map((social) => {
    return (<div className="socials">
      <a
      
        href={social.url}
        target="_blank"
        rel="noreferrer"
      >
        <img alt={`${social.alt}-link`} src={require(`../ic/${social.alt}.png`)} />
      </a>
      </div>
    );
  });
  

const Contact = () => {
    return(<div className='form-box-contact'>
        <div className="contact-head">
            <h1 >Contact us</h1>
        </div>
        <div className="list-socials">
        {ListSocials}
      </div>
    </div>);
}
export default Contact