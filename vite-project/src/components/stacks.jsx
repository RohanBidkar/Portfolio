import MagicBento from '../reactbits/MagicBento.jsx'
import './stacks.css'


export default function Stacks (){

return (
<div id="stacks" className="stacks-wrapper">
  <div className="stacks-container">
    <MagicBento 
      textAutoHide={true}
      enableStars={true}
      enableSpotlight={true}
      enableBorderGlow={true}
      enableTilt={true}
      enableMagnetism={true}
      clickEffect={true}
      spotlightRadius={800}
      particleCount={12}
      glowColor="132, 0, 255"
    />
  </div>
</div>
)

}