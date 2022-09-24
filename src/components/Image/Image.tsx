import { ReactElement, MouseEvent } from "react";

export interface ImageProps {
	src: string;
	alt: string;
	title?: string;
	className?: string;
	onClick?: (event?: MouseEvent<HTMLImageElement>) => void;
}

export const Image = (props: ImageProps): ReactElement<ImageProps> => {
	return <img {...props} alt={props.alt} />;
};
