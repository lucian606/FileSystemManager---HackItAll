import { forwardRef } from "react/cjs/react.production.min";

function Dropdown(props, ref) {

    return (
        <select ref={ref} className="block mt-5 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
            {props.options.map(optionText => {
                return <option value={optionText}>{optionText}</option>
            })}
        </select>
    )
}

export default forwardRef(Dropdown);