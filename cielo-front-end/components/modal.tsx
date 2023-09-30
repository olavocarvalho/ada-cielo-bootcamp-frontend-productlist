"use client"

import { DataContext } from '@/context/data-context'
import { Payments } from '@/types'
import { Dialog, Transition } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { Fragment, useContext } from 'react'

interface Props {
  items: Payments[]
}

const Modal = ({ items }: Props) => {
  const { open, setModal, idPaymentSel } = useContext(DataContext)

  if (!idPaymentSel) {
    return <div>Loading...</div>
  }

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={() => setModal && setModal(false)}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 hidden bg-gray-500 bg-opacity-75 transition-opacity md:block" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-stretch justify-center text-center md:items-center md:px-2 lg:px-4">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 md:translate-y-0 md:scale-95"
              enterTo="opacity-100 translate-y-0 md:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 md:scale-100"
              leaveTo="opacity-0 translate-y-4 md:translate-y-0 md:scale-95"
            >
              <Dialog.Panel className="flex w-96 transform text-left text-base transition md:my-8 md:max-w-2xl md:px-4 lg:max-w-4xl bg-white rounded-xl">
                <div>
                  <div className="w-full grid-cols-1 items-center gap-x-6 gap-y-8 sm:grid-cols-12 lg:gap-x-8">
                    <button
                    type="button"
                    className="absolute right-4 top-4 text-gray-400 hover:text-gray-500 sm:right-6 sm:top-8 md:right-6 md:top-6 lg:right-8 lg:top-8"
                    onClick={() => setModal && setModal(false)}
                  >
                    <span className="sr-only">Close</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                    <div className='flex w-full'>
                    <ul className="w-96 ml-4">
                      <li
                        className="w-full   py-4 ">
                        <span className="font-bold">id:</span>
                        <span>{items[idPaymentSel].id}</span>
                      </li>
                      <li
                        className="w-full    py-4 ">
                        <span className="font-bold">Bandeira:</span>
                        <span>{items[idPaymentSel].cardBrand}</span>
                      </li>
                      <li
                        className="w-full    py-4 ">
                        <span className="font-bold">Cod. Autorização:</span>
                        <span>{items[idPaymentSel].authorizationCode}</span>
                      </li>
                      <li
                        className="w-full    py-4 ">
                        <span className="font-bold">Valor bruto:</span>
                        <span>{items[idPaymentSel].grossAmount}</span>
                      </li>
                      <li
                        className="w-full    py-4 ">
                        <span className="font-bold">Valor líquido:</span>
                        <span>{items[idPaymentSel].netAmount}</span>
                      </li>
                      <li
                        className="w-full    py-4 ">
                        <span className="font-bold">Terminal:</span>
                        <span>{items[idPaymentSel].terminal}</span>
                      </li>
                      <li
                        className="w-full    py-4 ">
                        <span className="font-bold">Taxa de administração:</span>
                        <span>{items[idPaymentSel].administrationFee}</span>
                      </li>
                      <li
                        className="w-full    py-4 ">
                        <span className="font-bold">Código do canal:</span>
                        <span>{items[idPaymentSel].channelCode}</span>
                      </li>
                      <li
                        className="w-full    py-4 ">
                        <span className="font-bold">Id do comerciante:</span>
                        <span>{items[idPaymentSel].merchantId}</span>
                      </li>
                      <li className="w-full py-4">
                        <span className="font-bold">Retirar montante:</span>
                        <span>{items[idPaymentSel].withdrawAmount}</span>
                      </li>
                    </ul>
                    </div>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root >
  )
}

export default Modal;