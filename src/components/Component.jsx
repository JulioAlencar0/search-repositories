
import './../App.css'

function Component({ img, title, subtitle, link }) {
  return (
    <div className="components">
      <div className='boxlocation'>
      <img id='location' src={img} alt={title} />
      </div>
      <div className='text' >
        <h4>{title}</h4>
        
        {link ? (
          <a href={link} className='link' rel="noopener noreferrer">
            {subtitle || link}
          </a>
        ) : (
          <span>{subtitle}</span>
        )}
      </div>
    </div>
  );
}

export default Component;

    