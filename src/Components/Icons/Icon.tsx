
import { FunctionComponent } from "react"
import { IconProps } from "./IconProps"

const Icon: FunctionComponent<IconProps> = ({ src, alt, width, height, className }) => {
    return (
        <img
            src={src}
            alt={alt}
            width={width}
            height={height}
            className={className}
        />
    )
}

export default Icon;