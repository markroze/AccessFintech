import React, { useCallback, useEffect, useState } from 'react';
import './Dropdown.css';
import MoreIcon from './../MoreIcon';
import Theme from '../../theme';

const dropdownBaseStyles = () => ({
  backgroundColor: Theme.colors.black600,
  color: Theme.colors.white100,
});

export interface DropdownOption {
  value: string;
  label: string;
}

interface DropdownProps {
  options: DropdownOption[];
  onOptionSelect?: (option: DropdownOption) => void;
  className?: string;
  tabIndex?: number;
  size?: 'samll' | 'medium' | 'large';
  position?: 'left' | 'right';
}

const Dropdown = ({
  options,
  onOptionSelect,
  className,
  tabIndex = 0,
  size = 'medium',
  position = 'right',
}: DropdownProps) => {
  const [selectedItem, setSelectedItem] = useState<DropdownOption | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleClose = () => {
    setIsOpen(false);
    setActiveIndex(0);
  };

  const handleOptionSelect = useCallback(
    (option: DropdownOption) => {
      setSelectedItem(option);
      handleClose();
      onOptionSelect && onOptionSelect(option);
    },
    [onOptionSelect]
  );

  const listener = useCallback(
    (event: KeyboardEvent) => {
      if (event.code === 'ArrowDown') {
        setActiveIndex((prev) => (prev + 1) % options.length);
      }
      if (event.code === 'ArrowUp') {
        setActiveIndex((prev) => (prev - 1 + options.length) % options.length);
      }

      if (event.code === 'Escape') {
        handleClose();
      }
      if (event.code === 'Space' || event.code === 'Enter') {
        handleOptionSelect(options[activeIndex]);
      }
      event.preventDefault();
    },
    [options, activeIndex, handleOptionSelect]
  );

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('keydown', listener);
    }
    return () => {
      document.removeEventListener('keydown', listener);
    };
  }, [listener, isOpen]);

  return (
    <div
      {...{
        className: `dropdown ${className}`,
      }}
    >
      <button
        {...{
          tabIndex,
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
        <ul
          {...{
            className: `dropdown__popover`,
            style: {
              ...dropdownBaseStyles(),
              ...(position === 'left' ? { left: 0 } : { right: 0 }),
            },
          }}
        >
          {options.map((option, ind) => (
            <li
              {...{
                tabIndex: tabIndex + ind,
                key: ind,
                value: option.value,
                className: 'dropdown__popover__item',
                onClick: () => handleOptionSelect(option),
                'aria-selected': selectedItem?.value === option.value,
                role: 'option',
                style: {
                  ...(selectedItem?.value === option.value && {
                    backgroundColor: Theme.colors.blue300,
                  }),
                  ...(activeIndex === ind && {
                    backgroundColor: 'hsla(210, 100%, 33%, 0.5)',
                  }),
                },
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
