import Button from './Button';
import ButtonGroup from './ButtonGroup';

type ConfirmRemoveType = {
  resourceName?: string;
  onRemove: () => void;
  onCloseModal?: () => void;
};

function ConfirmRemove({
  resourceName,
  onRemove,
  onCloseModal,
}: ConfirmRemoveType) {
  return (
    <>
      <p className="py-12 text-xl font-semibold">
        Are you sure you want to delete this {resourceName || ''} permanently?
        This action can't be undone.
      </p>
      <ButtonGroup>
        <Button variation="secondary" onClick={onCloseModal}>
          Cancle
        </Button>
        <Button variation="primary" onClick={onRemove}>
          Remove
        </Button>
      </ButtonGroup>
    </>
  );
}

export default ConfirmRemove;
