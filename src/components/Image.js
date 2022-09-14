import { useState } from "react";
function Image({source, style, center, ref}){
    const [mainImage, setMainImage] = useState(false);
    const [otherImage, setOtherImage] = useState(false);
    return (<>
        <div style={{
            margin: center ? 'auto' : 'unset',
        }}>
        <img onLoad={() => {
            setOtherImage(true);
        }} style={{
            filter: 'blur(4px)',
            border: '0px',
            display: !mainImage && otherImage ? 'block' : 'none',
            margin: center ? 'auto' : 'unset',
            ...style
        }} src={source[0]} alt="" />
        <img ref={ref} onLoad={() => {
            setMainImage(true);
        }} style={{
            margin: center ? 'auto' : 'unset',
            border: '0px',
            display: mainImage && otherImage ? 'block' : 'none',
            ...style
        }} src={source[1]} alt="" />
        </div>
        </>);
}
export default Image;