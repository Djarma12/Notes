import { StylesConfig } from 'react-select';
import CreatableSelect from 'react-select/creatable';
import { useNote } from '../context/NoteContext';

export type SelectValues = {
  value: string;
  label: string;
};

type Option = SelectValues & {
  __isNew__: boolean;
};

const colourStyles: StylesConfig = {
  control: (styles) => ({
    ...styles,
    backgroundColor: 'white',
    padding: '0.6rem 0.8rem',
    outline: '2px solid transparent',
  }),
};

type SelectOptionType = {
  setTags: React.Dispatch<React.SetStateAction<SelectValues[]>>;
  defaultValue?: SelectValues[];
};

function SelectOption({ setTags, defaultValue }: SelectOptionType) {
  const { getAllTags } = useNote();

  function handleSelect(option: any) {
    const tagsOption = option.map((tag: Option) => {
      return { value: tag.value, label: tag.label };
    });
    setTags(tagsOption);
  }

  return (
    <CreatableSelect
      onChange={handleSelect}
      isMulti
      isClearable
      options={getAllTags()}
      defaultValue={defaultValue}
      className="basic-multi-select w-96 text-xl"
      styles={colourStyles}
    />
  );
}

export default SelectOption;
