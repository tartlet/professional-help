import "./slider.css";

const SillyToggle = ({isToggled, onToggle}) => {
  return (
    <div className="flex flex-row items-center">
    <div className="font-normal text-xs text-center pr-2">
      silly mode
    </div>
    <div className="toggle">
      <input type="checkbox" checked={isToggled} onChange={onToggle} disabled/>
      <label></label>
    </div>
    </div>
  )
}

export default SillyToggle;
