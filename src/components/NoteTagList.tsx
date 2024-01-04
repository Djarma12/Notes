import { SelectValues } from './SelectOption';

type tags = {
  tags: SelectValues[] | undefined;
};

function NoteTagList({ tags }: tags) {
  return (
    <ul className="flex flex-wrap gap-5">
      {tags?.map((tag) => (
        <li
          key={Math.random()}
          className=" rounded-md bg-blue-600 px-2 py-1 font-medium text-stone-100"
        >
          {tag.label}
        </li>
      ))}
    </ul>
  );
}

export default NoteTagList;
