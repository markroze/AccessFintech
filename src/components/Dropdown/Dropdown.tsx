import React from 'react';
import './Dropdown.css';
import MoreIcon from './../MoreIcon';
import Theme from '../../theme';

const dropdownBaseStyles = () => ({
  backgroundColor: Theme.colors.black600,
  color: Theme.colors.white100,
});

interface DropdownOption {
  value: string;
  label: string;
}

interface DropdownProps {
  options: DropdownOption[];
  required?: boolean;
  size?: 'samll' | 'medium' | 'large';
  tabIndex?: number;
  className?: string;
  position?: 'left' | 'right';
}

const Dropdown = ({
  options,
  required = false,
  size = 'medium',
  tabIndex,
  className,
  position = 'right',
}: DropdownProps) => {
  const [selectedItem, setSelectedItem] = React.useState<DropdownOption | null>(
    null
  );
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div
      {...{
        className: `dropdown ${className}`,
      }}
    >
      <button
        {...{
          className: 'dropdown__button',
          style: dropdownBaseStyles(),
          'aria-haspopup': true,
          'aria-expanded': isOpen,
          'aria-labelledby': 'dropdown__button',
          onClick: () => setIsOpen(!isOpen),
        }}
      >
        <MoreIcon />
      </button>
      {isOpen && (
        <ul className="dropdown__popover">
          {options.map((option) => (
            <li
              {...{
                style: dropdownBaseStyles(),
                className: 'dropdown__popover__item',
                onClick: () => setSelectedItem(option),
              }}
            >
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
