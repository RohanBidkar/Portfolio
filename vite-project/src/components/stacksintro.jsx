
import FallingText from '../reactbits/FallingText..jsx';
export default function Scroll() {
    return (
        <div style={{ position: 'relative', height: 'auto', width: '100%', minHeight: '100vh', padding: '2rem', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: 'black', overflow: 'hidden' }}>
            <FallingText
                text={`Passionate about crafting efficient and secure web applications using cutting-edge technologies. Here's an overview of my technical skill set, organized by development focus areas . Check out my Stacks below .
                    `
                }
                highlightWords={["Passionate", "efficient", "secure", "skill", "set", "development","Stacks","Click","Me"]}
                highlightClass="highlighted"
                trigger="click"
                backgroundColor="transparent"
                wireframes={false}
                gravity={0.56}
                fontSize="2rem"
                mouseConstraintStiffness={0.9}
            />
        </div>
        //         <div style={{ position:'relative', width:'100%', minHeight:'100vh', padding:'2rem', display:'flex', alignItems:'center', justifyContent:'center', backgroundColor:'black' }}>
        //         <ScrollReveal
        //             baseOpacity={0.05}
        //             enableBlur={true}
        //             baseRotation={25}
        //             blurStrength={35}
        //             rotationEnd="top center"
        //             wordAnimationEnd="top center"
        //             containerClassName="scroll-container"
        //             textClassName="scroll-text"
        //         >
        //            Passionate about crafting efficient and secure web applications using cutting-edge technologies. Here's an overview of my technical skill set, organized by development focus areas.
        //         </ScrollReveal>
        //         <style jsx>{`
        //             .scroll-container {
        //                 background: linear-gradient(45deg, #8b5cf6, #a855f7, #c084fc, #e879f9);
        //                 -webkit-background-clip: text;
        //                 -webkit-text-fill-color: transparent;
        //                 background-clip: text;
        //                 font-size: 3.5rem;
        //                 text-align: center;
        //                 line-height: 1.4;
        //                 font-weight: 600;
        //             }
        //             .scroll-text {
        //                 background: linear-gradient(45deg, #8b5cf6, #a855f7, #c084fc, #e879f9);
        //                 -webkit-background-clip: text;
        //                 -webkit-text-fill-color: transparent;
        //                 background-clip: text;
        //             }
        //             .word {
        //                 background: linear-gradient(45deg, #8b5cf6, #a855f7, #c084fc, #e879f9);
        //                 -webkit-background-clip: text;
        //                 -webkit-text-fill-color: transparent;
        //                 background-clip: text;
        //                 display: inline-block;
        //                 transform: scale(0.8) skewX(-5deg);
        //                 transition: all 0.3s ease;
        //             }
        //             .scroll-container {
        //                 background: linear-gradient(45deg, #8b5cf6, #a855f7, #c084fc, #e879f9);
        //                 -webkit-background-clip: text;
        //                 -webkit-text-fill-color: transparent;
        //                 background-clip: text;
        //                 font-size: 3.5rem;
        //                 text-align: center;
        //                 line-height: 1.4;
        //                 font-weight: 600;
        //                 transform: perspective(1000px) rotateX(15deg);
        //             }
        //         `}</style>
        //         </div>
    );
}