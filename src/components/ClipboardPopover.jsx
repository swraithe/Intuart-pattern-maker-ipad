import {
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverBody,
} from '@chakra-ui/react'
import { useRef, useState } from 'react'
import ClipboardItem from './ClipboardItem'
import useDataContext from '../context/useDataContext';

export default function ClipboardPopover({ style }) {
    const { clipboards, setClipboards, arts, setArts } = useDataContext();

    const onLoadImage = (e) => {
        if (e.target.files.length > 0) {
            setClipboards([
                ...clipboards,
                e.target.files[0]
            ])
        }
    }

    const handleAddClipItem = (e) => {
        const reader = new FileReader();
        reader.onloadend = () => {
            setArts([
                ...arts,
                {
                    width: 200,
                    height: 200,
                    x: 10,
                    y: 10,
                    src: reader.result
                }
            ])
        }
        reader.readAsDataURL(e);
    }

    const initialFocusRef = useRef()
    return (
        <Popover
            initialFocusRef={initialFocusRef}
            placement='left'
            gutter={32}
        >
            <PopoverTrigger>
                <button className='rounded-md flex flex-col items-center gap-2 text-white'>
                    <svg width="28" height="16" viewBox="0 0 28 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.0851 15.532C6.02326 15.532 4.27518 14.8148 2.84085 13.3805C1.40652 11.9461 0.689362 10.1981 0.689362 8.13622C0.689362 6.07438 1.40652 4.32629 2.84085 2.89197C4.27518 1.45764 6.02326 0.740479 8.0851 0.740479H22.2042C23.6834 0.740479 24.9496 1.26715 26.003 2.32048C27.0563 3.37381 27.583 4.64005 27.583 6.1192C27.583 7.59835 27.0563 8.86459 26.003 9.91792C24.9496 10.9713 23.6834 11.4979 22.2042 11.4979H9.42978C8.48851 11.4979 7.6929 11.173 7.04298 10.523C6.39305 9.8731 6.06808 9.0775 6.06808 8.13622C6.06808 7.19494 6.39305 6.39934 7.04298 5.74941C7.6929 5.09948 8.48851 4.77452 9.42978 4.77452H21.1957C21.4871 4.77452 21.728 4.86977 21.9185 5.06026C22.109 5.25076 22.2042 5.49168 22.2042 5.78303C22.2042 6.07438 22.109 6.3153 21.9185 6.5058C21.728 6.69629 21.4871 6.79154 21.1957 6.79154H9.42978C9.04879 6.79154 8.72943 6.9204 8.4717 7.17814C8.21397 7.43587 8.0851 7.75523 8.0851 8.13622C8.0851 8.51721 8.21397 8.83657 8.4717 9.09431C8.72943 9.35204 9.04879 9.4809 9.42978 9.4809H22.2042C23.1455 9.4809 23.9411 9.15594 24.5911 8.50601C25.241 7.85608 25.5659 7.06048 25.5659 6.1192C25.5659 5.17792 25.241 4.38232 24.5911 3.73239C23.9411 3.08246 23.1455 2.7575 22.2042 2.7575H8.0851C6.60596 2.7575 5.33971 3.28417 4.28638 4.3375C3.23305 5.39083 2.70638 6.65707 2.70638 8.13622C2.70638 9.61537 3.23305 10.8816 4.28638 11.9349C5.33971 12.9883 6.60596 13.5149 8.0851 13.5149H21.1957C21.4871 13.5149 21.728 13.6102 21.9185 13.8007C22.109 13.9912 22.2042 14.2321 22.2042 14.5235C22.2042 14.8148 22.109 15.0557 21.9185 15.2462C21.728 15.4367 21.4871 15.532 21.1957 15.532H8.0851Z" fill="currentColor" />
                    </svg>
                    <span className={`transition-all ease-in-out text-xs ${style}`}>Clip Board</span>
                </button>
            </PopoverTrigger>
            <PopoverContent bg='#E1E1E1' borderColor='#E1E1E1' className="!rounded-3xl"
                modifiers={{
                    popper: {
                        className: 'blur-bg',
                    },
                }}>
                <PopoverBody>
                    <div className='flex flex-col items-center w-full p-2'>
                        <div className="grid grid-cols-2 gap-4 w-full">
                            {
                                clipboards?.map((item, index) => (
                                    <ClipboardItem item={item} key={index}
                                        onSelected={() => handleAddClipItem(item)} />
                                ))
                            }
                        </div>
                        <label className="rounded-full bg-[#383838] border-[#383838] text-[#fff] border px-4 py-1 ml-2 text-lg inline-flex gap-2 mt-4 items-center" htmlFor='picker'>
                            <svg width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M2.5 18C1.95 18 1.47917 17.8042 1.0875 17.4125C0.695833 17.0208 0.5 16.55 0.5 16V2C0.5 1.45 0.695833 0.979167 1.0875 0.5875C1.47917 0.195833 1.95 0 2.5 0H10.5C10.7833 0 11.0208 0.0958333 11.2125 0.2875C11.4042 0.479167 11.5 0.716667 11.5 1C11.5 1.28333 11.4042 1.52083 11.2125 1.7125C11.0208 1.90417 10.7833 2 10.5 2H2.5V16H16.5V8C16.5 7.71667 16.5958 7.47917 16.7875 7.2875C16.9792 7.09583 17.2167 7 17.5 7C17.7833 7 18.0208 7.09583 18.2125 7.2875C18.4042 7.47917 18.5 7.71667 18.5 8V16C18.5 16.55 18.3042 17.0208 17.9125 17.4125C17.5208 17.8042 17.05 18 16.5 18H2.5ZM14.5 4H13.5C13.2167 4 12.9792 3.90417 12.7875 3.7125C12.5958 3.52083 12.5 3.28333 12.5 3C12.5 2.71667 12.5958 2.47917 12.7875 2.2875C12.9792 2.09583 13.2167 2 13.5 2H14.5V1C14.5 0.716667 14.5958 0.479167 14.7875 0.2875C14.9792 0.0958333 15.2167 0 15.5 0C15.7833 0 16.0208 0.0958333 16.2125 0.2875C16.4042 0.479167 16.5 0.716667 16.5 1V2H17.5C17.7833 2 18.0208 2.09583 18.2125 2.2875C18.4042 2.47917 18.5 2.71667 18.5 3C18.5 3.28333 18.4042 3.52083 18.2125 3.7125C18.0208 3.90417 17.7833 4 17.5 4H16.5V5C16.5 5.28333 16.4042 5.52083 16.2125 5.7125C16.0208 5.90417 15.7833 6 15.5 6C15.2167 6 14.9792 5.90417 14.7875 5.7125C14.5958 5.52083 14.5 5.28333 14.5 5V4ZM8.75 13L6.9 10.525C6.8 10.3917 6.66667 10.325 6.5 10.325C6.33333 10.325 6.2 10.3917 6.1 10.525L4.1 13.2C3.96667 13.3667 3.95 13.5417 4.05 13.725C4.15 13.9083 4.3 14 4.5 14H14.5C14.7 14 14.85 13.9083 14.95 13.725C15.05 13.5417 15.0333 13.3667 14.9 13.2L12.15 9.525C12.05 9.39167 11.9167 9.325 11.75 9.325C11.5833 9.325 11.45 9.39167 11.35 9.525L8.75 13Z" fill="white" />
                            </svg>
                            Import Image
                        </label>
                        <input type="file" className='hidden' id='picker' onChange={onLoadImage} />
                    </div>
                </PopoverBody>
            </PopoverContent>
        </Popover>
    )
}