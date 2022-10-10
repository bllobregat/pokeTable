import { Image } from "../Image";
// import '../../../public/rotate.png' 
import "./PortraitPlaceHolder.css"


export const PortraitPlaceholder = () => {
	return (
		<div className="cover">
			<div className="center">
				<Image
					src="https://cdn-icons-png.flaticon.com/512/481/481345.png"
					alt="rotate"
				/>
				<p>Please rotate your screen</p>
			</div>
		</div>
	);
};
