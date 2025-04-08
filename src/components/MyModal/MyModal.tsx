import { Dialog } from 'radix-ui';
import React from 'react';
import './MyModal.css';

function MyModal() {
  const [open, setOpen] = React.useState(false);
  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 !z-50">
        Toggle modal
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay />
        <Dialog.Content>
          <Dialog.Title> Заголовок диалога </Dialog.Title>
          <Dialog.Description> Описание диалога </Dialog.Description>
          <form>
            {/** some inputs */}
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 !z-50"
            >
              Submit
            </button>
          </form>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

export default MyModal;
