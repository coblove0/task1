import { Dialog } from 'radix-ui';
import React from 'react';
import './MyModal.css';

function MyModal() {
  const [open, setOpen] = React.useState(false);
  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 !z-50">
        Модальный диалог
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay />
        <Dialog.Content className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[90vw] md:w-[400px] rounded-lg bg-white p-6 shadow-lg focus:outline-none data-[state=open]:animate-slideIn data-state=closed]:animate-slideOut">
          <Dialog.Title> Заголовок диалога </Dialog.Title>
          <Dialog.Description> Описание диалога </Dialog.Description>
          <form>
            {/** some inputs */}
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 !z-50"
            >
              Отправить
            </button>
          </form>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

export default MyModal;
